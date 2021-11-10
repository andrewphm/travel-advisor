import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: var(--medGrey);
  overflow: hidden;

  h1 {
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: 700;
    text-align: center;
  }
`;

export const FormControl = styled.div`
  display: flex;
  column-gap: 1.5rem;
  justify-content: space-around;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    select {
      width: 150px;
      cursor: pointer;
      background-color: transparent;
      font-size: 1rem;
      border-radius: 4px;
      padding: 2px 0.5rem 2px 0;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
