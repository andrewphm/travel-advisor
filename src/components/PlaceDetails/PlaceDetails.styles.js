import styled from 'styled-components';

export const Card = styled.div`
  height: 1000px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-top: 1px solid lightgrey;
  background-color: white;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);

  :hover {
    cursor: pointer;
  }
`;

export const Media = styled.div`
  height: 175px;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100%, cover;
  background-position: center center;
`;

export const Content = styled.div``;
