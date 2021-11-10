import React from 'react';

const PlaceDetails = ({ place }) => {
  const { name, address, ranking } = place;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <h3>{ranking}</h3>
    </div>
  );
};

export default PlaceDetails;
