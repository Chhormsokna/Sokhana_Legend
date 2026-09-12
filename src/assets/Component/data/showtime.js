import movies from "./movie";
import cinemas from "./cinemas";

const scheduleDates = [
  "2026-09-05",
  // "2026-09-06",
  // "2026-09-07",
];

const scheduleSlots = [
  { time: "10:30 AM", format: "2D", hall: "Hall 1", price: 6 },
  { time: "2:30 PM", format: "3D", hall: "Hall 2", price: 8 },
  { time: "7:30 PM", format: "VIP", hall: "Hall VIP", price: 12 },
];

const showtimes = [];
let id = 1;

scheduleDates.forEach((date, dateIndex) => {
  movies.forEach((movie) => {
    cinemas.forEach((cinema) => {
      scheduleSlots.forEach((slot, slotIndex) => {
        showtimes.push({
          id,
          movieId: movie.id,
          cinemaId: cinema.id,
          date,
          time: slot.time,
          format: slot.format,
          hall: slot.hall,
          availableSeats: 40 - ((movie.id + cinema.id + dateIndex + slotIndex) % 16),
          price: slot.price,
        });

        id += 1;
      });
    });
  });
});

export default showtimes;
