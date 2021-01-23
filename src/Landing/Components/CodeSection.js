import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Flex, Text, Box } from '@chakra-ui/react';
import '../../Shared/prism.css';
const CodeSection = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="code-section">
      <Flex
        maxW={'90rem'}
        flexDir={['column', 'column', 'column', 'row']}
        justifyContent="space-evenly"
        pt="5"
      >
        <Box
          w={['100%', '100%', '90%', '45%']}
          alignSelf={['inherit', 'inherit', 'center', 'inherit']}
          pb="3"
        >
          <Text
            textAlign="center"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="brand.regalBlue"
            fontWeight="bold"
          >
            Bottom Up - Iterativa
          </Text>
          <Text
            textAlign="center"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="brand.regalBlue"
          >
            Complejidad ~ O(mn)
          </Text>
          <pre>
            <code className="language-javascript">
              {`#include <iostream>
using namespace std;

void lcs(string &X, string &Y, int m, int n)
{
    int L[m + 1][n + 1];
    // Llenado de tabla en forma bottom-up
    for (int i = 0; i <= m; i++)
    {
        for (int j = 0; j <= n; j++)
        {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = max(L[i - 1][j], L[i][j - 1]);
        }
    }
    // Código para obtener el LCS
    int index = L[m][n];

    // Inicializar cadena y agregar símbolo de fin de cadena.
    // Se hace de esta forma para evitar tener que invertir 
    // la cadena al final.
    char lcs[index + 1];
    lcs[index] = '\\0';

    // Empezar desde la esquina inferior derecha
    int i = m, j = n;
    while (i > 0 && j > 0)
    {
        // Si los caracteres son iguales, 
        // agregar al principio.
        if (X[i - 1] == Y[j - 1])
        {
            lcs[index - 1] = X[i - 1];
            i--;
            j--;
            index--;
        }
        // Caso contrario, encontrar el mayor
        // y moverse en esa dirección
        else if (L[i - 1][j] > L[i][j - 1])
            i--;
        else
            j--;
    }
    cout << lcs << endl;
}

int main()
{
    string X = "AGGTAB";
    string Y = "GXTXAYB";
    int m = X.length();
    int n = Y.length();
    lcs(X, Y, m, n);
    return 0;
}
// Imprime GTAB
`}
            </code>
          </pre>
        </Box>

        <Box
          w={['100%', '100%', '90%', '45%']}
          alignSelf={['inherit', 'inherit', 'center', 'inherit']}
          pb="3"
        >
          <Text
            textAlign="center"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="brand.regalBlue"
            fontWeight="bold"
          >
            Top Down - Memoización
          </Text>
          <Text
            textAlign="center"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="brand.regalBlue"
          >
            Complejidad ~ O(mn)
          </Text>
          <pre>
            <code className="language-javascript">
              {`
#include <iostream>
using namespace std;

const int max = 1000;

// Llenado de tabla en forma top-down
int lcs(string X, string Y, int m, int n, int memo[][max])
{
    // Caso base recursión
    if (m == 0 || n == 0)
        return 0;

    // Revisar si el paso actual ha sido calculado
    // previamente
    if (memo[m - 1][n - 1] != -1)
    {
        return memo[m - 1][n - 1];
    }
    // Si son iguales, almacenamos el valor de
    // la llamada a función
    else if (X[m - 1] == Y[n - 1])
    {
        memo[m - 1][n - 1] = 1 + lcs(X, Y, m - 1, n - 1, memo);
        return memo[m - 1][n - 1];
    }
    else
    {
        memo[m - 1][n - 1] = max(lcs(X, Y, m, n - 1, memo),
                               lcs(X, Y, m - 1, n, memo));
        return memo[m - 1][n - 1];
    }
}

int main()
{

    string X = "AGGTAB";
    string Y = "GXTXAYB";
    int m = X.length();
    int n = Y.length();

    int memo[m][max];

    // Llenar la tabla de -1s
    memset(memo, -1, sizeof(memo));

    cout << "La longitud del LCS es: " << lcs(X, Y, m, n, memo) << endl;

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
