import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import styled from '@emotion/styled';

export const NotFound = () => (
  <Layout>
    <SEO title='Not Found' description='404 page' />
    <h1>Not found</h1>
  </Layout>
);

export default styled(NotFound)``;
