import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

import { StyledModeButton as ModeButton } from './mode-button';

const Header: React.FCX = ({ className }) => (
  <header className={className}>
    <h1>Gatsby starter hpp</h1>
    <nav>
      <ul>
        <li>
          <Link to='/'>Top</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/404'>404</Link>
          <ModeButton />
        </li>
      </ul>
    </nav>
  </header>
);

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100%;

  nav {
    padding: 2rem;
    ul {
      list-style: none;
      li {
        a {
          padding: 2rem;
        }
      }
    }
  }
  z-index: 1000;
`;

export default StyledHeader;
