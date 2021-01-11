/* Returns length of LCS for X[0..m-1], Y[0..n-1] */
function lcs(X, Y, m, n) {
  let L = [];
  for (let i = 0; i < m + 1; i++) {
    L.push([]);
  }

  /* Following steps build L[m+1][n+1] in bottom up fashion. Note
      that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1] */
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        L[i][j] = 0;
      } else if (X[i - 1] === Y[j - 1]) {
        L[i][j] = L[i - 1][j - 1] + 1;
      } else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
    }
  }

  // Create a character array to store the lcs string
  let lcsStr = [];

  // Start from the right-most-bottom-most corner and
  // one by one store characters in lcs[]
  let index = L[m][n];
  let i = m,
    j = n;
  while (i > 0 && j > 0) {
    // If current character in X[] and Y are same, then
    // current character is part of LCS
    if (X[i - 1] === Y[j - 1]) {
      lcsStr[index - 1] = X[i - 1]; // Put current character in result
      i--;
      j--;
      index--; // reduce values of i, j and index
    }
    // If not same, then find the larger of two and
    // go in the direction of larger value
    else if (L[i - 1][j] > L[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // Print the lcs
  let LCS = '';
  lcsStr.forEach(c => (LCS += c));

  console.table(L);

  if (lcsStr.length < 1) {
    return false;
  } else {
    return LCS;
  }
}

/* Driver program to test above function */
const main = () => {
  const X = 'AGGTAB';
  const Y = 'GXTXAYB';
  const m = X.length;
  const n = Y.length;
  console.log(lcs(X, Y, m, n));
};

main();
