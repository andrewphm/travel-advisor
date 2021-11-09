import React from 'react';

// Svg logos
import TALogo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.svg';

// Syles
import { Wrapper, Content, LogoImg, Search } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={TALogo} />
        <Search>
          <h3>Explore new places</h3>
          <div className="search-container">
            <img src={SearchIcon} alt="search icon" className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </Search>
      </Content>
    </Wrapper>
  );
};

export default Header;
