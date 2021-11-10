import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Grid from './components/Grid';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

const App = () => {
  return (
    <>
      <Header />
      <Grid>
        <List />
        <Map />
      </Grid>
      <GlobalStyle />
    </>
  );
};

export default App;
