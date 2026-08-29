import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Play,
  Star,
} from "lucide-react";
import { formatDate } from "../routers/formatdata";

function MovieHero({ movie, onPlayTrailer }) {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <img
        src={movie.banner}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/1920x900/18181b/ffffff?text=Legend+Cinema";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="container-cinema relative flex min-h-[600px] items-center">
        <div className="max-w-2xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cinema-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              {movie.status === "coming-soon"
                ? "Coming Soon"
                : "Now Showing"}
            </span>

            <span className="flex items-center gap-1 text-sm text-gray-300">
              <Star
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />
              {movie.rating}
            </span>

            <span className="flex items-center gap-1 text-sm text-gray-300">
              <Clock size={15} />
              {movie.duration}
            </span>

            <span className="flex items-center gap-1 text-sm text-gray-300">
              <CalendarDays size={15} />
              {formatDate(movie.releaseDate)}
            </span>
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl">
            {movie.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            {movie.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/booking?movie=${movie.id}`}
              className="cinema-button"
            >
              Book Now
            </Link>

            {onPlayTrailer && (
              <button
                type="button"
                onClick={onPlayTrailer}
                className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10"
              >
                <Play size={18} />
                Watch Trailer
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieHero;
