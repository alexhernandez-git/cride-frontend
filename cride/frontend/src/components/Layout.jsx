import React from 'react';
import Footer from './Footer';
import Header from '../components/Header'
const Layout = ({ children }) => (
    <>
        <Header />

        {children}
        <Footer />
    </>
);

export default Layout;