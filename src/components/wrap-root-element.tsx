import React from 'react';
import Layout from 'src/layouts';
import { SwitchContainer } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = { element: React.ReactNode };
type Props = ContainerProps;

// you can use this component for some providers for redux, context API, etc...
const Component: React.FCX<Props> = ({ element }) => (
  <SwitchContainer.Provider>
    <Layout>{element}</Layout>
  </SwitchContainer.Provider>
);

const StyledComponent = styled(Component)``;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;
