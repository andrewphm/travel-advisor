import React from 'react';

// Styles
import { Card, Media, Content } from './PlaceDetails.styles';

const PlaceDetails = ({ place }) => {
  const { name, address, ranking, photo, price_level, awards, cuisine } = place;
  return (
    <Card>
      <Media image={photo?.images.medium.url} />
      <Content>
        <h4>{name}</h4>
        <div className="details">
          <p>Price</p>
          <p>{price_level}</p>
        </div>
        <div className="details">
          <p>Ranking</p>
          <p>{ranking}</p>
        </div>
        <div className="details-awards">
          {awards?.map((award) => {
            return (
              <div className="details" style={{ paddingBottom: 2 }}>
                <img src={award?.images?.small} alt="award" />
                <p>{award?.display_name}</p>
              </div>
            );
          })}
        </div>
      </Content>
    </Card>
  );
};

export default PlaceDetails;
