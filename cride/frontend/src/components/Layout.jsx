import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="vh-100 bg-light">

        {children}
        <Footer />
    </div>
);

export default Layout;