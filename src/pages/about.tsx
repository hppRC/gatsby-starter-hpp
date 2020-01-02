import React from 'react';
import { SEO } from 'src/components';
import AboutMDX from 'src/internal/about.mdx';
import baseStyle from 'src/styles/base-style';

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

export default (props: any) => (
  <>
    <SEO title='About' pathname={props.path} />
    <StyledAbout />
  </>
);
