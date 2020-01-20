import React from 'react';
import { GlobalCSS, ResetCSS } from 'src/components';

import Footer from './Footer';
import Header from './Header';

export const Layout: React.FC = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
