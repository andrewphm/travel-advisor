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
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Get current position and save to state
  useEffect(() => {
    console.log('trying to get current location');
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log('Got current location');
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // Filter places by rating
  useEffect(() => {
    const filtered = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  // Get data when type, or bounds change
  useEffect(() => {
    setIsLoading(true);

    const getPlaces = async () => {
      await API.getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    };

    if (bounds && coordinates) {
      getPlaces();
    }
  }, [bounds, type]);

  return (
    <>
      {console.log('rendering')}
      <Header setCoordinates={setCoordinates} />
      <Grid>
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
        />
      </Grid>
      <GlobalStyle />
    </>
  );
};

export default App;
