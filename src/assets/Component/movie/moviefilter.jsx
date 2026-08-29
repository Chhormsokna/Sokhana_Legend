import { Search } from "lucide-react";

function MovieFilter({
  search,
  setSearch,
  genre,
  setGenre,
  status,
  setStatus
}) {
  return (
    <div className="mb-8 grid gap-4 rounded-xl border border-white/10 bg-zinc-900 p-4 md:grid-cols-4">

      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search movies..."
          className="w-full rounded-lg border border-white/10 bg-black px-10 py-3 text-sm outline-none focus:border-cinema-500"
        />
      </div>

      <select
        value={genre}
        onChange={(e) =>
          setGenre(e.target.value)
        }
        className="rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Romance">Romance</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Drama">Drama</option>
      </select>

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
      >
        <option value="">All Movies</option>
        <option value="now-showing">
          Now Showing
        </option>
        <option value="coming-soon">
          Coming Soon
        </option>
      </select>

      <button
        onClick={() => {
          setSearch("");
          setGenre("");
          setStatus("");
        }}
        className="rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default MovieFilter;