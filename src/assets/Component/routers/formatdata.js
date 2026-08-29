export function formatDate(dateString) {
  if (!dateString) return "";

  return new Date(`${dateString}T00:00:00`).toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

export function formatShowtimeLabel(showtime) {
  if (!showtime) return "";

  return `${formatDate(showtime.date)} • ${showtime.time}`;
}
