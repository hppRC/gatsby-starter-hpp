import React from 'react';
import { AnyImage, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <h1>this is Component page!</h1>
      <AnyImage filename='banner.png' />
    </main>
  );
};

const StyledComponent = styled(Component)`
  ${baseStyle};
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default (props: any) => {
  return (
    <>
      <SEO title='Top' pathname={props.path} />
      <StyledComponent />
    </>
  );
};
