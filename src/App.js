import React, { useEffect, useState } from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// API
import API from './API';

// Components
import Grid from './components/Grid';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    API.getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);

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
