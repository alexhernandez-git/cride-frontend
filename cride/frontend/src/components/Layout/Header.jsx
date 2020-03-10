
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { FaSearch } from 'react-icons/fa';

import { Link, useLocation } from "react-router-dom"
import "static/assets/styles/components/Layout/Header.scss"
import TeachersMenu from "src/components/Teachers/TeachersZone/TeachersMenu"

export default function Header() {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <Navbar bg="white" expand="md" className="header border-bottom p-0 shadow" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="ml-3">
                    <Link to="/">
                        <Navbar.Brand >
                            <img
                                alt=""
                                src="https://react-bootstrap.netlify.com/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="d-none d-md-inline">ClassLine</span>
                        </Navbar.Brand>
                    </Link>
                </div>
                <Nav className="ml-auto mr-3 d-none d-md-block">
                    <Nav.Link href="#features" className="align-self-center text-center">Categories</Nav.Link>
                </Nav>
                <Form inline className="position-relative form-search-parent border-left">
                    <FormControl
                        border="none"
                        type="text"
                        placeholder="Search"
                        className="border-0 w-100 align-middle form-search" />
                    <div className="search-icon">
                        <FaSearch />
                    </div>
                </Form>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Link to="/teacherzone" className="d-flex align-self-center text-grey text-center header-btn border-bottom p-3">Profesor</Link>
                        <Nav.Link className="btn ml-3 btn-sm btn-outline-green header-btn">Iniciar sesión</Nav.Link>
                        <Nav.Link className="btn ml-3 btn-sm btn-green text-white header-btn" href="">Registrate</Nav.Link>
                    </Nav>
                    {location.pathname == '/teacherzone' ?
                        <div className="teacher-header">
                            <TeachersMenu />
                        </div>
                        :
                        ''
                    }

                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
