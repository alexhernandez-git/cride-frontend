import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";
export default function Header() {
    return (
        <>
            <style type="text/css">
                {`
                .navbar-light .navbar-toggler,
                .navbar-light .navbar-toggler:focus{
                    border: none!important;
                    outline:none !important;
                }
                a.ml-md-2.m-2.btn.btn-outline-info.pr-4.pl-4.nav-link:hover {
                    color: #fff;
                }
                .form-search-parent{
                    width: 60%;
                }
                @media only screen and (min-width: 768px) {
                    .form-search-parent{
                        width: 30%;
                    }
                  }
                  @media only screen and (min-width: 1024px) {
                    .form-search-parent{
                        width: 50%;
                    }
                  }
                .form-search{
                   
                    padding: 20px 20px 20px 40px!important;
                }
            `}
            </style>
            <Navbar bg="light" expand="md" className="border-bottom p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="border-right ml-3 pr-4">
                    <Navbar.Brand href="#home">CRide</Navbar.Brand>
                    <Button variant="ligth border-0 mb-1 d-none d-sm-inline">Categories</Button>
                </div>
                <Form inline className="position-relative form-search-parent">
                    <FormControl
                        border="none"
                        type="text"
                        placeholder="Search"
                        className="ml-2 border-0 w-100 align-middle form-search" />
                    <IconContext.Provider value={{
                        className: "position-absolute",
                        style: {
                            top: '13px',
                            left: '20px',
                            color: 'rgba(0,0,0,0.5)'
                        }
                    }}>
                        <div>
                            <FaSearch />
                        </div>
                    </IconContext.Provider>
                </Form>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link href="#features" className="d-flex align-items-center">Teach</Nav.Link>
                        <Nav.Link className="ml-md-2 m-2 btn btn-outline-info pr-4 pl-4">Login</Nav.Link>
                        <Nav.Link className="ml-md-2 m-2 btn btn-primary pr-4 pl-4 text-white" href="">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
