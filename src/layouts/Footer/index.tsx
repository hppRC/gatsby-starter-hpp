import React from 'react';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <footer className={className}>Copyright © 2020 hppRC All Rights Reserved.</footer>
);

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10vh;

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledComponent;
