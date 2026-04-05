let columns = new Map(); // numbers
let rows = new Map(); // letters

for (i = 0; i < 8; i++) {
  columns.set(String.fromCharCode(i + 49), false);
}

for (i = 0; i < 8; i++) {
  rows.set(String.fromCharCode(i + 65), columns);
}

console.log(rows);

