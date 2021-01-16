let operations = 0;
const fillTable = (X, Y, memoTable) => {
  for (let i = 0; i < X.length + 1; i++) {
    memoTable[i] = [];
    for (let j = 0; j < Y.length + 1; j++) {
      memoTable[i][j] = -1;
    }
  }
};

const lcs = (S1, m, S2, n, memoTable) => {
  operations++;
  let finalResult;
  if (memoTable[m][n] > -1) {
    return memoTable[m][n];
  } else if (m === 0 || n === 0) {
    finalResult = 0;
    memoTable[m][n] = finalResult;
  } else if (S1[m - 1] === S2[n - 1]) {
    finalResult = 1 + lcs(S1, m - 1, S2, n - 1, memoTable);
    memoTable[m][n] = finalResult;
  } else {
    finalResult = Math.max(
      lcs(S1, m - 1, S2, n, memoTable),
      lcs(S1, m, S2, n - 1, memoTable)
    );
    memoTable[m][n] = finalResult;
  }

  return finalResult;
};

function getLCS(X, Y, m, n, memoTable) {
  let lcsString = '';
  let i = m;
  let j = n;

  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      lcsString = X[i - 1] + lcsString;
      i--;
      j--;
    } else {
      if (memoTable[i - 1][j] > memoTable[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  return lcsString;
}

const lcsAux = (X, Y, m, n, memoTable) => {
  fillTable(X, Y, memoTable);
  console.table(memoTable);
  lcs(X, m, Y, n, memoTable);
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
  let memoTable = [];

  lcsAux(X, Y, m, n, memoTable);
  console.table(memoTable);
  console.log(getLCS(X, Y, m, n, memoTable));
  console.log('Operations:', operations);
};

main();
