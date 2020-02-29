import React from 'react';
import Footer from './Footer';
import Header from './Header'
const Layout = ({ children }) => (
    <>
        <Header />
        <div style={{ overflow: 'hidden' }}>

            {children}
        </div>
        <Footer />
    </>
);

export default Layout;