import React from 'react';
import GoogleMapReact from 'google-map-react';

// Config
import { API_KEY } from '../../config';

//styles
import { Wrapper } from './Map.styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const cord = { lat: 43.65107, lng: -79.347015 };

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
