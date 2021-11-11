import React from 'react';

// Styles
import { Card, Media, Content } from './PlaceDetails.styles';

const PlaceDetails = ({ place }) => {
  const { name, address, ranking, photo } = place;
  return (
    <Card>
      <Media image={photo?.images.medium.url}>
        {/* {photo && (
          <img src={photo.images.medium.url} alt={photo.caption} width="100%" />
        )} */}
      </Media>
      <h2>{address}</h2>
      <h3>{ranking}</h3>
    </Card>
  );
};

export default PlaceDetails;
