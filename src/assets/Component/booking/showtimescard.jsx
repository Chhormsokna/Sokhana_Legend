import { Clock, Users } from "lucide-react";
import { formatPrice } from "../utils/formatesprice";

function ShowtimesCard({
  showtime,
  isSelected = false,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(showtime)}
      className={`w-full rounded-xl border p-5 text-left transition ${
        isSelected
          ? "border-cinema-500 bg-cinema-600/10"
          : "border-white/10 bg-zinc-900 hover:border-white/20"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-bold">
          <Clock size={16} className="text-cinema-500" />
          {showtime.time}
        </span>

        <span className="rounded-md bg-cinema-600 px-2.5 py-1 text-xs font-bold">
          {showtime.format}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
        <span>{showtime.hall}</span>

        <span className="flex items-center gap-1.5">
          <Users size={15} />
          {showtime.availableSeats} seats left
        </span>
      </div>

      <div className="mt-3 border-t border-white/10 pt-3 text-sm font-semibold">
        {formatPrice(showtime.price)}
      </div>
    </button>
  );
}

export default ShowtimesCard;
