import { Routes, Route } from "react-router-dom";

import Home from "../page/home";
import Movies from "../page/movies";
import MovieDetails from "../page/moviedetail";

import Cinemas from "../page/cinemas";
import CinemaDetails from "../page/cinemasdetail";

import Showtimes from "../page/showtimes";
import Booking from "../page/booking";
import Ticket from "../page/tickets";

import Promotions from "../page/promotions";
import Food from "../page/foods";

import Login from "../page/login";
import Register from "../page/Register";
import Profile from "../page/profiles";
import MyBookings from "../page/mybookings";

import About from "../page/abouts";
import NotFound from "../page/notfound";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Movies */}
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />

      {/* Cinemas */}
      <Route path="/cinemas" element={<Cinemas />} />
      <Route path="/cinemas/:id" element={<CinemaDetails />} />

      {/* Showtimes */}
      <Route path="/showtimes" element={<Showtimes />} />

      {/* Booking */}
      <Route path="/booking" element={<Booking />} />
      <Route path="/ticket" element={<Ticket />} />

      {/* Promotions */}
      <Route path="/promotions" element={<Promotions />} />

      {/* Food */}
      <Route path="/food" element={<Food />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-bookings" element={<MyBookings />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
