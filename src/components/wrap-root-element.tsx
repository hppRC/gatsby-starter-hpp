import React, { ReactNode } from 'react';

import { SwitchContainer } from '../store';

export const WrapRootElement = ({ element }: { element: ReactNode }) => (
  <SwitchContainer.Provider>{element}</SwitchContainer.Provider>
);

export default WrapRootElement;
