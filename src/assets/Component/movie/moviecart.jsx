import { Link } from "react-router-dom";
import {
  Clock,
  Star,
} from "lucide-react";
import { handleImageError, FALLBACK_MOVIE } from "../utils/imageFallback";

function MovieCard({ movie }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
      
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => handleImageError(event, FALLBACK_MOVIE)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold">
          <Star
            size={13}
            className="fill-yellow-400 text-yellow-400"
          />
          {movie.rating}
        </div>

        <div className="absolute bottom-3 left-3 rounded-md bg-cinema-600 px-2 py-1 text-xs font-semibold">
          {movie.status === "now-showing"
            ? "Now Showing"
            : "Coming Soon"}
        </div>
      </div>

      <div className="p-4">
        <h3 className="truncate text-sm font-bold sm:text-base">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-2 text-xs text-gray-400 sm:text-sm">
          <span>{movie.genre}</span>

          <span className="flex items-center gap-1">
            <Clock size={13} />
            {movie.duration}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            to={`/movies/${movie.id}`}
            className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-xs font-semibold transition hover:bg-white/10"
          >
            Details
          </Link>

          <Link
            to={`/booking?movie=${movie.id}`}
            className="flex-1 rounded-lg bg-cinema-600 px-3 py-2 text-center text-xs font-semibold transition hover:bg-cinema-700"
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;