import React from 'react';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Not Found</h1>
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default ({ path }: { path: string }) => (
  <>
    <SEO title='Not Found' pathname={path} />
    <StyledComponent />
  </>
);
