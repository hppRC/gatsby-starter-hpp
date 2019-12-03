import React from 'react';
import { ResetCSS, GlobalCSS } from '../components';
import Header from './header';
import Footer from './footer';

export const Layout: React.FC = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
