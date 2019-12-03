import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        body {
        }
      }
    `}
  />
);

export default GlobalCSS;
