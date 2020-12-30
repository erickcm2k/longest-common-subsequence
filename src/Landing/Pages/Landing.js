import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
const Landing = () => {
  return (
    <div>
      <Link to={`/lcs`}>
        <Button bg="brand.morningGlory" color="brand.stratos">
          Comenzar
        </Button>
      </Link>
    </div>
  );
};

export default Landing;

// import React, { useEffect } from 'react';
// import Prism from 'prismjs';
// import './prism.css';
// const Landing = () => {
//   useEffect(() => {
//     Prism.highlightAll();
//   }, []);

//   return (
//     <div style={{ width: '30%', margin: '0 auto', borderRadius: '1rem', overflowY: 'scroll' }}>
//       <pre>
//         <code className="language-javascript">
//           {`
// /* Dynamic Programming implementation of LCS problem */
// #include<iostream>
// #include<cstring>
// #include<cstdlib>
// using namespace std;

// /* Returns length of LCS for X[0..m-1], Y[0..n-1] */
// void lcs( char *X, char *Y, int m, int n )
// {
//    int L[m+1][n+1];

//    /* Following steps build L[m+1][n+1] in bottom up fashion. Note
//       that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1] */
//    for (int i=0; i<=m; i++)
//    {
//      for (int j=0; j<=n; j++)
//      {
//        if (i == 0 || j == 0)
//          L[i][j] = 0;
//        else if (X[i-1] == Y[j-1])
//          L[i][j] = L[i-1][j-1] + 1;
//        else
//          L[i][j] = max(L[i-1][j], L[i][j-1]);
//      }
//    }

//    // Following code is used to print LCS
//    int index = L[m][n];

//    // Create a character array to store the lcs string
//    char lcs[index+1];
//    lcs[index] = '\0'; // Set the terminating character

//    // Start from the right-most-bottom-most corner and
//    // one by one store characters in lcs[]
//    int i = m, j = n;
//    while (i > 0 && j > 0)
//    {
//       // If current character in X[] and Y are same, then
//       // current character is part of LCS
//       if (X[i-1] == Y[j-1])
//       {
//           lcs[index-1] = X[i-1]; // Put current character in result
//           i--; j--; index--;     // reduce values of i, j and index
//       }

//       // If not same, then find the larger of two and
//       // go in the direction of larger value
//       else if (L[i-1][j] > L[i][j-1])
//          i--;
//       else
//          j--;
//    }

//    // Print the lcs
//    cout << "LCS of " << X << " and " << Y << " is " << lcs;
// }

// /* Driver program to test above function */
// int main()
// {
//   char X[] = "AGGTAB";
//   char Y[] = "GXTXAYB";
//   int m = strlen(X);
//   int n = strlen(Y);
//   lcs(X, Y, m, n);
//   return 0;
// }
//     `}
//         </code>
//       </pre>
//       <pre>
//         <code className="language-javascript">
//           {`
// /* A Naive recursive implementation of LCS problem */
// #include <bits/stdc++.h>
// using namespace std;

// int max(int a, int b);

// /* Returns length of LCS for X[0..m-1], Y[0..n-1] */
// int lcs( char *X, char *Y, int m, int n )
// {
//     if (m == 0 || n == 0)
//         return 0;
//     if (X[m-1] == Y[n-1])
//         return 1 + lcs(X, Y, m-1, n-1);
//     else
//         return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
// }

// /* Utility function to get max of 2 integers */
// int max(int a, int b)
// {
//     return (a > b)? a : b;
// }

// /* Driver code */
// int main()
// {
//     char X[] = "AGGTAB";
//     char Y[] = "GXTXAYB";

//     int m = strlen(X);
//     int n = strlen(Y);

//     cout<<"Length of LCS is "<< lcs( X, Y, m, n ) ;

//     return 0;
// }
//     `}
//         </code>
//       </pre>
//     </div>
//   );
// };

// export default Landing;
