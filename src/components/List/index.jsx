import React from 'react';

// Styles
import { Wrapper, FormControl, Content } from './List.styles';

// Components
import PlaceDetails from '../PlaceDetails';
import Spinner from '../Spinner';

const List = ({ places, isLoading, type, setType, rating, setRating }) => {
  return (
    <Wrapper>
      <FormControl>
        <h1>Restaurants, Hotels & Attractions</h1>
        <div className="form-container">
          <form>
            <label htmlFor="type">Select a type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="type"
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </form>

          <form>
            <label htmlFor="rating">Filter by ratings</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              name="type"
            >
              <option value="0">All</option>
              <option value="3">Above 3.0 </option>
              <option value="4">Above 4.0</option>
              <option value="4.5">Above 4.5</option>
            </select>
          </form>
        </div>
      </FormControl>
      {isLoading ? (
        <Spinner />
      ) : (
        <Content>
          {places?.map((place, i) => {
            if (!place.ad_position)
              return <PlaceDetails id={i} key={i} place={place} />;
          })}
        </Content>
      )}
    </Wrapper>
  );
};

export default List;
