import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import styled from '@emotion/styled';

const Index = () => (
  <Layout>
    <SEO title='Top' description='top page' pathname='/' />
    <h1>Hello!</h1>
  </Layout>
);

export default styled(Index)``;
