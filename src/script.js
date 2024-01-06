const columns = ["Nama", "Umur", "Penampilan"];

const data = [
  ["Hadiyan", "25", "Ganteng"],
  ["Fahmi", "25", "Ganteng Juga"],
];

const grid = new gridjs.Grid({
  columns: columns.map((col) => ({ name: col })),
  data: data,
});

// Render tabel ke elemen dengan ID 'grid'
grid.render(document.getElementById("grid"));