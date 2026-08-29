import { Link } from "react-router-dom";

function MyBookings() {
  const bookings = JSON.parse(
    localStorage.getItem("legend_bookings") || "[]"
  );

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-cinema-500">
          Account
        </p>

        <h1 className="mt-2 text-4xl font-black">
          My Bookings
        </h1>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-12 text-center">
          <div className="text-5xl">🎟️</div>

          <h2 className="mt-5 text-xl font-bold">
            No bookings yet
          </h2>

          <p className="mt-2 text-gray-500">
            Your completed bookings will appear here.
          </p>

          <Link
            to="/movies"
            className="cinema-button mt-6"
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-xl border border-white/10 bg-zinc-900 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-gray-500">
                    Booking ID
                  </p>

                  <p className="font-bold">
                    {booking.id}
                  </p>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Confirmed
                </span>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="font-bold text-lg text-white">
                  {booking.movieTitle || booking.movie?.title || "Movie Ticket"}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {booking.cinemaName || "Legend Cinema"} • {booking.date} •{" "}
                  {booking.time || booking.showtime?.time}
                </p>

                <p className="mt-1 text-sm text-cinema-400">
                  Seats:{" "}
                  {Array.isArray(booking.seats)
                    ? booking.seats.join(", ")
                    : booking.seats}
                </p>
                {booking.total && (
                  <p className="mt-2 text-sm font-bold text-white">
                    Total: ${Number(booking.total).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;