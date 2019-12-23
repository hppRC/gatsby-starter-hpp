import React from 'react';
import { GlobalCSS, ResetCSS } from 'src/components';

import { StyledFooter as Footer } from './Footer';
import { StyledHeader as Header } from './Header';

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
