import React from 'react';

import styled from '@emotion/styled';

import { SwitchContainer } from '../../store';

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
