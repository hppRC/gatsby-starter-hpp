import React from 'react';
import { SwitchContainer } from 'src/store';

import styled from '@emotion/styled';

const ModeButton: React.FCX = ({ className }) => {
  const { open, toggle } = SwitchContainer.useContainer();

  return (
    <button onClick={toggle} className={className}>
      {open ? 'open' : 'close'}
    </button>
  );
};

export const StyledModeButton = styled(ModeButton)`
  color: #ffffff;
  background-color: #000000;
  border-radius: 5px;
  padding: 2rem;
  cursor: pointer;
`;

export default StyledModeButton;
