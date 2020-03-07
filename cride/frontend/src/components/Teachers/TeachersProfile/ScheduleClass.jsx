import React, { useState, useContext } from 'react'
import { TeachersProfileContext } from "src/context/TeachersProfileContext"
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
    FaRegCalendarCheck
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';

import { IconContext } from "react-icons";
import ClassSubject from "./ScheduleClass/ClassSubject"
import ScheduleHour from "./ScheduleClass/ScheduleHour"
export default function ScheduleClass() {
    const teacherContext = useContext(TeachersProfileContext);
    const [key, setKey] = useState(0);
    const handleNext = () => {
        if (key <= 1) {
            setKey(parseInt(key) + 1)
        }

    }
    const handleClose = () => {
        setKey(0)
        teacherContext.handleClose()
    }

    return (

        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <Modal
                    show={teacherContext.showScheduleClass}
                    size="xl"
                    backdrop='false'
                >
                    <Modal.Body className="pt-3 border-0 rounded bg-white">
                        <div className="schedule-class">
                            <div className="d-flex justify-content-end">

                                <IconContext.Provider
                                    value={{
                                        className: "global-class-name cursor-pointer",
                                        size: '20px'
                                    }}
                                >
                                    <div onClick={handleClose}>
                                        <IoMdClose />

                                    </div>
                                </IconContext.Provider>
                            </div>

                            <Row>
                                <Col lg={3} className="d-none d-sm-block">
                                    <div className="student-info d-flex flex-column justify-content-center align-items-center text-grey">
                                        <div className="d-flex flex-column justify-content-center align-items-center p-3">
                                            <div className="div-img mb-4">
                                                <img className="img-student" src={`https://source.unsplash.com/random/1`} />
                                            </div>
                                            <div>
                                                <span className="d-block h5">Alex Hernandez</span>
                                            </div>
                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name text-warning",
                                                    size: '20px'
                                                }}>
                                                <div className="punctuation">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaRegStar />
                                                </div>
                                            </IconContext.Provider>
                                            <div>
                                                <span className="text-small">500 puntuaciones</span>
                                            </div>
                                            <span className="h3 p-2 shadow mt-3 rounded bg-gradient-green text-white text-center">{teacherContext.selectedClasses.selected}</span>

                                            <span className="d-block">Clases seleccionadas</span>
                                        </div>

                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <Tab.Container id="left-tabs-example" activeKey={key} onSelect={k => setKey(k)} defaultActiveKey="first" className="p-3">
                                        <Form onSubmit={(e) => e.preventDefault()}>
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
                                                                    <FaRegCalendarCheck />

                                                                </IconContext.Provider>

                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey={2}>
                                                                <IconContext.Provider
                                                                    value={{
                                                                        className: "global-class-name",
                                                                        size: '20px'
                                                                    }}>
                                                                    <MdPayment />

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
                                                            <ClassSubject />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey={1} className="text-grey">
                                                            <ScheduleHour />
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab.Container>
                                </Col>


                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="pt-0 border-0">
                        <div className="d-flex justify-content-end">
                            <a className="btn btn-green text-white" onClick={handleNext}>Siguiente paso</a>

                        </div>
                    </Modal.Footer>


                </Modal>
            )
            }
        </TeachersProfileContext.Consumer >

    )
}
