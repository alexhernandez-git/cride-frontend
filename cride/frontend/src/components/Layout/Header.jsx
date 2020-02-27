
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "../../../static/assets/styles/components/Header.scss"
export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="md" className="border-bottom p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="ml-3 pr-4">
                    <Navbar.Brand href="#home">CRide</Navbar.Brand>
                    <Button variant="ligth border-0 mb-1 d-none d-sm-inline">Categories</Button>
                </div>
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
                        <Nav.Link href="#features" className="align-self-center text-center">Teach</Nav.Link>
                        <Nav.Link className="ml-md-2 m-2 btn btn-outline-dark pr-4 pl-4">Login</Nav.Link>
                        <Nav.Link className="ml-md-2 m-2 btn btn-dark pr-4 pl-4 text-white" href="">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
