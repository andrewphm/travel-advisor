import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Grid from './components/Grid';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
  return (
    <>
      <Header />
      <div id="main">
        <Grid>
          <List />
        </Grid>
      </div>
      <GlobalStyle />
    </>
  );
};

export default App;
