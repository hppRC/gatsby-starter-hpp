import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Index: React.FCX = ({ className }) => (
  <div className={className}>
    <h1>Hello!</h1>
  </div>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default () => (
  <Layout>
    <SEO title='Top' description='top page' pathname='/' />
    <StyledIndex />
  </Layout>
);
