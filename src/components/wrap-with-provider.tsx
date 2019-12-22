import React from 'react';

import Layout from '../layouts';
import { SwitchContainer } from '../store';

export const WrapWithProvider = ({ element }: any) => (
  <SwitchContainer.Provider>
    <Layout>{element}</Layout>
  </SwitchContainer.Provider>
);

export default WrapWithProvider;
