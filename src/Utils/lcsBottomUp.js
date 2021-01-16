const fillTable = (X, Y, dpTable) => {
  for (let i = 0; i < X.length + 1; i++) {
    dpTable[i] = [];
    for (let j = 0; j < Y.length + 1; j++) {
      dpTable[i][j] = -1;
    }
  }
};

const lcs = (X, Y, m, n, dpTable) => {
  let operations = 0;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      operations++;
      if (i === 0 || j === 0) {
        dpTable[i][j] = 0;
      } else if (X[i - 1] === Y[j - 1]) {
        dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
      } else dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1]);
    }
  }
  console.log(operations);
};

const getLCS = (X, Y, m, n, dpTable) => {
  let lcsString = '';
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      lcsString = X[i - 1] + lcsString;
      i--;
      j--;
    } else if (dpTable[i - 1][j] > dpTable[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return lcsString;
};

const lcsAux = (X, Y, m, n, dpTable) => {
  fillTable(X, Y, dpTable);
  lcs(X, Y, m, n, dpTable);
};

const main = () => {
  const X = 'FVDVSDCASA';
  const Y = 'SCSVDR';
  // const X = 'DSCDSDSC';
  // const Y = 'SDVFSSD';
  // const X = 'AGGTAB';
  // const Y = 'GXTXAYB';
  const m = X.length;
  const n = Y.length;
  let dpTable = [];
  lcsAux(X, Y, m, n, dpTable);
  console.table(dpTable);
  console.log(getLCS(X, Y, m, n, dpTable));
};

main();
