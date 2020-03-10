import React, { useState, useEffect, useRef, useContext } from 'react'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import "static/assets/styles/components/Teachers/TeachersProfile/ScheduleClass.scss"
import {
    FaRegStar,
    FaStar,
    FaChalkboardTeacher,
    FaRegCalendarCheck,
    FaRegQuestionCircle
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';

import { IconContext } from "react-icons";
export default function TeacherClasses() {
    const [key, setKey] = useState(0)
    return (
        <>
            <div className="container">
                <span className="h2 text-center">Tus classes</span>
                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={k => setKey(k)} defaultActiveKey="first" className="p-3">

                    <Row className="mb-3">
                        <Col sm={12}>
                            <Nav variant="pills" className="d-flex justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey={0}>
                                        <IconContext.Provider
                                            value={{
                                                className: "global-class-name",
                                                size: '20px'
                                            }}>
                                            <FaChalkboardTeacher />
                                            {' '}Cuantas clases quieres?

                                        </IconContext.Provider>

                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey={1}>
                                        <IconContext.Provider
                                            value={{
                                                className: "global-class-name",
                                                size: '20px'
                                            }}>
                                            <MdPayment />
                                            {' '}Completa el proceso
                                                                    </IconContext.Provider>
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
