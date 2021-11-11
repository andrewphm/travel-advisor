import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: var(--medGrey);
  overflow: hidden;
  box-shadow: 2px 0 5px 1px rgba(0, 0, 0, 0.3);
  z-index: 100;
  background-color: var(--clr-grey);
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 1rem;
  box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.3);
  z-index: 10;

  h1 {
    font-size: clamp(1rem, 7vw, 1.4rem);
    font-weight: 700;
    text-align: center;
  }

  .form-container {
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
  }

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
  margin-bottom: 1.5rem;
  align-items: center;
  row-gap: 2rem;
`;
