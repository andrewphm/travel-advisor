import React from 'react';

// Components
import Rating from '../Rating';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Styles
import { Card, Media, Content } from './PlaceDetails.styles';

const PlaceDetails = ({ place, id }) => {
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
    num_reviews,
    raw_ranking,
    rating,
    business_listings,
  } = place;

  const hotel_url = business_listings?.mobile_contacts[0]?.value || undefined;

  return (
    <Card id={id}>
      <Media image={photo?.images.medium.url} />
      <Content>
        <div className="details">
          <h4>{name}</h4>
          <p>{price_level}</p>
        </div>

        <div className="details">
          <div className="ratings">
            <p>{raw_ranking.split('').splice(0, 3).join('')}</p>
            <Rating rating={rating} />
            <p>({num_reviews})</p>
          </div>
        </div>

        {phone && (
          <div className="details">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>{phone}</p>
          </div>
        )}

        {address && (
          <div className="details">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>{address?.split(',').splice(0, 2).join(', ')}</p>
          </div>
        )}
        {(website || web_url || hotel_url) && (
          <div className="details">
            <a
              href={website ? website : hotel_url}
              target="_blank"
              rel="noreferrer"
            >
              WEBSITE
            </a>
            {web_url && (
              <a href={web_url} target="_blank" rel="noreferrer">
                TRIPADVISOR
              </a>
            )}
          </div>
        )}
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
