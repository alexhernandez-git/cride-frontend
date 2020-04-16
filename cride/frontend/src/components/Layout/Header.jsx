
import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Modal, Button } from 'react-bootstrap'

import { FaSearch } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom"
import "static/assets/styles/components/Layout/Header.scss"

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);
    const handleChangeToRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    }
    const handleChangeToLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    }
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

                        <Link to="/myzone/teacher" className="d-flex align-self-center text-grey text-center header-btn font-weight-light p-2">Profesor</Link>
                        <Nav.Link className="btn ml-3 btn-sm btn-outline-green header-btn" onClick={handleShowLogin}>Iniciar sesión</Nav.Link>
                        <Nav.Link className="btn ml-3 btn-sm btn-green text-white header-btn" onClick={handleShowRegister}>Registrate</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Modal show={showLogin} onHide={handleCloseLogin} animation={true} size="sm" className="text-grey">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white rounded-bottom">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button
                            type="submit"
                            className="btn btn-sm btn-green text-white header-btn w-100 mb-3"
                            onClick={handleShowLogin}
                        >Iniciar sesión</button>
                        <div className="d-flex justify-content-end">
                            <span onClick={handleChangeToRegister} className="cursor-pointer">O registrate</span>

                        </div>

                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showRegister} onHide={handleCloseRegister} animation={true} size="sm" className="text-grey">
                <Modal.Header closeButton>
                    <Modal.Title>Registro</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white rounded-bottom">
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Nombre completo" />

                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />

                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Confirmar contraseña" />
                        </Form.Group>
                        <button
                            type="submit"
                            className="btn btn-sm btn-green text-white header-btn w-100 mb-3"
                            onClick={handleShowRegister}
                        >Registrate</button>
                        <div className="d-flex justify-content-end">
                            <span className="cursor-pointer" onClick={handleChangeToLogin}>O inicia sesión</span>
                        </div>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
