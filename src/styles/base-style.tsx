import { css } from '@emotion/core';

export const baseStyle = css`
  width: 100%;
  max-width: 1400px;
  height: auto;
  /* becaouse of footer height is 10vh */
  min-height: 90vh;

  margin: 0 auto;
  padding: 5rem 5% 0 5%;

  h1 {
    font-size: 4rem;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export default baseStyle;
