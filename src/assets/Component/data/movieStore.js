import baseMovies from "./movie";

const STORE_KEY = "legend_admin_movies";

export function getMovies() {
  try {
    const stored = JSON.parse(
      localStorage.getItem(STORE_KEY)
    );

    if (Array.isArray(stored) && stored.length > 0) {
      const baseMap = new Map(baseMovies.map((m) => [m.id, m]));
      let updated = false;

      // Sync updated poster, banner, title, description from baseMovies
      const refreshed = stored.map((m) => {
        const base = baseMap.get(m.id);
        if (base && (m.title !== base.title || m.poster !== base.poster || m.banner !== base.banner || m.description !== base.description)) {
          updated = true;
          return {
            ...m,
            title: base.title,
            poster: base.poster,
            banner: base.banner,
            genre: base.genre,
            duration: base.duration,
            rating: base.rating,
            director: base.director,
            cast: base.cast,
            description: base.description,
          };
        }
        return m;
      });

      // Merge newly added movies from baseMovies if not yet present
      const storedIds = new Set(refreshed.map((m) => m.id));
      const newItems = baseMovies.filter((m) => !storedIds.has(m.id));

      if (newItems.length > 0 || updated) {
        const merged = [...refreshed, ...newItems];
        localStorage.setItem(STORE_KEY, JSON.stringify(merged));
        return merged;
      }
      return refreshed;
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
