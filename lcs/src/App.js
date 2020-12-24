import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import LCS from './LCS/Pages/LCS';
import Landing from './Landing/Pages/Landing';

const App = () => {
  const customTheme = extendTheme({
    initialColorMode: 'light',
    colors: {
      brand: {
        stratos: '#001b48',
        regalBlue: '#02457a',
        bondiBlue: '#018abe',
        morningGlory: '#97cadb',
        botticelli: '#d6e8ee',
      },
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <LCS />
      <Landing/>
    </ChakraProvider>
  );
};

export default App;
