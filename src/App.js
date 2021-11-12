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
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // Get current position and save to state
  useEffect(() => {
    setIsLoading(true);
    console.log('trying to get current location');
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log('Got current location');
        setCoordinates({ lat: latitude, lng: longitude });
        setIsLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (bounds && coordinates) {
      API.getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
      });
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
            places={places}
          />
        )}
      </Grid>
      <GlobalStyle />
    </>
  );
};

export default App;
