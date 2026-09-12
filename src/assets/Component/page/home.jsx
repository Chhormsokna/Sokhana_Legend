import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Play,
  Star,
} from "lucide-react";

import { getMovies } from "../data/movieStore";
import cinemas from "../data/cinemas";
import promotions from "../data/promotions";
import food from "../data/foods";

import MovieCard from "../movie/moviecart";
import CinemaCard from "../cinemas/Cinemacard";
import PromotionCard from "../promotion/promotionscart";

function Home() {
  const movies = getMovies();

  const nowShowing = movies.filter(
    (movie) => movie.status === "now-showing"
  );

  const comingSoon = movies.filter(
    (movie) => movie.status === "coming-soon"
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden">
        <img
          src={movies[0].banner}
          alt={movies[0].title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="container-cinema relative flex min-h-[650px] items-center">
          <div className="max-w-2xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cinema-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Now Showing
              </span>

              <span className="flex items-center gap-1 text-sm text-gray-300">
                <Star
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />
                {movies[0].rating}
              </span>

              <span className="text-sm text-gray-300">
                {movies[0].duration}
              </span>
            </div>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              {movies[0].title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              {movies[0].description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/booking?movie=${movies[0].id}`}
                className="cinema-button"
              >
                Book Now
                <ArrowRight size={18} className="ml-2" />
              </Link>

              <button className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/20">
                <Play size={18} className="mr-2 fill-white" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NOW SHOWING */}
      <section className="container-cinema py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
              What's On
            </p>

            <h2 className="section-title">
              Now Showing
            </h2>
          </div>

          <Link
            to="https://i.pinimg.com/736x/e2/2a/cc/e22acce459049a5386d04316eed69982.jpg"
            className="hidden items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-white sm:flex"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {nowShowing.slice(0, 8).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>

        <Link
          to="/movies"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-gray-400 sm:hidden"
        >
          View All Movies
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* COMING SOON */}
      <section className="bg-zinc-950 py-16">
        <div className="container-cinema">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
                Coming Soon
              </p>

              <h2 className="section-title">
                Upcoming Movies
              </h2>
            </div>

            <Link
              to="/movies"
              className="hidden items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white sm:flex"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {comingSoon.slice(0, 8).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CINEMAS */}
      <section className="container-cinema py-16">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
            Find Us
          </p>

          <h2 className="section-title">
            Our Cinemas
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cinemas.slice(0, 3).map((cinema) => (
            <CinemaCard
              key={cinema.id}
              cinema={cinema}
            />
          ))}
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="bg-zinc-950 py-16">
        <div className="container-cinema">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
                Don't Miss Out
              </p>

              <h2 className="section-title">
                Latest Promotions
              </h2>
            </div>

            <Link
              to="/promotions"
              className="hidden items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white sm:flex"
            >
              All Promotions
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.slice(0, 3).map((promotion) => (
              <PromotionCard
                key={promotion.id}
                promotion={promotion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="container-cinema py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
              Make It Better
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Movie Night
              <br />
              Needs Snacks
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-gray-400">
              Complete your cinema experience with fresh
              popcorn, refreshing drinks and delicious
              combos.
            </p>

            <Link
              to="/food"
              className="cinema-button mt-7"
            >
              Explore Food & Drinks
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3">
            {food.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-cinema-600/40 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/500x500/18181b/ffffff?text=Food";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60" />

                  {item.category && (
                    <span className="absolute left-2.5 top-2.5 rounded-full border border-white/10 bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-gray-300 backdrop-blur-md">
                      {item.category}
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="line-clamp-1 text-sm font-bold text-white group-hover:text-cinema-400 transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-extrabold text-cinema-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-y border-white/10 bg-gradient-to-r from-cinema-900/40 to-black py-16">
        <div className="container-cinema text-center">
          <CalendarDays
            className="mx-auto text-cinema-500"
            size={35}
          />

          <h2 className="mt-4 text-3xl font-black">
            Never Miss a Movie
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Subscribe to receive movie news, upcoming releases
            and exclusive promotions.
          </p>

          <form className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
            />

            <button className="cinema-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;