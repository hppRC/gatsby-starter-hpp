import React from 'react';
import { SEO } from 'src/components';
import baseStyle from 'src/styles/base-style';

import styled from '@emotion/styled';

const NotFound: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Not Found</h1>
  </main>
);

const StyledNotFound = styled(NotFound)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='404 NotFound' />
    <StyledNotFound />
  </>
);
