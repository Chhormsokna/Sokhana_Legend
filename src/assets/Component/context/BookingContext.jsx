import { createContext, useContext, useState } from "react";

export const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({
    movie: null,
    cinema: null,
    showtime: null,
    seats: [],
  });

  const selectMovie = (movie) =>
    setBooking((prev) => ({ ...prev, movie }));

  const selectCinema = (cinema) =>
    setBooking((prev) => ({ ...prev, cinema }));

  const selectShowtime = (showtime) =>
    setBooking((prev) => ({ ...prev, showtime }));

  const toggleSeat = (seat) =>
    setBooking((prev) => {
      const exists = prev.seats.includes(seat);
      return {
        ...prev,
        seats: exists
          ? prev.seats.filter((item) => item !== seat)
          : [...prev.seats, seat],
      };
    });

  const clearBooking = () =>
    setBooking({ movie: null, cinema: null, showtime: null, seats: [] });

  return (
    <BookingContext.Provider
      value={{
        booking,
        selectMovie,
        selectCinema,
        selectShowtime,
        toggleSeat,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
