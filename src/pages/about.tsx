import React from 'react';
import { SEO } from 'src/components';
import AboutMDX from 'src/internal/about.mdx';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const About: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>About</h1>
    <AboutMDX />
  </main>
);

const StyledAbout = styled(About)`
  ${baseStyle};
`;

export default props => {
  return (
    <>
      <SEO title='About' pathname={props.path} />
      <StyledAbout />
    </>
  );
};
