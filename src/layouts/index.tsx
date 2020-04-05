import React from 'react';
import { GlobalCSS } from 'src/components';

import Footer from './Footer';
import Header from './Header';

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalCSS />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
