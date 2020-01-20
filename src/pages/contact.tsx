import React from 'react';
import { NetlifyForm, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Contact: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <NetlifyForm />
  </main>
);

const StyledContact = styled(Contact)`
  ${baseStyle};
`;

export default (props: any) => {
  return (
    <>
      <SEO title='Contact' pathname={props.path} />
      <StyledContact />
    </>
  );
};
