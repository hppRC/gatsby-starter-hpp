import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import baseStyle from '../styles/base-style';

const About: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>About</h1>
  </main>
);

const StyledAbout = styled(About)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='About' pathname='/about' />
    <StyledAbout />
  </>
);
