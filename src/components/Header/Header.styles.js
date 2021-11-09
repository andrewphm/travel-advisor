import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0px 70px;
  width: 100%;
  height: 100%;
  position: sticky;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const Search = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;

  h3 {
    font-weight: 400;
    font-size: 1.3rem;
    white-space: nowrap;
  }

  .search-container {
    padding: 3px 1rem;
    background-color: rgba(255, 255, 255, 0.15);
    display: flex;
    border-radius: 5px;
    cursor: text;

    input {
      background: none;
      --webkit-tap-highlight-color: transparent;
      border: 0;
      padding: 5px;
      padding-left: 16px;
      cursor: text;
      outline: none;
      font-size: 1.2rem;
      font-weight: 300;
      color: white;

      ::placeholder {
        font-size: 1.2rem;
      }
    }
  }

  .search-icon {
    width: 20px;
  }
`;

export const LogoImg = styled.img`
  width: 230px;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media screen and (max-width: 760px) {
    width: 175px;
  }
`;
