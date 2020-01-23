import React from 'react';
import { SwitchContainer } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = {};
type Props = { open: boolean; toggle: () => void } & ContainerProps;

const Component: React.FCX<Props> = ({ className, open, toggle }) => (
  <button onClick={toggle} className={className}>
    {open ? 'open' : 'close'}
  </button>
);

const StyledComponent = styled(Component)`
  color: #ffffff;
  background-color: #000000;
  border-radius: 5px;
  padding: 2rem;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX = () => {
  const { open, toggle } = SwitchContainer.useContainer();
  return <StyledComponent open={open} toggle={toggle} />;
};

export default Container;
