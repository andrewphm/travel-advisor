import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - var(--headerHeight));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 2fr;
  align-items: center;
`;
