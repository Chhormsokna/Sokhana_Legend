import { useState } from "react";
import { Trash2, Search, Ticket, Calendar, MapPin } from "lucide-react";
import { deleteBooking, getBookings, updateBooking } from "../data/bookings";
import { formatDate } from "../routers/formatdata";
import { formatPrice } from "../utils/formatesprice";

function BookingsTable() {
  const [list, setList] = useState(getBookings());
  const [search, setSearch] = useState("");

  const handleStatus = (id, status) => {
    setList(updateBooking(id, { status }));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking record?")) {
      setList(deleteBooking(id));
    }
  };

  const filtered = list.filter((item) => {
    const term = search.toLowerCase();
    const movie = (item.movieTitle || item.movie?.title || "").toLowerCase();
    const cinema = (item.cinemaName || "").toLowerCase();
    const id = (item.id || "").toString().toLowerCase();
    return movie.includes(term) || cinema.includes(term) || id.includes(term);
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm">
      {/* Header & Search */}
      <div className="flex flex-col gap-4 border-b border-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            Customer Ticket Bookings ({list.length})
          </h3>
          <p className="text-xs text-gray-400">
            View, track, and manage all cinema ticket reservations
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search by movie, cinema, ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/60 py-2 pl-9 pr-4 text-xs text-white placeholder-gray-500 outline-none focus:border-cinema-500"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gray-500">
            <Ticket size={24} />
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-400">
            {list.length === 0
              ? "No bookings yet"
              : "No bookings match your search"}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {list.length === 0
              ? "When a customer books a movie ticket, it will appear here."
              : "Try clearing your search query."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-xs">
            <thead className="border-b border-white/5 bg-white/[0.02] text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-5 py-3.5">Booking Details</th>
                <th className="px-5 py-3.5">Cinema & Showtime</th>
                <th className="px-5 py-3.5">Seats</th>
                <th className="px-5 py-3.5">Total Paid</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {filtered.map((item) => {
                const title =
                  item.movieTitle || item.movie?.title || "Movie Ticket";
                const cinema = item.cinemaName || "Legend Cinema";
                const dateStr = item.date ? formatDate(item.date) : "—";
                const timeStr = item.time || item.showtime?.time || "";
                const hallStr = item.hall || "Hall 1";
                const seatList = Array.isArray(item.seats)
                  ? item.seats
                  : [item.seats];

                return (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    {/* Booking ID & Title */}
                    <td className="px-5 py-4">
                      <p className="font-bold text-white text-sm">{title}</p>
                      <p className="mt-0.5 text-[11px] font-mono text-gray-500">
                        {item.id}
                      </p>
                    </td>

                    {/* Cinema & Showtime */}
                    <td className="px-5 py-4 text-gray-300">
                      <div className="flex items-center gap-1.5 font-medium">
                        <MapPin size={12} className="text-cinema-400" />
                        <span>{cinema}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-[11px] text-gray-400">
                        <Calendar size={11} />
                        <span>
                          {dateStr} • {timeStr} ({hallStr})
                        </span>
                      </div>
                    </td>

                    {/* Seats */}
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-1">
                        {seatList.map((seat) => (
                          <span
                            key={seat}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] font-semibold text-gray-300"
                          >
                            {seat}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Total Paid */}
                    <td className="px-5 py-4 font-bold text-cinema-400 text-sm">
                      {formatPrice(item.total || 0)}
                    </td>

                    {/* Status Dropdown */}
                    <td className="px-5 py-4">
                      <select
                        value={item.status || "confirmed"}
                        onChange={(e) =>
                          handleStatus(item.id, e.target.value)
                        }
                        className={`rounded-lg border px-2.5 py-1 text-xs font-bold outline-none transition-colors ${
                          item.status === "used"
                            ? "border-purple-500/30 bg-purple-900/30 text-purple-400"
                            : item.status === "cancelled"
                            ? "border-red-500/30 bg-red-900/30 text-red-400"
                            : "border-emerald-500/30 bg-emerald-900/30 text-emerald-400"
                        }`}
                      >
                        <option value="confirmed" className="bg-zinc-900 text-emerald-400">
                          Confirmed
                        </option>
                        <option value="used" className="bg-zinc-900 text-purple-400">
                          Used / Checked-in
                        </option>
                        <option value="cancelled" className="bg-zinc-900 text-red-400">
                          Cancelled
                        </option>
                      </select>
                    </td>

                    {/* Delete */}
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400 transition hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-400"
                        title="Delete booking"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BookingsTable;
