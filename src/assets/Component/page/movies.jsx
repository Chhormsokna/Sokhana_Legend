import { useMemo, useState } from "react";

import { getMovies } from "../data/movieStore";
import MovieGrid from "../movie/moviegrid";
import MovieFilter from "../movie/moviefilter";
import EmptyState from "../common/emptystate";

function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const movies = useMemo(() => getMovies(), []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch =
        movie.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesGenre =
        !genre || movie.genre === genre;

      const matchesStatus =
        !status || movie.status === status;

      return (
        matchesSearch &&
        matchesGenre &&
        matchesStatus
      );
    });
  }, [search, genre, status]);

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
          Discover
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">
          Movies
        </h1>

        <p className="mt-3 text-gray-400">
          Find your next movie experience.
        </p>
      </div>

      <MovieFilter
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        status={status}
        setStatus={setStatus}
      />

      {filteredMovies.length > 0 ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <EmptyState
          title="No movies found"
          description="Try changing your search or filters."
        />
      )}
    </div>
  );
}

export default Movies;