import React from 'react';
import GoogleMapReact from 'google-map-react';

// Config
import { API_KEY } from '../../config';

//styles
import { Wrapper, Preview } from './Map.styles';

// Components
import Rating from '../Rating';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const defaultCenter = { lat: 40.73061, lng: -73.935242 };

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultCenter}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          console.log(e);
        }}
        onChildClick={''}
      >
        {places?.map((place, i) => {
          const { longitude, latitude, name, rating, ad_position, photo } =
            place;
          if (ad_position) return;
          return (
            <Preview lat={latitude} lng={longitude}>
              <p>{name}</p>
              <div className="img-wrapper">
                <img src={photo?.images.medium.url} alt={'hi'} />
              </div>
              <Rating rating={rating} />
            </Preview>
          );
        })}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
