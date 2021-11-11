import React from 'react';
import GoogleMapReact from 'google-map-react';

// Config
import { API_KEY } from '../../config';

//styles
import { Wrapper, Preview } from './Map.styles';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          console.log(e);
        }}
        onChildClick={''}
      >
        {places?.map((map) => (
          <Preview />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
