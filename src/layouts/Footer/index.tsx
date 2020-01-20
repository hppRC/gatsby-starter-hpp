import React from 'react';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <footer className={className}>
    Copyright © 2019 hppRC All Rights Reserved.
  </footer>
);

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
`;

export default StyledComponent;
