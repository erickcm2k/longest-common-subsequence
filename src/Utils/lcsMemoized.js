
const X = 'FVDVSDCASA';
const Y = 'SCSVDR';
// const X = 'AGGTAB';
// const Y = 'GXTXAYB';
let L = [];
for (let i = 0; i < X.length + 1; i++) {
  L.push([]);
}

// Fill table with zeros.
for (let i = 0; i < Y.length ; i++) {
  for (let j = 0; j < X.length ; j++) {
    L[j][i] = 'x';
  }
}

function LCS(S1, m, S2, n) {
  let finalResult;
  if (m === 0 || n === 0) {
    finalResult = 0;
    L[m][n] = 0;
  } else if (S1[m - 1] === S2[n - 1]) {
    finalResult = 1 + LCS(S1, m - 1, S2, n - 1);
    L[m - 1][n - 1] = finalResult;
  } else if (LCS(S1, m - 1, S2, n) >= LCS(S1, m, S2, n - 1)) {
    finalResult = LCS(S1, m - 1, S2, n);
    L[m - 1][n] = finalResult;
  } else {
    finalResult = LCS(S1, m, S2, n - 1);
    L[m][n - 1] = finalResult;
  }

  return finalResult;
}

let px = X.length;
let py = Y.length;

function printLCS() {
  let res = [];

  while (px !== 0 && py !== 0) {
    if (X[px - 1] === Y[py - 1]) {
      res.unshift(X[px - 1]);
      px--;
      py--;
    } else {
      if (L[px - 1][py] > L[px][py - 1]) {
        px--;
      } else {
        py--;
      }
    }
  }
  console.log(res);
}

// const lcs = LCSLength(X, X.length, Y, Y.length);
const lcs = LCS(X, X.length, Y, Y.length);
console.table(L);
console.log(lcs);
printLCS();

// // console.log(L[0].length);
// console.log(L.length, L[0].length);
// // console.log(`px: ${px}, py: ${py}`);
// console.log(lcs);

// function LCSLength(S1, m, S2, n) {
//   let finalResult;
//   if (m === 0 || n === 0) {
//     finalResult = 0;
//   } else if (S1[m - 1] === S2[n - 1]) {
//     finalResult = 1 + LCS(S1, m - 1, S2, n - 1);
//   } else if (LCS(S1, m - 1, S2, n) >= LCS(S1, m, S2, n - 1)) {
//     finalResult = LCS(S1, m - 1, S2, n);
//   } else {
//     finalResult = LCS(S1, m, S2, n - 1);
//   }

//   return finalResult;
// }

// function LCS(S1, m, S2, n) {
//   let finalResult;
//   //define base case. if the length of either strings are zero,
//   //then no need to continue return 0
//   if (m === 0 || n === 0) {
//     L[m][n] = 0;
//     finalResult = 0;
//   } else if (S1[m - 1] === S2[n - 1]) {
//     //if the last characters are the same
//     finalResult = 1 + LCS(S1, m - 1, S2, n - 1);
//     // if (m !== S1.length && n !== S2.length) {
//     L[m - 1][n - 1] = finalResult;
//     // }
//   } else {
//     let excludeLastOfS1 = LCS(S1, m - 1, S2, n);
//     let excludeLastOfS2 = LCS(S1, m, S2, n - 1);
//     finalResult = Math.max(excludeLastOfS1, excludeLastOfS2);
//     if (excludeLastOfS1 >= excludeLastOfS2) {
//       // if (m !== S1.length && n !== S2.length) {
//       L[m - 1][n] = finalResult;
//       // }
//     } else {
//       // if (m !== S1.length && n !== S2.length) {
//       L[m][n - 1] = finalResult;
//       // }
//     }
//   }
//   //return the final result
//   return finalResult;
// }
