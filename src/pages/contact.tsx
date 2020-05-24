import React from 'react';
import { NetlifyForm, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <NetlifyForm />
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default ({ path }: { path: string }): JSX.Element => (
  <>
    <SEO title='Contact' pathname={path} />
    <StyledComponent />
  </>
);
