import React from 'react';

import { css, Global } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      /* reffer to this: https://qiita.com/RinoTsuka/items/b30e03ce10aa38ac2a10#_reference-aab4ed4b3d365dfead76 */

      html {
        font-size: 62.5%;
        @font-face {
          font-family: 'Original Yu Gothic';
          font-weight: 100;
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          font-weight: 200;
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          font-weight: 300;
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          font-weight: 400;
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          font-weight: bold;
          src: local('Yu Gothic Bold');
        }

        body {
          overflow-x: hidden;

          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Noto Sans CJK JP',
            'Original Yu Gothic', 'Yu Gothic', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Sans Emoji';
          font-size: 1.6em;
          /*overscroll-behavior-y: none;*/
          color: #09090f;

          @media screen and (max-width: 768px) {
            font-size: 1.4em;
          }

          @media screen and (max-width: 480px) {
          }
        }
      }

      #gatsby-focus-wrapper {
        display: flex;
        flex-flow: column;
        min-height: 100vh;
      }
`}
  />
);

export default GlobalCSS;
