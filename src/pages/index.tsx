import React from 'react';
import { SEO } from 'src/components';
import baseStyle from 'src/styles/base-style';

import styled from '@emotion/styled';

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
