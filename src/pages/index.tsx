import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

export const Index = () => (
  <Layout>
    <SEO title='Top' description='top page' pathname='/' />
    <h1>Hello!</h1>
  </Layout>
);

export default styled(Index)`
  ${baseStyle}
`;
