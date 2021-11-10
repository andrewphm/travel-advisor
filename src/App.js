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
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get current position and save to state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  console.log(coordinates);

  // useEffect(() => {
  //   API.getPlacesData(coordinates, bounds).then((data) => {
  //     setPlaces(data);
  //   });
  // }, [bounds, coordinates]);

  return (
    <>
      <Header />
      <Grid>
        <List />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </Grid>
      <GlobalStyle />
    </>
  );
};

export default App;
