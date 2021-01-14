// const X = 'FVDVSDCASA';
// const Y = 'SCSVDR';
const X = 'DSCDSDSC';
const Y = 'SDVFSSD';
// const X = 'AGGTAB';
// const Y = 'GXTXAYB';
let L = [];
for (let i = 0; i < X.length + 1; i++) {
  L[i] = [];
  for (let j = 0; j < Y.length + 1; j++) {
    L[i][j] = -1;
  }
}

let operations = 0;

function LCS(S1, m, S2, n) {
  operations++;
  let finalResult;
  if (L[m][n] > -1) {
    return L[m][n];
  } else if (m === 0 || n === 0) {
    finalResult = 0;
    L[m][n] = finalResult;
  } else if (S1[m - 1] === S2[n - 1]) {
    finalResult = 1 + LCS(S1, m - 1, S2, n - 1);
    L[m][n] = finalResult;
  } else {
    finalResult = Math.max(LCS(S1, m - 1, S2, n), LCS(S1, m, S2, n - 1));
    L[m][n] = finalResult;
  }

  return finalResult;
}

let i = X.length;
let j = Y.length;

function printLCSString() {
  let res = [];

  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      res.unshift(X[i - 1]);
      i--;
      j--;
    } else {
      if (L[i - 1][j] > L[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  console.log(res);
}

// const lcs = LCSLength(X, X.length, Y, Y.length);
// const lcs = findLCS(X, Y, X.length, Y.length);
const lcs = LCS(X, X.length, Y, Y.length);
console.table(L);
console.log(lcs);
printLCSString();
console.log(operations);

// Working!!!!!
// function LCS(S1, m, S2, n) {
//   let finalResult;
//   if (m === 0 || n === 0) {
//     finalResult = 0;
//     L[m][n] = 0;
//   } else if (S1[m - 1] === S2[n - 1]) {
//     finalResult = 1 + LCS(S1, m - 1, S2, n - 1);
//     L[m][n] = finalResult;
//   } else if (LCS(S1, m - 1, S2, n) >= LCS(S1, m, S2, n - 1)) {
//     finalResult = LCS(S1, m - 1, S2, n);
//     L[m][n] = finalResult;
//   } else {
//     finalResult = LCS(S1, m, S2, n - 1);
//     L[m][n] = finalResult;
//   }

//   return finalResult;
// }
