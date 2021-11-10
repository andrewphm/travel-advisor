import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--medGrey);
  overflow-y: auto;

  h1 {
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: 400;
  }
`;

export const Form = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  label {
    font-weight: bold;
  }

  select {
    width: 150px;
    cursor: pointer;
    background-color: transparent;
    font-size: 1rem;
    border-radius: 4px;
    padding: 2px 0.5rem 2px 0;
  }
`;

export const Content = styled.div`
  display: grid;
`;

export const GridItem = styled.div``;
