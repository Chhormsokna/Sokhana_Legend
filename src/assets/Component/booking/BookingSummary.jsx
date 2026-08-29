import { formatDate } from "../routers/formatdata";
import { formatPrice } from "../utils/formatesprice";

function BookingSummary({ movie, cinema, showtime, seats }) {
  const total = seats.length * (showtime?.price ?? 0);

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
      <h2 className="text-lg font-bold">Booking Summary</h2>

      {movie && (
        <div className="mt-5 flex gap-4">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-28 w-20 rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/200x300/18181b/ffffff?text=Movie";
            }}
          />

          <div>
            <h3 className="font-bold">{movie.title}</h3>

            <p className="mt-1 text-sm text-gray-400">
              {movie.genre} • {movie.duration}
            </p>

            <p className="mt-1 text-sm text-gray-400">
              {movie.ageRating} • {movie.language}
            </p>
          </div>
        </div>
      )}

      <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Cinema</span>
          <span className="text-right font-medium">
            {cinema?.name ?? "—"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Showtime</span>
          <span className="text-right font-medium">
            {showtime
              ? `${formatDate(showtime.date)} • ${showtime.time}`
              : "—"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Hall</span>
          <span className="font-medium">
            {showtime?.hall ?? "—"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">
            Seats ({seats.length})
          </span>

          <span className="flex flex-wrap justify-end gap-1.5">
            {seats.length > 0
              ? seats.map((seat) => (
                  <span
                    key={seat.id ?? seat}
                    className="rounded bg-white/10 px-2 py-0.5 text-xs font-semibold"
                  >
                    {seat.id ?? seat}
                  </span>
                ))
              : "—"}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="font-bold">Total</span>
        <span className="text-xl font-black text-cinema-500">
          {formatPrice(total)}
        </span>
      </div>
    </div>
  );
}

export default BookingSummary;
