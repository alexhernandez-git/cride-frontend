import React, { useState, useEffect, useRef, useContext } from 'react'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import "static/assets/styles/components/Users/Teachers/TeachersZone/TeachersClasses.scss"
import TeachersProfileInfo from "src/components/Users/Teachers/TeachersZone/TeachersProfileEdit/TeachersProfileInfo"
import TeachersProfileImage from "src/components/Users/Teachers/TeachersZone/TeachersProfileEdit/TeachersProfileImage"
import {
    FaRegStar,
    FaStar,
    FaChalkboardTeacher,
    FaRegCalendarCheck,
    FaRegQuestionCircle
} from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

import { IconContext } from "react-icons";
const TeacherProfileEdit = () => {
    const [key, setKey] = useState(0)
    return (
        <>
            <div className="container teachers-profile-edit pt-5 text-grey">
                <div className="d-sm-flex justify-content-start">
                    <div>
                        <span className="h3 d-block mb-0 text-dark">Ajustes y perfil</span>
                        <span>Crea un perfil increible</span>

                    </div>
                </div>
                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={k => setKey(k)} defaultActiveKey="first" className="p-3">

                    <Row className="mb-3 mt-4">
                        <Col sm={12}>
                            <Nav style={{
                                whiteSpace: 'nowrap',
                                position: 'relative',
                                overflowX: 'auto',
                                overflowY: 'hidden',
                                width: '100%',
                                flexWrap: 'nowrap'
                            }}>

                                <Nav.Item>
                                    <Nav.Link eventKey={0} className="text-grey">
                                        <span className="font-weight-bold">PERFIL DEL PROFESOR</span>

                                    </Nav.Link>
                                </Nav.Item>


                                <Nav.Item>
                                    <Nav.Link eventKey={1} className="text-grey">
                                        <span className="font-weight-bold">IMAGEN DE PERFIL</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={2} className="text-grey">
                                        <span className="font-weight-bold">VIDEO DE PRESENTACIÓN</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={3} className="text-grey">
                                        <span className="font-weight-bold">CURRICULUM</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={4} className="text-grey">
                                        <span className="font-weight-bold">PRICING</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="pl-3 pr-3">

                            <Tab.Content>
                                <Tab.Pane eventKey={0} className="text-grey">
                                    <TeachersProfileInfo />
                                </Tab.Pane>
                                <Tab.Pane eventKey={1} className="text-grey">
                                    <TeachersProfileImage />
                                </Tab.Pane>
                                <Tab.Pane eventKey={2} className="text-grey">
                                    ewffewfew
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default TeacherProfileEdit;
