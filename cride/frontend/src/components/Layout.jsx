import React from 'react';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header'
const Layout = ({ children }) => (
    <>
        <Header />

        < Container className="mt-4">
            {children}

        </Container >
        <Footer />
    </>
);

export default Layout;