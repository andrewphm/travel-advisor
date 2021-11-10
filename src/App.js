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
import Spinner from './components/Spinner';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get current position and save to state
  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        setIsLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (bounds && coordinates) {
      console.log('Finally firing');
      // API.getPlacesData(bounds.sw, bounds.ne).then((data) => {
      //   setPlaces(data);
      // });
      console.log(bounds);
    }
  }, [bounds]);

  return (
    <>
      {console.log('rendering')}
      <Header />
      <Grid>
        <List places={places} isLoading={isLoading} />
        {isLoading ? (
          <Spinner />
        ) : (
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        )}
      </Grid>
      <GlobalStyle />
    </>
  );
};

export default App;
