import React from 'react';
import { SwitchContainer } from 'src/store';

import styled from '@emotion/styled';

type Props = { open: boolean; toggle: () => void };

const Component: React.FCX<Props> = ({ className, open, toggle }) => (
  <button type='button' onClick={toggle} className={className}>
    {open ? `open` : `close`}
  </button>
);

const StyledComponent = styled(Component)`
  padding: 2rem;
  color: #ffffff;
  cursor: pointer;
  background-color: #000000;
  border-radius: 5px;
`;

const Container: React.FCX = () => {
  const { open, toggle } = SwitchContainer.useContainer();
  return <StyledComponent open={open} toggle={toggle} />;
};

export default Container;
