import React, { useState, useEffect, useRef, useContext } from 'react'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import "static/assets/styles/components/Teachers/TeachersZone/TeacherClasses.scss"
import {
    FaRegStar,
    FaStar,
    FaChalkboardTeacher,
    FaRegCalendarCheck,
    FaRegQuestionCircle
} from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

import { IconContext } from "react-icons";
export default function TeacherClasses() {
    const [key, setKey] = useState(0)
    return (
        <>
            <div className="container teacher-classes pt-5">
                <div className="d-sm-flex justify-content-between">
                    <div>
                        <span className="h3 d-block mb-0 text-dark">Tus classes</span>
                        <span>Aqui podras gestionar tus classes</span>

                    </div>
                    <div className="d-none d-sm-flex justify-content-center flex-column align-items-center">
                        <span className="h2 d-block mb-0">1</span>
                        <span className="">Clase pendiente</span>
                    </div>
                </div>
                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={k => setKey(k)} defaultActiveKey="first" className="p-3">

                    <Row className="mb-3 mt-4">
                        <Col sm={12}>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link eventKey={0} className="text-grey">
                                        <small className="font-weight-bold">CLASES POR ACEPTAR</small>




                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={1} className="text-grey">
                                        <small className="font-weight-bold">TUS CLASES</small>

                                    </Nav.Link>
                                </Nav.Item>


                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="pl-3 pr-3">

                            <Tab.Content>
                                <Tab.Pane eventKey={0} className="text-grey">
                                    efwfew
                            </Tab.Pane>
                                <Tab.Pane eventKey={1} className="text-grey">
                                    ewffewfew
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}
