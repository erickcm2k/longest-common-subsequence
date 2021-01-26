import React from 'react';

import LCS from './LCS/Pages/LCS';
import Landing from './Landing/Pages/Landing';

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import customTheme from './customStyles';
import MainNavigation from './Shared/Navigation/MainNavigation';
// import Footer from './Shared/Footer/Footer';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Container minW="100vw" backgroundColor="brand.botticelli">
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>

              <Route exact path="/lcs">
                <LCS />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Container>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
