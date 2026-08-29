import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  Play,
  Star,
} from "lucide-react";

import movies from "../data/movie";
import showtimes from "../data/showtime";
import cinemas from "../data/cinemas";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="container-cinema py-32 text-center">
        <h1 className="text-3xl font-bold">
          Movie Not Found
        </h1>

        <Link
          to="/movies"
          className="cinema-button mt-6"
        >
          Back to Movies
        </Link>
      </div>
    );
  }

  const movieShowtimes = showtimes.filter(
    (showtime) => showtime.movieId === movie.id
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden">
        <img
          src={movie.banner}
          alt={movie.title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/1920x700/18181b/ffffff?text=Movie";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="container-cinema relative flex min-h-[500px] items-end pb-12">
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-end">
            <img
              src={movie.poster}
              alt={movie.title}
              className="hidden w-48 rounded-xl shadow-2xl md:block"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/500x750/18181b/ffffff?text=Movie";
              }}
            />

            <div className="max-w-3xl">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-cinema-600 px-3 py-1 text-xs font-bold">
                  {movie.genre}
                </span>

                <span className="rounded-md bg-white/10 px-3 py-1 text-xs">
                  {movie.ageRating}
                </span>
              </div>

              <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
                {movie.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Star className="text-yellow-400" size={16} />
                  {movie.rating}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {movie.duration}
                </span>

                <span>{movie.language}</span>

                <span>{movie.releaseDate}</span>
              </div>

              <div className="mt-7 flex gap-3">
                <Link
                  to={`/booking?movie=${movie.id}`}
                  className="cinema-button"
                >
                  Book Ticket
                </Link>

                <button className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">
                  <Play
                    size={17}
                    className="mr-2 fill-white"
                  />
                  Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="container-cinema py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
          <div>
            <h2 className="text-2xl font-bold">
              About the Movie
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              {movie.description}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase text-gray-500">
                  Director
                </p>
                <p className="mt-1 font-semibold">
                  {movie.director}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500">
                  Release Date
                </p>
                <p className="mt-1 font-semibold">
                  {movie.releaseDate}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs uppercase text-gray-500">
                  Cast
                </p>

                <p className="mt-1 font-semibold">
                  {movie.cast.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900 p-5">
            <h2 className="font-bold">
              Movie Information
            </h2>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Genre
                </span>
                <span>{movie.genre}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Duration
                </span>
                <span>{movie.duration}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Language
                </span>
                <span>{movie.language}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Rating
                </span>
                <span>{movie.ageRating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showtimes */}
      <section className="bg-zinc-950 py-14">
        <div className="container-cinema">
          <h2 className="text-2xl font-bold">
            Available Showtimes
          </h2>

          {movieShowtimes.length === 0 ? (
            <p className="mt-6 text-gray-500">
              No showtimes available.
            </p>
          ) : (
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {movieShowtimes.map((showtime) => {
                const cinema = cinemas.find(
                  (item) =>
                    item.id === showtime.cinemaId
                );

                return (
                  <div
                    key={showtime.id}
                    className="rounded-xl border border-white/10 bg-zinc-900 p-5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold">
                          {cinema?.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {showtime.hall}
                        </p>
                      </div>

                      <span className="rounded-md bg-cinema-600 px-2 py-1 text-xs font-bold">
                        {showtime.format}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-black">
                          {showtime.time}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {showtime.availableSeats} seats available
                        </p>
                      </div>

                      <Link
                        to={`/booking?movie=${movie.id}&showtime=${showtime.id}`}
                        className="rounded-lg bg-cinema-600 px-4 py-2 text-sm font-semibold hover:bg-cinema-700"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MovieDetails;