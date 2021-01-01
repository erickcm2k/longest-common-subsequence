import React from 'react';

import LCS from './LCS/Pages/LCS';
import Landing from './Landing/Pages/Landing';

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './customStyles';
import MainNavigation from './Shared/Navigation/MainNavigation';
import Footer from './Shared/Footer/Footer';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/lcs">
              <LCS />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
