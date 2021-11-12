import React, { useState } from 'react';

// Google map react component
import { Autocomplete } from '@react-google-maps/api';

// Svg logos
import TALogo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.svg';

// Syles
import { Wrapper, Content, LogoImg, Search } from './Header.styles';

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutoComplete] = useState(null);
  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <Wrapper>
      <Content>
        <LogoImg src={TALogo} />
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Search>
            <h3>Explore new places</h3>
            <div className="search-container">
              <img src={SearchIcon} alt="search icon" className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>
          </Search>
        </Autocomplete>
      </Content>
    </Wrapper>
  );
};

export default Header;
