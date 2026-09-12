import baseMovies from "./movie";

const STORE_KEY = "legend_admin_movies";

export function getMovies() {
  try {
    const stored = JSON.parse(
      localStorage.getItem(STORE_KEY)
    );

    if (Array.isArray(stored) && stored.length > 0) {
      // Merge newly added movies from baseMovies if not yet present
      const storedIds = new Set(stored.map((m) => m.id));
      const newItems = baseMovies.filter((m) => !storedIds.has(m.id));
      if (newItems.length > 0) {
        const merged = [...stored, ...newItems];
        localStorage.setItem(STORE_KEY, JSON.stringify(merged));
        return merged;
      }
      return stored;
    }
  } catch {
    // broken storage - fall back to base data
  }

  return baseMovies;
}

export function saveMovies(movies) {
  localStorage.setItem(
    STORE_KEY,
    JSON.stringify(movies)
  );
}
