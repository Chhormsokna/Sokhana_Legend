import { useState } from "react";
import { Trash2, ShoppingBag, Clock, Search } from "lucide-react";
import { deleteOrder, getOrders } from "../data/orders";
import { formatPrice } from "../utils/formatesprice";

function OrdersTable() {
  const [list, setList] = useState(getOrders());
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this food order?")) {
      setList(deleteOrder(id));
    }
  };

  const filtered = list.filter((order) => {
    const term = search.toLowerCase();
    const itemsStr = (order.items || [])
      .map((i) => i.name)
      .join(" ")
      .toLowerCase();
    const idStr = (order.id || "").toString().toLowerCase();
    return itemsStr.includes(term) || idStr.includes(term);
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm">
      {/* Header & Search */}
      <div className="flex flex-col gap-4 border-b border-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            Food & Concessions Orders ({list.length})
          </h3>
          <p className="text-xs text-gray-400">
            Track snack and drink checkouts from the concessions store
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search ordered snacks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/60 py-2 pl-9 pr-4 text-xs text-white placeholder-gray-500 outline-none focus:border-cinema-500"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gray-500">
            <ShoppingBag size={24} />
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-400">
            {list.length === 0
              ? "No food orders yet"
              : "No orders match your search"}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {list.length === 0
              ? "When customers checkout snacks on the Food page, they will appear here."
              : "Try clearing your search query."}
          </p>
        </div>
      ) : (
        <div className="divide-y divide-white/5">
          {filtered.map((item) => {
            const dateStr = item.createdAt
              ? new Date(item.createdAt).toLocaleString()
              : new Date(Number(item.id) || Date.now()).toLocaleString();

            const itemsArray = Array.isArray(item.items) ? item.items : [];

            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 p-5 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Order Information & Items */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-cinema-500/30 bg-cinema-900/30 px-2 py-0.5 font-mono text-[11px] font-bold text-cinema-400">
                      ORDER #{String(item.id).slice(-6)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {dateStr}
                    </span>
                  </div>

                  {/* Items Badges */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {itemsArray.map((orderItem, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-medium text-gray-200"
                      >
                        <span>{orderItem.name}</span>
                        <span className="rounded bg-cinema-600/30 px-1.5 py-0.2 text-[10px] font-extrabold text-cinema-400">
                          ×{orderItem.quantity}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Total & Action */}
                <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wider text-gray-500">
                      Total
                    </p>
                    <p className="text-base font-black text-cinema-400">
                      {formatPrice(item.total || 0)}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400 transition hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-400"
                    title="Delete order"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OrdersTable;
