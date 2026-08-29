import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
} from "lucide-react";

function CinemaCard({ cinema }) {
  return (
    <article className="cinema-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={cinema.image}
          alt={cinema.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          onError={(event) => {
            event.currentTarget.src =
              "https://placehold.co/800x500/18181b/ffffff?text=Cinema";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-md bg-cinema-600 px-3 py-1 text-xs font-semibold">
          {cinema.location}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="truncate text-base font-bold">
          {cinema.name}
        </h3>

        <div className="mt-3 space-y-2 text-xs text-gray-400 sm:text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={15} className="shrink-0" />
            <span className="min-w-0 flex-1 truncate">
              {cinema.address}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={15} className="shrink-0" />
            <span className="min-w-0 flex-1 truncate">
              {cinema.openingHours}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {cinema.facilities.map(
            (facility) => (
              <span
                key={facility}
                className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-400"
              >
                {facility}
              </span>
            )
          )}
        </div>

        <Link
          to={`/cinemas/${cinema.id}`}
          className="mt-5 block rounded-lg bg-cinema-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-cinema-700"
        >
          View Cinema
        </Link>
      </div>
    </article>
  );
}

export default CinemaCard;