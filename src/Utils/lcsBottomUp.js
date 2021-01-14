let operations = 0;
function lcs(X, Y, m, n) {
  let L = [];
  for (let i = 0; i < X.length + 1; i++) {
    L[i] = [];
    for (let j = 0; j < Y.length + 1; j++) {
      L[i][j] = -1;
    }
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      operations++;
      if (i === 0 || j === 0) {
        L[i][j] = 0;
      } else if (X[i - 1] === Y[j - 1]) {
        L[i][j] = L[i - 1][j - 1] + 1;
      } else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
    }
  }

  let lcsStr = [];

  let index = L[m][n];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      lcsStr[index - 1] = X[i - 1];
      i--;
      j--;
      index--;
    } else if (L[i - 1][j] > L[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  console.table(L);
  return lcsStr;
}

/* Driver program to test above function */
const main = () => {
  // const X = 'FVDVSDCASA';
  // const Y = 'SCSVDR';
  const X = 'DSCDSDSC';
  const Y = 'SDVFSSD';
  // const X = 'AGGTAB';
  // const Y = 'GXTXAYB';
  const m = X.length;
  const n = Y.length;
  console.log(lcs(X, Y, m, n));
  console.log(operations);
};

main();
