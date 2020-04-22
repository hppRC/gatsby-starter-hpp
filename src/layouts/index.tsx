import React from 'react';

import Footer from './Footer';
import Header from './Header';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
