var matrix = [],
  H = 4, // 4 rows
  W = 6; // of 6 cells

for (var i = 0; i < H; i++) {
  matrix[i] = [];
  for (var j = 0; j < W; j++) {
    matrix[i][j] = 0;
  }
}

console.table(matrix)