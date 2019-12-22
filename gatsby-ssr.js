import React from 'react';
import { MenuContainer } from './src/store';
import Layout from './src/layouts';

const wrapWithProvider = ({ element }) => (
  <MenuContainer.Provider>
    <Layout>{element}</Layout>
  </MenuContainer.Provider>
);

export const wrapRootElement = wrapWithProvider;
