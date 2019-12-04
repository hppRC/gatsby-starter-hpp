import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import AboutMDX from "../mdx/about.mdx"

const About: React.FCX = ({ className }) => (
  <div className={className}>
    <AboutMDX />
  </div>
);

const StyledAbout = styled(About)`
  ${baseStyle};
`;

export default () => (
  <Layout>
    <SEO title='About' description='about page' pathname='/about' />
    <StyledAbout />
  </Layout>
);
