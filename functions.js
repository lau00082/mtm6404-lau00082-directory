/* functions.js */
/* global clients */

const list = (clientList) =>
  clientList
    .map(
      (client) =>
        `<li class="list-group-item d-flex justify-content-between" data-index="${
          client.index
        }">
  ${client.name}
  <strong>$ ${Number(client.balance).toFixed(2)}</strong>
</li>`
    )
    .join("");

const order = (clientList, property) =>
  [...clientList].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return valueA - valueB;
    }

    return String(valueA)
      .toLowerCase()
      .localeCompare(String(valueB).toLowerCase());
  });

const total = (clientList) =>
  clientList.reduce((sum, client) => sum + Number(client.balance), 0);

const info = (index) => clients.find((client) => client.index === index);

const search = (query) => {
  const normalized = String(query || "").toLowerCase();
  return clients.filter((client) =>
    client.name.toLowerCase().includes(normalized)
  );
};

if (typeof module !== "undefined") {
  module.exports = { list, order, total, info, search };
}
