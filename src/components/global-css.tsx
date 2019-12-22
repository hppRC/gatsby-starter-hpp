import React from 'react';

import { css, Global } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
        body {
          font-size: 1.6em;
          overflow-x: hidden;
          overscroll-behavior-y: none;

          @media screen and (max-width: 768px) {
            font-size: 1.4rem;
          }

          @media screen and (max-width: 480px) {
          }
        }
      }
    `}
  />
);

export default GlobalCSS;
