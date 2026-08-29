const KEY = "legend_bookings";

export function getBookings() {
  try {
    const list = JSON.parse(
      localStorage.getItem(KEY)
    );

    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking) {
  const list = getBookings();
  list.unshift(booking);

  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // storage full - booking kept in memory only
  }

  return list;
}

export function updateBooking(id, updates) {
  const list = getBookings().map((item) =>
    item.id === id ? { ...item, ...updates } : item
  );

  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}

export function deleteBooking(id) {
  const list = getBookings().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}
