import { useState } from "react";
import { Film, Image, Calendar, Sparkles } from "lucide-react";

const EMPTY = {
  title: "",
  genre: "",
  duration: "",
  rating: "",
  language: "English",
  ageRating: "PG-13",
  releaseDate: "",
  status: "now-showing",
  director: "",
  cast: "",
  poster: "",
  banner: "",
  description: "",
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/70 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 outline-none transition focus:border-cinema-500 focus:ring-1 focus:ring-cinema-500/50";

function MovieForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(() =>
    initial
      ? {
          ...EMPTY,
          ...initial,
          cast: Array.isArray(initial.cast)
            ? initial.cast.join(", ")
            : initial.cast || "",
        }
      : EMPTY
  );

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...form,
      rating: form.rating ? String(form.rating) : "7.5",
      cast:
        typeof form.cast === "string"
          ? form.cast
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : form.cast || [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Group 1: Basic Info */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cinema-400">
          <Film size={14} />
          <span>Basic Information</span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Movie Title <span className="text-cinema-400">*</span>
            </span>
            <input
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Avatar: Fire and Ash"
              className={inputClass}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Genre <span className="text-cinema-400">*</span>
            </span>
            <input
              name="genre"
              required
              value={form.genre}
              onChange={handleChange}
              placeholder="e.g. Action, Sci-Fi"
              className={inputClass}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Duration
            </span>
            <input
              name="duration"
              placeholder="e.g. 2h 15m"
              value={form.duration}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Rating (0 - 10)
            </span>
            <input
              name="rating"
              type="number"
              min="0"
              max="10"
              step="0.1"
              placeholder="e.g. 8.8"
              value={form.rating}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Language
            </span>
            <input
              name="language"
              placeholder="e.g. English, Khmer"
              value={form.language}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Age Rating
            </span>
            <select
              name="ageRating"
              value={form.ageRating}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="G">G (General Audience)</option>
              <option value="PG">PG (Parental Guidance)</option>
              <option value="PG-13">PG-13 (Teens)</option>
              <option value="R">R (Restricted)</option>
              <option value="18+">18+ (Adults)</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Status
            </span>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="now-showing">Now Showing (In Theaters)</option>
              <option value="coming-soon">Coming Soon</option>
            </select>
          </label>
        </div>
      </div>

      {/* Group 2: Production & Scheduling */}
      <div className="border-t border-white/5 pt-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cinema-400">
          <Calendar size={14} />
          <span>Production & Cast</span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Release Date
            </span>
            <input
              name="releaseDate"
              type="date"
              value={form.releaseDate}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Director
            </span>
            <input
              name="director"
              placeholder="e.g. James Cameron"
              value={form.director}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Starring Cast (comma-separated)
            </span>
            <input
              name="cast"
              placeholder="e.g. Sam Worthington, Zoe Saldana, Sigourney Weaver"
              value={form.cast}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
        </div>
      </div>

      {/* Group 3: Media & Poster */}
      <div className="border-t border-white/5 pt-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cinema-400">
          <Image size={14} />
          <span>Media & Artwork</span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Poster Image URL
            </span>
            <input
              name="poster"
              placeholder="https://images.unsplash.com/..."
              value={form.poster}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Banner / Backdrop Image URL
            </span>
            <input
              name="banner"
              placeholder="https://images.unsplash.com/..."
              value={form.banner}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">
              Storyline Description
            </span>
            <textarea
              name="description"
              rows={3}
              placeholder="Enter synopsis or movie storyline..."
              value={form.description}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-end gap-3 border-t border-white/5 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-semibold text-gray-300 transition hover:bg-white/10"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-cinema-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cinema-600/30 transition hover:bg-cinema-700"
        >
          <Sparkles size={15} />
          {initial ? "Save Movie Changes" : "Create & Publish Movie"}
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
