import React from 'react';
import { SwitchContainer } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = { element: React.ReactNode };
type Props = {} & ContainerProps;

// you can use this component for some providers for redux, context API, etc...
const Component: React.FCX<Props> = ({ element }) => <SwitchContainer.Provider>{element}</SwitchContainer.Provider>;

const StyledComponent = styled(Component)`
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;
