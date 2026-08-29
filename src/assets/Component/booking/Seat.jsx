function Seat({ seat, isSelected, onSelect }) {
  if (seat.isTaken) {
    return (
      <button
        type="button"
        disabled
        title={`${seat.id} (taken)`}
        className="h-9 w-9 cursor-not-allowed rounded-md bg-white/5 text-xs text-gray-600"
      >
        {seat.number}
      </button>
    );
  }

  const baseClass =
    "h-9 w-9 rounded-md text-xs font-semibold transition";

  const stateClass = isSelected
    ? "bg-cinema-600 text-white"
    : seat.type === "vip"
      ? "border border-cinema-500/40 bg-white/10 text-gray-300 hover:bg-cinema-500/20"
      : "bg-white/10 text-gray-300 hover:bg-white/20";

  return (
    <button
      type="button"
      title={`${seat.id} (${seat.type})`}
      onClick={() => onSelect(seat)}
      className={`${baseClass} ${stateClass}`}
    >
      {seat.number}
    </button>
  );
}

export default Seat;
