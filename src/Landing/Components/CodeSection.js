import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Flex, Text, Box } from '@chakra-ui/react';
import './prism.css';
const CodeSection = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className='code-section'>
      <Flex
        maxW={'90rem'}
        flexDir={['column', 'column','column', 'row']}
        justifyContent='space-evenly'
        pt="5"
      >
        <Box w={["100%", "100%","90%","45%"]} alignSelf={['inherit', 'inherit', 'center', 'inherit']} pb="3">
          <Text textAlign='center' fontSize={['lg','lg', 'xl', '2xl']} color='brand.regalBlue' fontWeight='bold'>Bottom Up - iterativa</Text>
          <Text textAlign='center' fontSize={['lg','lg', 'xl', '2xl']} color='brand.regalBlue'>Complejidad ~ O(mn)</Text>
          <pre>
            <code className="language-javascript">
              {`
/* Dynamic Programming implementation of LCS problem */
#include<iostream>
#include<cstring>
#include<cstdlib>
using namespace std;

/* Returns length of LCS for X[0..m-1], Y[0..n-1] */
void lcs( char *X, char *Y, int m, int n )
{
    int L[m+1][n+1];
    
    /* Following steps build L[m+1][n+1] in bottom up fashion. Note
    that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1] */
    for (int i=0; i<=m; i++)
    {
        for (int j=0; j<=n; j++)
        {
            if (i == 0 || j == 0)
            L[i][j] = 0;
            else if (X[i-1] == Y[j-1])
            L[i][j] = L[i-1][j-1] + 1;
            else
            L[i][j] = max(L[i-1][j], L[i][j-1]);
        }
    }
    
    // Following code is used to print LCS
    int index = L[m][n];
    
    // Create a character array to store the lcs string
    char lcs[index+1];
    lcs[index] = '\0'; // Set the terminating character
    
    // Start from the right-most-bottom-most corner and
    // one by one store characters in lcs[]
    int i = m, j = n;
    while (i > 0 && j > 0)
    {
        // If current character in X[] and Y are same, then
        // current character is part of LCS
        if (X[i-1] == Y[j-1])
        {
            lcs[index-1] = X[i-1]; // Put current character in result
            i--; j--; index--;     // reduce values of i, j and index
        }
        
        // If not same, then find the larger of two and
        // go in the direction of larger value
        else if (L[i-1][j] > L[i][j-1])
        i--;
        else
        j--;
    }
    
    // Print the lcs
    cout << "LCS of " << X << " and " << Y << " is " << lcs;
}

/* Driver program to test above function */
int main()
{
    char X[] = "AGGTAB";
    char Y[] = "GXTXAYB";
    int m = strlen(X);
    int n = strlen(Y);
    lcs(X, Y, m, n);
    return 0;
}
`}
            </code>
          </pre>          
        </Box>

        <Box w={["100%", "100%","90%","45%"]} alignSelf={['inherit', 'inherit', 'center', 'inherit']} pb="3">
          <Text textAlign='center' fontSize={['lg','lg', 'xl', '2xl']} color='brand.regalBlue' fontWeight='bold'>Top Down - recursión con memoización</Text>
          <Text textAlign='center' fontSize={['lg','lg', 'xl', '2xl']} color='brand.regalBlue'>Complejidad ~ O(mn)</Text>
          <pre>
            <code className="language-javascript">
              {`
#include <iostream>
#include <string>
using namespace std;
 
// define maximum possible length of string X and Y
#define MAX 20
 
// lookup[i][j] stores the length of LCS of substring X[0..i-1], Y[0..j-1]
int lookup[MAX][MAX];
 
// Recursive Function to find Longest Common Subsequence of
// string X[0..m-1] and Y[0..n-1]
string LCS(string X, string Y, int m, int n)
{
    // return empty string if we have reached the end of
    // either sequence
    if (m == 0 || n == 0)
        return string("");
 
    // if last character of X and Y matches
    if (X[m - 1] == Y[n - 1])
    {
        // append current character (X[m-1] or Y[n-1]) to LCS of
        // substring X[0..m-2] and Y[0..n-2]
        return LCS(X, Y, m - 1, n - 1) + X[m - 1];
    }
 
    // else when the last character of X and Y are different
 
    // if top cell of current cell has more value than the left
    // cell, then drop current character of string X and find LCS
    // of substring X[0..m-2], Y[0..n-1]
 
    if (lookup[m - 1][n] > lookup[m][n - 1])
        return LCS(X, Y, m - 1, n);
 
    else
 
    // if left cell of current cell has more value than the top
    // cell, then drop current character of string Y and find LCS
    // of substring X[0..m-1], Y[0..n-2]
 
        return LCS(X, Y, m, n - 1);
}
 
// Function to fill lookup table by finding the length of LCS
// of substring X[0..m-1] and Y[0..n-1]
void LCSLength(string X, string Y, int m, int n)
{
    // first row and first column of the lookup table
    // are already 0 as lookup[][] is globally declared
 
    // fill the lookup table in bottom-up manner
    for (int i = 1; i <= m; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            // if current character of X and Y matches
            if (X[i - 1] == Y[j - 1])
                lookup[i][j] = lookup[i - 1][j - 1] + 1;
 
            // else if current character of X and Y don't match
            else
                lookup[i][j] = max(lookup[i - 1][j], lookup[i][j - 1]);
        }
    }
}
 
int main()
{
    string X = "XMJYAUZ", Y = "MZJAWXU";
    int m = X.length(), n = Y.length();
 
    // fill lookup table
    LCSLength(X, Y, m, n);
 
    // find longest common sequence
    cout << LCS(X, Y, m, n);
 
    return 0;
}
`}
            </code>
          </pre>
        </Box>
      </Flex>
    </section>
  );
};

export default CodeSection;
