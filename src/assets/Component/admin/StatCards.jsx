import {
  DollarSign,
  Film,
  ShoppingCart,
  Ticket,
  TrendingUp,
  Award,
} from "lucide-react";
import { formatPrice } from "../utils/formatesprice";

function StatCards({ bookings, orders, movies }) {
  const ticketRevenue = bookings.reduce(
    (sum, item) => sum + (Number(item.total) || 0),
    0
  );

  const foodRevenue = orders.reduce(
    (sum, item) => sum + (Number(item.total) || 0),
    0
  );

  const totalRevenue = ticketRevenue + foodRevenue;

  const seatsSold = bookings.reduce(
    (sum, item) => sum + (item.seats?.length || 0),
    0
  );

  const cards = [
    {
      Icon: DollarSign,
      label: "Total Revenue",
      value: formatPrice(totalRevenue),
      subtext: `Tickets: ${formatPrice(ticketRevenue)} • Food: ${formatPrice(foodRevenue)}`,
      badge: "Live Sales",
      accent: "from-blue-600/20 via-blue-500/5 to-transparent",
      iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      Icon: Ticket,
      label: "Ticket Bookings",
      value: bookings.length,
      subtext: `${seatsSold} total cinema seats sold`,
      badge: "Tickets",
      accent: "from-emerald-600/20 via-emerald-500/5 to-transparent",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      Icon: ShoppingCart,
      label: "Food Orders",
      value: orders.length,
      subtext: "Snack & beverage purchases",
      badge: "Concessions",
      accent: "from-purple-600/20 via-purple-500/5 to-transparent",
      iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      Icon: Film,
      label: "Active Movies",
      value: movies.length,
      subtext: `${movies.filter((m) => m.status === "now-showing").length} Now Showing in theaters`,
      badge: "Catalog",
      accent: "from-amber-600/20 via-amber-500/5 to-transparent",
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
  ];

  // Calculate top booked movies
  const counts = {};
  bookings.forEach((item) => {
    const title = item.movieTitle || item.movie?.title || "Movie";
    counts[title] = (counts[title] || 0) + 1;
  });

  const top = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maxCount = top[0]?.[1] || 1;

  return (
    <div className="space-y-8">
      {/* 4 Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(
          ({ Icon, label, value, subtext, badge, accent, iconBg }) => (
            <div
              key={label}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accent} bg-zinc-900/90 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {label}
                </span>

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border ${iconBg}`}
                >
                  <Icon size={17} />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-3xl font-black tracking-tight text-white">
                  {value}
                </p>
                <p className="mt-2 truncate text-xs text-gray-400">{subtext}</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-[11px] font-semibold text-gray-500">
                  {badge}
                </span>
                <TrendingUp size={13} className="text-gray-500" />
              </div>
            </div>
          )
        )}
      </div>

      {/* Top Movies Chart Section */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cinema-600/20 text-cinema-400">
              <Award size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Top Booked Movies
              </h3>
              <p className="text-xs text-gray-400">
                Ranked in real time by customer ticket reservations
              </p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-400">
            {bookings.length} Total Bookings
          </span>
        </div>

        {top.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gray-500">
              <Ticket size={24} />
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-400">
              No bookings recorded yet
            </p>
            <p className="mt-1 text-xs text-gray-500">
              When users book movie tickets, the performance rankings appear here.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {top.map(([title, count], index) => {
              const percentage = Math.round((count / bookings.length) * 100);
              const barWidth = Math.max(10, Math.round((count / maxCount) * 100));

              return (
                <div
                  key={title}
                  className="rounded-xl border border-white/5 bg-black/40 p-3.5 transition-colors hover:border-white/10"
                >
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
                          index === 0
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : index === 1
                            ? "bg-zinc-300/20 text-gray-300 border border-zinc-400/30"
                            : index === 2
                            ? "bg-amber-600/20 text-amber-500 border border-amber-600/30"
                            : "bg-white/5 text-gray-400"
                        }`}
                      >
                        #{index + 1}
                      </span>
                      <span className="truncate font-semibold text-gray-200">
                        {title}
                      </span>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-xs font-bold text-cinema-400">
                        {count} {count === 1 ? "booking" : "bookings"}
                      </span>
                      <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-gray-400">
                        {percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cinema-600 to-cinema-400 transition-all duration-500"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCards;
