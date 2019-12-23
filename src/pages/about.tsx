import React from 'react';
import { SEO } from 'src/components';
import baseStyle from 'src/styles/base-style';

import styled from '@emotion/styled';

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
