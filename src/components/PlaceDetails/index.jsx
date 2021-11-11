import { makeStyles } from '@material-ui/core';
import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faPhoneAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

// Styles
import { Card, Media, Content } from './PlaceDetails.styles';

const PlaceDetails = ({ place }) => {
  const {
    name,
    address,
    ranking,
    photo,
    price_level,
    awards,
    cuisine,
    phone,
    web_url,
    website,
  } = place;

  return (
    <Card>
      <Media image={photo?.images.medium.url} />
      <Content>
        <div className="details">
          <h4>{name}</h4>
          <p>{price_level}</p>
        </div>
        <div className="details">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <p>{phone}</p>
        </div>
        <div className="details">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>{address?.split(',').splice(0, 2).join(', ')}</p>
        </div>
        <div className="details">
          {website && (
            <a href={website} target="_blank">
              WEBSITE
            </a>
          )}

          {web_url && (
            <a href={web_url} target="_blank">
              TRIPADVISOR
            </a>
          )}
        </div>
        <div className="details">
          <p>{ranking}</p>
        </div>
        <div className="details-awards">
          {awards?.map((award, i) => {
            return (
              <div className="details" key={i} style={{ paddingBottom: 2 }}>
                <img src={award?.images?.small} alt="award" />
                <p>{award?.display_name}</p>
              </div>
            );
          })}
        </div>
        <div className="cuisines">
          {cuisine?.map((type) => (
            <div className="cuisine" key={type.key}>
              <p>{type.name}</p>
            </div>
          ))}
        </div>
      </Content>
    </Card>
  );
};

export default PlaceDetails;
