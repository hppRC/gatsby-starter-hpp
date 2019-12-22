import React from 'react';

import Layout from '../layouts';
import { SwitchContainer } from '../store';

export const WrapWithProvider = ({ element }) => (
  <SwitchContainer.Provider>
    <Layout>{element}</Layout>
  </SwitchContainer.Provider>
);

export default WrapWithProvider;
