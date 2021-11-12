import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Preview = styled.div`
  position: relative;
  color: black;
  background-color: white;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);

  p {
    font-size: 0.8rem;
    text-align: center;
  }

  .img-wrapper {
    width: 95%;
    height: 100%;
    max-height: 80px;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  :hover {
    z-index: 100;
  }
`;
