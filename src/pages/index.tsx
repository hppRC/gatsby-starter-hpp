import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';

export default () => (
  <Layout>
    <SEO title='Top' description='top page' pathname='/' />
    <h1>Hello!</h1>
  </Layout>
);
