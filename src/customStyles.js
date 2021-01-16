import { extendTheme } from '@chakra-ui/react';
const customTheme = extendTheme({
  initialColorMode: 'light',
  colors: {
    brand: {
      stratos: '#001b48',
      regalBlue: '#02457a',
      bondiBlue: '#018abe',
      morningGlory: '#97cadb',
      botticelli: '#d6e8ee',
      successGreen: '#38A169'
    },
  },

  components: {
    ListItem: {
      defaultProps: {
        listStyleType: 'none',
      },
    },
  },
});

export default customTheme;
