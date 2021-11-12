import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as fasStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating }) => {
  let num = rating;
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (num >= 1) {
      stars.push(
        <FontAwesomeIcon key={i} icon={fasStar} color="#fbbc05" size="xs" />
      );
    }
    if (num > 0 && num < 1) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfAlt}
          color="#fbbc05"
          size="xs"
        />
      );
    }
    if (num <= 0) {
      stars.push(
        <FontAwesomeIcon key={i} icon={farStar} color="#fbbc05" size="xs" />
      );
    }
    num -= 1;
  }

  return <div className="stars">{stars}</div>;
};

export default Rating;
