const KEY = "legend_orders";

export function getOrders() {
  try {
    const list = JSON.parse(
      localStorage.getItem(KEY)
    );

    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function addOrder(order) {
  const list = getOrders();
  list.unshift(order);

  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // storage full - order kept in memory only
  }

  return list;
}

export function updateOrder(id, updates) {
  const list = getOrders().map((item) =>
    item.id === id ? { ...item, ...updates } : item
  );

  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}

export function deleteOrder(id) {
  const list = getOrders().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}
