import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

import showtimes from "../data/showtime";
import movies from "../data/movie";
import cinemas from "../data/cinemas";

function Showtimes() {
  const [selectedCinema, setSelectedCinema] =
    useState("");

  const [selectedDate, setSelectedDate] =
    useState("2026-08-28");

  const filteredShowtimes = useMemo(() => {
    return showtimes.filter((item) => {
      const cinemaMatch =
        !selectedCinema ||
        item.cinemaId === Number(selectedCinema);

      const dateMatch =
        item.date === selectedDate;

      return cinemaMatch && dateMatch;
    });
  }, [selectedCinema, selectedDate]);

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
          Find a Showtime
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">
          Showtimes
        </h1>
      </div>

      {/* Filters */}
      <div className="mb-8 grid gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5 md:grid-cols-2">
        <label>
          <span className="mb-2 block text-sm font-semibold">
            Cinema
          </span>

          <select
            value={selectedCinema}
            onChange={(e) =>
              setSelectedCinema(e.target.value)
            }
            className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
          >
            <option value="">
              All Cinemas
            </option>

            {cinemas.map((cinema) => (
              <option
                key={cinema.id}
                value={cinema.id}
              >
                {cinema.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-2 block text-sm font-semibold">
            Date
          </span>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(e.target.value)
            }
            className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
          />
        </label>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredShowtimes.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-zinc-900 p-10 text-center text-gray-500">
            No showtimes available for this date.
          </div>
        ) : (
          filteredShowtimes.map((showtime) => {
            const movie = movies.find(
              (item) =>
                item.id === showtime.movieId
            );

            const cinema = cinemas.find(
              (item) =>
                item.id === showtime.cinemaId
            );

            return (
              <div
                key={showtime.id}
                className="flex flex-col gap-5 rounded-xl border border-white/10 bg-zinc-900 p-5 md:flex-row md:items-center"
              >
                <img
                  src={movie?.poster}
                  alt={movie?.title}
                  className="h-28 w-20 rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/200x300/18181b/ffffff?text=Movie";
                  }}
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold">
                    {movie?.title}
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex gap-1">
                      <MapPin size={14} />
                      {cinema?.name}
                    </span>

                    <span className="flex gap-1">
                      <Clock size={14} />
                      {showtime.hall}
                    </span>

                    <span>
                      {showtime.format}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-gray-500">
                    {showtime.availableSeats} seats available
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xl font-black">
                      {showtime.time}
                    </p>

                    <p className="text-xs text-cinema-500">
                      ${showtime.price.toFixed(2)}
                    </p>
                  </div>

                  <Link
                    to={`/booking?movie=${movie?.id}&showtime=${showtime.id}`}
                    className="rounded-lg bg-cinema-600 px-5 py-3 text-sm font-semibold hover:bg-cinema-700"
                  >
                    Book
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Showtimes;