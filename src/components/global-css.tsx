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
          src: local('Yu Gothic Medium');
          font-weight: 100;
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
          font-weight: 200;
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
          font-weight: 300;
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Bold');
          font-weight: bold;
        }

        body {
          font-size: 1.6em;
          overflow-x: hidden;
          /*overscroll-behavior-y: none;*/
          color: #09090f;

          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Hiragino Sans', 'Noto Sans CJK JP', 'Original Yu Gothic',
            'Yu Gothic', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Sans Emoji';

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
