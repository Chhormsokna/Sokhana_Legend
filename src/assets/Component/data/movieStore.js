import baseMovies from "./movie";

const STORE_KEY = "legend_admin_movies";

export function getMovies() {
  try {
    const stored = JSON.parse(
      localStorage.getItem(STORE_KEY)
    );

    if (Array.isArray(stored) && stored.length > 0) {
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
