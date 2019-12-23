import React from 'react';
import Layout from 'src/layouts';
import { SwitchContainer } from 'src/store';

export const WrapWithProvider = ({ element }: any) => (
  <SwitchContainer.Provider>
    <Layout>{element}</Layout>
  </SwitchContainer.Provider>
);

export default WrapWithProvider;
