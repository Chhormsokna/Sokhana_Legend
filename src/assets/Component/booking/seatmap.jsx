import Seat from "./Seat";
import { groupSeatsByRow } from "../routers/bookingutils";

function SeatMap({
  seats,
  selectedSeatIds = [],
  onToggleSeat,
}) {
  const rows = groupSeatsByRow(seats);

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
      {/* Screen */}
      <div className="mx-auto mb-8 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-transparent via-cinema-500 to-transparent" />

      <div className="space-y-2 overflow-x-auto pb-2">
        {rows.map(({ row, seats: rowSeats }) => (
          <div
            key={row}
            className="flex items-center justify-center gap-1.5"
          >
            <span className="w-6 text-xs font-semibold text-gray-500">
              {row}
            </span>

            {rowSeats.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                isSelected={selectedSeatIds.includes(
                  seat.id
                )}
                onSelect={onToggleSeat}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded bg-white/10" />
          Available
        </span>

        <span className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded bg-cinema-600" />
          Selected
        </span>

        <span className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded border border-cinema-500/40 bg-white/10" />
          VIP
        </span>

        <span className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded bg-white/5" />
          Taken
        </span>
      </div>
    </div>
  );
}

export default SeatMap;
