import React, { ReactNode } from 'react';
import Layout from 'src/layouts';

export const WrapPageElement = ({ element }: { element: ReactNode }) => {
  return <Layout>{element}</Layout>;
};

export default WrapPageElement;
