import { useState } from "react";
import {
  Pencil,
  Plus,
  Trash2,
  X,
  Search,
  Star,
  Clock,
  Film,
} from "lucide-react";
import { getMovies, saveMovies } from "../data/movieStore";
import MovieForm from "./MovieForm";

function MoviesManager() {
  const [list, setList] = useState(getMovies());
  const [editing, setEditing] = useState(null); // "new" | movie object | null
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const persist = (next) => {
    setList(next);
    saveMovies(next);
  };

  const handleSave = (data) => {
    if (editing === "new") {
      persist([...list, { ...data, id: Date.now() }]);
    } else {
      persist(
        list.map((movie) =>
          movie.id === editing.id ? { ...movie, ...data } : movie
        )
      );
    }

    setEditing(null);
  };

  const handleDelete = (movie) => {
    if (list.length <= 1) {
      alert("At least one movie must remain in the catalog.");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      return;
    }

    persist(list.filter((item) => item.id !== movie.id));
  };

  const filteredList = list.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.genre?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || movie.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm">
      {/* Header & Controls */}
      <div className="flex flex-col gap-4 border-b border-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Movie Catalog</h3>
          <p className="text-xs text-gray-400">
            Manage movies, posters, and showtime listings
          </p>
        </div>

        <button
          onClick={() => setEditing("new")}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cinema-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-cinema-600/30 transition hover:bg-cinema-700"
        >
          <Plus size={16} />
          Add New Movie
        </button>
      </div>

      {/* Search & Status Filters */}
      <div className="flex flex-col gap-3 border-b border-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search movie title or genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/60 py-2 pl-9 pr-4 text-xs text-white placeholder-gray-500 outline-none focus:border-cinema-500"
          />
        </div>

        <div className="flex gap-1.5">
          {[
            { id: "all", label: "All" },
            { id: "now-showing", label: "Now Showing" },
            { id: "coming-soon", label: "Coming Soon" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilterStatus(id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                filterStatus === id
                  ? "bg-white/20 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Movie List Items */}
      {filteredList.length === 0 ? (
        <div className="py-16 text-center">
          <Film size={32} className="mx-auto text-gray-600" />
          <p className="mt-3 text-sm font-semibold text-gray-400">
            No movies match your filter
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Try searching for something else or add a new movie.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-white/5">
          {filteredList.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.02]"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-16 w-12 shrink-0 rounded-lg border border-white/10 object-cover shadow-sm"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/200x300/18181b/ffffff?text=Movie";
                }}
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate text-sm font-bold text-white">
                    {movie.title}
                  </p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      movie.status === "now-showing"
                        ? "bg-cinema-500/20 text-cinema-400 border border-cinema-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {movie.status === "now-showing"
                      ? "Now Showing"
                      : "Coming Soon"}
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-medium text-gray-300">
                    {movie.genre}
                  </span>
                  {movie.duration && (
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {movie.duration}
                    </span>
                  )}
                  {movie.rating && (
                    <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                      <Star size={12} className="fill-yellow-400" />
                      {movie.rating}
                    </span>
                  )}
                  {movie.language && (
                    <span className="text-gray-500">{movie.language}</span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  onClick={() => setEditing(movie)}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:border-cinema-500/50 hover:bg-cinema-600/20 hover:text-white"
                  title="Edit movie"
                >
                  <Pencil size={15} />
                </button>

                <button
                  onClick={() => handleDelete(movie)}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-400"
                  title="Delete movie"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit/Create Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setEditing(null)}
          />

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">
                  {editing === "new" ? "Add New Movie" : `Edit Movie`}
                </h3>
                <p className="text-xs text-gray-400">
                  {editing === "new"
                    ? "Enter movie details to add to catalog"
                    : editing.title}
                </p>
              </div>

              <button
                onClick={() => setEditing(null)}
                className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <MovieForm
              initial={editing === "new" ? null : editing}
              onSave={handleSave}
              onCancel={() => setEditing(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviesManager;
