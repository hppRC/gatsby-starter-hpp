import { css } from '@emotion/core';

export const baseStyle = css`
  width: 100%;
  max-width: 1400px;
  height: auto;
  min-height: 100vh;

  list-style-position: inside;

  margin: 0 auto;
  padding: 10% 10%;

  @media screen and (max-width: 768px) {
    padding: 6rem 8%;
  }
  @media screen and (max-width: 480px) {
    padding: 8rem 6.5%;
  }
`;

export default baseStyle;
