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
    background-color: rgba(254, 247, 225, 0.3);
  }
`;

export const Media = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100%, cover;
  background-position: center center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 15px;
  width: 100%;
  justify-content: flex-start;

  h4 {
    font-size: 1.2rem;
  }

  .details {
    display: flex;
    column-gap: 1rem;
    padding-bottom: 12px;
    align-items: center;

    a {
      text-decoration: none;
      color: blue;
      font-weight: 900;
      font-size: 0.8rem;

      :hover {
        opacity: 0.7;
      }
    }
  }

  .details-awards {
    display: flex;
    flex-direction: column;
  }

  .cuisines {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    justify-content: flex-start;
    margin-top: 15px;
  }
  .cuisine {
    background-color: lightgrey;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.2em 0.5em;
    border-radius: 10px;
    margin: 5px 0;

    p {
      font-size: 0.8rem;
    }
  }
`;
