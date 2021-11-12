import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Preview = styled.div`
  position: relative;
  background-color: white;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  transition: ease 0.3s all;

  :hover {
    z-index: 100;
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 0.8rem;
    text-align: center;
    color: black;
  }

  .img-wrapper {
    width: 95%;
    height: 100%;
    max-height: 80px;
    overflow: hidden;
    margin: 2px;
  }

  img {
    width: 100%;
  }

  .stars {
    display: flex;
    justify-content: center;
  }
`;
