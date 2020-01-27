import React from 'react';

import { css, Global } from '@emotion/core';

export const ResetCSS = () => (
  <Global
    styles={css`
      /*!
* ress.css • v2.0.1
* MIT License
* github.com/filipelinhares/ress
*/

      /* # =================================================================
  # Global selectors
  # ================================================================= */

      html {
        box-sizing: border-box;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
        word-break: break-word;
      }

      *,
      ::before,
      ::after {
        background-repeat: no-repeat;
        box-sizing: inherit;
      }

      ::before,
      ::after {
        text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
        vertical-align: inherit;
      }

      * {
        margin: 0;
        padding: 0;
      }

      /* # =================================================================
  # General elements
  # ================================================================= */

      hr {
        height: 0; /* Add the correct box sizing in Firefox */
        overflow: visible; /* Show the overflow in Edge and IE */
      }

      details,
      main {
        display: block;
      }

      summary {
        display: list-item; /* Add the correct display in all browsers */
      }

      small {
        font-size: 80%;
      }

      [hidden] {
        display: none; /* Add the correct display in IE */
      }

      abbr[title] {
        border-bottom: none; /* Remove the bottom border in Chrome 57 */
        /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
        text-decoration: underline;
        text-decoration: underline dotted;
      }

      a {
        background-color: transparent; /* Remove the gray background on active links in IE 10 */
      }

      a:active,
      a:hover {
        outline-width: 0; /* Remove the outline when hovering in all browsers */
      }

      code,
      kbd,
      pre,
      samp {
        font-family: monospace, monospace; /* Specify the font family of code elements */
      }

      pre {
        font-size: 1em;
      }

      b,
      strong {
        font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
      }

      /* https://gist.github.com/unruthless/413930 */
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      /* # =================================================================
  # Forms
  # ================================================================= */

      input {
        border-radius: 0;
      }

      /* Replace pointer cursor in disabled elements */
      [disabled] {
        cursor: default;
      }

      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
      }

      [type='search'] {
        -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
        outline-offset: -2px; /* Correct the outline style in Safari */
      }

      [type='search']::-webkit-search-decoration {
        -webkit-appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
      }

      textarea {
        overflow: auto; /* Internet Explorer 11+ */
        resize: vertical; /* Specify textarea resizability */
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font: inherit; /* Specify font inheritance of form elements */
      }

      optgroup {
        font-weight: bold; /* Restore the font weight unset by the previous rule */
      }

      button {
        overflow: visible;
      }

      button,
      select {
        text-transform: none; /* Firefox 40+, Internet Explorer 11- */
      }

      /* Apply cursor pointer to button elements */
      button,
      [type='button'],
      [type='reset'],
      [type='submit'],
      [role='button'] {
        cursor: pointer;
      }

      /* Remove inner padding and border in Firefox 4+ */
      button::-moz-focus-inner,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      /* Replace focus style removed in the border reset above */
      button:-moz-focusring,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        outline: 1px dotted ButtonText;
      }

      button,
      html [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
      }

      /* Remove the default button styling in all browsers */
      button,
      input,
      select,
      textarea {
        background-color: transparent;
        border-style: none;
      }

      /* Style select like a standard input */
      select {
        -moz-appearance: none; /* Firefox 36+ */
        -webkit-appearance: none; /* Chrome 41+ */
      }

      select::-ms-expand {
        display: none; /* Internet Explorer 11+ */
      }

      select::-ms-value {
        color: currentColor; /* Internet Explorer 11+ */
      }

      legend {
        border: 0;
        color: inherit;
        display: table; /* Correct the text wrapping in Edge and IE */
        max-width: 100%; /* Correct the text wrapping in Edge and IE */
        max-width: 100%; /* Correct the text wrapping in Edge 18- and IE */
        white-space: normal; /* Correct the text wrapping in Edge and IE */
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */
        font: inherit;
      }

      /* # =================================================================
  # Specify media element style
  # ================================================================= */

      img {
        border-style: none;
      }

      /* Add the correct vertical alignment in Chrome, Firefox, and Opera */
      progress {
        vertical-align: baseline;
      }

      svg:not([fill]) {
        fill: currentColor;
      }

      /* # =================================================================
  # Accessibility
  # ================================================================= */

      /* Hide content from screens but not screenreaders */
      @media screen {
        [hidden~='screen'] {
          display: inherit;
        }
        [hidden~='screen']:not(:active):not(:focus):not(:target) {
          clip: rect(0 0 0 0) !important;
          position: absolute !important;
        }
      }

      /* Specify the progress cursor of updating elements */
      [aria-busy='true'] {
        cursor: progress;
      }

      /* Specify the pointer cursor of trigger elements */
      [aria-controls] {
        cursor: pointer;
      }

      /* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
      [aria-disabled] {
        cursor: default;
      }
    `}
  />
);

export default ResetCSS;
