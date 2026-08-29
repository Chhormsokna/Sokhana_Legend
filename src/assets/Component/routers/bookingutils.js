export const SEAT_ROWS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

export const SEATS_PER_ROW = 12;

export function seatId(row, number) {
  return `${row}${number}`;
}

export function buildSeatMap(takenSeatIds = []) {
  const vipStartIndex = SEAT_ROWS.length - 2;

  return SEAT_ROWS.flatMap((row, rowIndex) =>
    Array.from({ length: SEATS_PER_ROW }, (_, index) => {
      const id = seatId(row, index + 1);

      return {
        id,
        row,
        number: index + 1,
        type:
          rowIndex >= vipStartIndex ? "vip" : "standard",
        isTaken: takenSeatIds.includes(id),
      };
    })
  );
}

export function getSeatPrice(showtime, seat) {
  return seat.type === "vip"
    ? showtime.price * 1.5
    : showtime.price;
}

export function calculateSeatsTotal(showtime, seats) {
  return seats.reduce(
    (total, seat) => total + getSeatPrice(showtime, seat),
    0
  );
}

export function groupSeatsByRow(seats) {
  return SEAT_ROWS.map((row) => ({
    row,
    seats: seats.filter((seat) => seat.row === row),
  }));
}
