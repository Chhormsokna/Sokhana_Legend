import { useEffect, useMemo, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import movies from "../data/movie";
import cinemas from "../data/cinemas";
import showtimes from "../data/showtime";
import { saveBooking } from "../data/bookings";

import BookingSteps from "../booking/BookingSteps";
import ShowtimesCard from "../booking/showtimescard";
import SeatMap from "../booking/seatmap";
import BookingSummary from "../booking/BookingSummary";
import PaymentForm from "../booking/PaymentForm";

import {
  SEAT_ROWS,
  SEATS_PER_ROW,
  buildSeatMap,
  calculateSeatsTotal,
} from "../routers/bookingutils";

function getTakenSeatIds(showtimeId) {
  const totalSeats =
    SEAT_ROWS.length * SEATS_PER_ROW;

  const takenCount = Math.floor(
    totalSeats * 0.25
  );

  const taken = [];
  let seed = showtimeId * 7919;

  for (let i = 0; i < takenCount; i += 1) {
    seed = (seed * 9301 + 49297) % 233280;

    const index = Math.floor(
      (seed / 233280) * totalSeats
    );

    const row =
      SEAT_ROWS[
        Math.floor(index / SEATS_PER_ROW)
      ];

    const id = `${row}${(index % SEATS_PER_ROW) + 1}`;

    if (!taken.includes(id)) {
      taken.push(id);
    }
  }

  return taken;
}

function Booking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [step, setStep] = useState(0);
  const [movieId, setMovieId] = useState("");
  const [cinemaId, setCinemaId] = useState("");
  const [showtime, setShowtime] = useState(null);
  const [seats, setSeats] = useState([]);
  const [processing, setProcessing] = useState(false);

  // Pre-select the movie from /booking?movie=ID
  useEffect(() => {
    const fromQuery = Number(
      searchParams.get("movie")
    );

    if (
      fromQuery &&
      movies.some((item) => item.id === fromQuery)
    ) {
      setMovieId(fromQuery);
    }
  }, [searchParams]);

  const movie = movies.find(
    (item) => item.id === Number(movieId)
  );

  const cinema = cinemas.find(
    (item) => item.id === Number(cinemaId)
  );

  const availableShowtimes = useMemo(
    () =>
      showtimes.filter(
        (item) =>
          (!movieId ||
            item.movieId === Number(movieId)) &&
          (!cinemaId ||
            item.cinemaId === Number(cinemaId))
      ),
    [movieId, cinemaId]
  );

  const seatMap = useMemo(
    () =>
      buildSeatMap(
        showtime ? getTakenSeatIds(showtime.id) : []
      ),
    [showtime]
  );

  const total = showtime
    ? calculateSeatsTotal(showtime, seats)
    : 0;

  const handleMovieChange = (value) => {
    setMovieId(value);
    setShowtime(null);
    setSeats([]);
  };

  const handleCinemaChange = (value) => {
    setCinemaId(value);
    setShowtime(null);
    setSeats([]);
  };

  const handleShowtimeSelect = (item) => {
    setShowtime(item);
    setSeats([]);
  };

  const handleToggleSeat = (seat) => {
    setSeats((previous) =>
      previous.some((item) => item.id === seat.id)
        ? previous.filter(
            (item) => item.id !== seat.id
          )
        : [...previous, seat]
    );
  };

  // Payment complete -> record booking and redirect
  const handlePayment = () => {
    setProcessing(true);

    const bookingRecord = {
      id: `BK-${Date.now().toString().slice(-6)}`,
      movieId: movie?.id,
      movieTitle: movie?.title || "Movie Ticket",
      cinemaId: cinema?.id,
      cinemaName: cinema?.name || "Legend Cinema",
      date: showtime?.date || new Date().toISOString().split("T")[0],
      time: showtime?.time || "19:00",
      hall: showtime?.hall || "Hall 1",
      seats: seats.map((seat) => seat.id),
      total: total,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    saveBooking(bookingRecord);

    setTimeout(() => {
      setStep(0);
      setSeats([]);
      setShowtime(null);
      setProcessing(false);
      navigate("/");
    }, 600);
  };

  const selectClass =
    "w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500";

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
          Book Your Tickets
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">
          Booking
        </h1>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-4">
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:bg-white/10"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        )}

        <BookingSteps currentStep={step} />
      </div>

      {/* STEP 1 - Showtime */}
      {step === 0 && (
        <div className="space-y-6">
          <div className="grid gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-semibold">
                Movie
              </span>

              <select
                value={movieId}
                onChange={(e) =>
                  handleMovieChange(e.target.value)
                }
                className={selectClass}
              >
                <option value="">
                  Select a movie
                </option>

                {movies.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold">
                Cinema
              </span>

              <select
                value={cinemaId}
                onChange={(e) =>
                  handleCinemaChange(
                    e.target.value
                  )
                }
                className={selectClass}
              >
                <option value="">
                  All Cinemas
                </option>

                {cinemas.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {availableShowtimes.length === 0 ? (
            <p className="rounded-xl border border-white/10 bg-zinc-900 p-10 text-center text-sm text-gray-500">
              {movieId
                ? "No showtimes found for this selection."
                : "Select a movie to see available showtimes."}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {availableShowtimes.map((item) => (
                <ShowtimesCard
                  key={item.id}
                  showtime={item}
                  isSelected={
                    showtime?.id === item.id
                  }
                  onSelect={handleShowtimeSelect}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => setStep(1)}
            disabled={!movieId || !showtime}
            className="cinema-button w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Choose Seats
          </button>
        </div>
      )}

      {/* STEP 2 - Seats */}
      {step === 1 && (
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          <SeatMap
            seats={seatMap}
            selectedSeatIds={seats.map(
              (seat) => seat.id
            )}
            onToggleSeat={handleToggleSeat}
          />

          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <BookingSummary
              movie={movie}
              cinema={cinema}
              showtime={showtime}
              seats={seats}
            />

            <button
              onClick={() => setStep(2)}
              disabled={seats.length === 0}
              className="cinema-button w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 - Payment */}
      {step === 2 && (
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-5">
            <BookingSummary
              movie={movie}
              cinema={cinema}
              showtime={showtime}
              seats={seats}
            />

            <p className="text-sm text-gray-500">
              After payment you will be redirected
              to the home page.
            </p>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <PaymentForm
              total={total}
              processing={processing}
              onConfirm={handlePayment}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
