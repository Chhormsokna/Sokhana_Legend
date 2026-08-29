import { Link, useParams } from "react-router-dom";
import {
  Clock,
  MapPin,
} from "lucide-react";

import cinemas from "../data/cinemas";
import movies from "../data/movie";
import CinemaInfo from "../cinemas/cinemainfo";
import MovieCard from "../movie/moviecart";

function CinemaDetails() {
  const { id } = useParams();

  const cinema = cinemas.find(
    (item) => item.id === Number(id)
  );

  if (!cinema) {
    return (
      <div className="container-cinema py-32 text-center">
        <h1 className="text-3xl font-bold">
          Cinema Not Found
        </h1>

        <Link
          to="/cinemas"
          className="cinema-button mt-6"
        >
          Back to Cinemas
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={cinema.image}
          alt={cinema.name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/1600x600/18181b/ffffff?text=Cinema";
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="container-cinema relative flex h-full items-end pb-12">
          <div>
            <span className="rounded-md bg-cinema-600 px-3 py-1 text-xs font-bold">
              {cinema.location}
            </span>

            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              {cinema.name}
            </h1>

            <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-300">
              <span className="flex gap-2">
                <MapPin size={17} />
                {cinema.address}
              </span>

              <span className="flex gap-2">
                <Clock size={17} />
                {cinema.openingHours}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-cinema py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
          <div>
            <h2 className="text-2xl font-bold">
              Now Playing
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {movies
                .filter(
                  (movie) =>
                    movie.status === "now-showing"
                )
                .slice(0, 6)
                .map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                  />
                ))}
            </div>
          </div>

          <CinemaInfo cinema={cinema} />
        </div>
      </section>
    </div>
  );
}

export default CinemaDetails;