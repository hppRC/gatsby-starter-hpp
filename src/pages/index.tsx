import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import baseStyle from '../styles/base-style';

const Index: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <h1>this is index page!</h1>
    </main>
  );
};

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Top' pathname='/' />
    <StyledIndex />
  </>
);
