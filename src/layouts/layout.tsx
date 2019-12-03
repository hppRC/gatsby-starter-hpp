import React from 'react';
import { ResetCSS, GlobalCSS, SEO } from '../components';
import Header from './header';
import Footer from './footer';

export const Layout: React.FC = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <SEO />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
