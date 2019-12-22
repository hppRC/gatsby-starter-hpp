import React from 'react';

import styled from '@emotion/styled';

import { SEO, StyledForm as Form } from '../components';
import baseStyle from '../styles/base-style';

const Contact: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <Form />
  </main>
);

const StyledContact = styled(Contact)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Contact' pathname='/contact' />
    <StyledContact />
  </>
);
