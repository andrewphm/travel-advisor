import React, { useState } from 'react';

import { Wrapper, FormControl, Form, Content } from './List.styles';

const List = () => {
  const [type, setType] = useState('Choose a type');
  const [rating, setRating] = useState('All');

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Beer' },
    { name: 'Best Steak' },
  ];

  return (
    <Wrapper>
      <h1>Restaurants, hotels & attractions around you</h1>
      <Form>
        <FormControl>
          <label htmlFor="type">Select a type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            name="type"
          >
            <option value="restaurants">Restaurant</option>
            <option value="hotels">Hotel</option>
            <option value="attractions">Attractions</option>
          </select>
        </FormControl>

        <FormControl>
          <label htmlFor="rating">Filter ratings</label>
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
        </FormControl>
      </Form>
      <Content></Content>
    </Wrapper>
  );
};

export default List;
