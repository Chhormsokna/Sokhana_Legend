import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Film,
  LayoutDashboard,
  ShoppingCart,
  Ticket,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

import { useAuth } from "../context/Authcontext";
import { getMovies } from "../data/movieStore";
import { getBookings } from "../data/bookings";
import { getOrders } from "../data/orders";

import StatCards from "../admin/StatCards";
import MoviesManager from "../admin/MoviesManager";
import BookingsTable from "../admin/BookingsTable";
import OrdersTable from "../admin/OrdersTable";

function Admin() {
  const { user } = useAuth();
  const [tab, setTab] = useState("overview");

  if (!user) {
    return (
      <div className="container-cinema py-32 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 text-cinema-500">
          <ShieldCheck size={32} />
        </div>
        <h1 className="mt-6 text-3xl font-black">Admin Access Required</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-gray-400">
          Please sign in with your account to access the administration controls.
        </p>
        <Link to="/login" className="cinema-button mt-6">
          Sign In
        </Link>
      </div>
    );
  }

  const movies = getMovies();
  const bookings = getBookings();
  const orders = getOrders();

  const TABS = [
    {
      id: "overview",
      label: "Overview",
      Icon: LayoutDashboard,
      count: null,
    },
    {
      id: "movies",
      label: "Movies",
      Icon: Film,
      count: movies.length,
    },
    {
      id: "bookings",
      label: "Bookings",
      Icon: Ticket,
      count: bookings.length,
    },
    {
      id: "orders",
      label: "Orders",
      Icon: ShoppingCart,
      count: orders.length,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-10 sm:py-14">
      <div className="container-cinema">
        {/* Top Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/5 pb-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cinema-500/30 bg-cinema-900/30 px-3 py-1 text-xs font-semibold text-cinema-400">
                <ShieldCheck size={13} />
                Admin Portal
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-400">{user.email}</span>
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Dashboard Overview
            </h1>
          </div>

          <Link
            to="/profile"
            className="flex items-center gap-2 self-start rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2.5 text-xs font-semibold text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white sm:self-auto"
          >
            <ArrowLeft size={15} />
            Back to Profile
          </Link>
        </div>

        {/* Tab Navigation Bar */}
        <div className="mb-8 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 p-1.5 backdrop-blur-md">
          {TABS.map(({ id, label, Icon, count }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm ${
                  active
                    ? "bg-cinema-600 text-white shadow-lg shadow-cinema-600/30"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
                {count !== null && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-extrabold ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="transition-opacity duration-300">
          {tab === "overview" && (
            <StatCards bookings={bookings} orders={orders} movies={movies} />
          )}

          {tab === "movies" && <MoviesManager />}

          {tab === "bookings" && <BookingsTable />}

          {tab === "orders" && <OrdersTable />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
