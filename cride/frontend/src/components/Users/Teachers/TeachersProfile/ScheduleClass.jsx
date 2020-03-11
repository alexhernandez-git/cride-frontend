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
import ClassSubject from "./ScheduleClass/ClassSubject"
import ScheduleHour from "./ScheduleClass/ScheduleHour"
export default function ScheduleClass() {
    const teacherContext = useContext(TeachersProfileContext);

    const [invitationPriceState, setInvitationPriceState] = useState(false)
    const handleClickInvitationEarning = () => {
        if (invitationPriceState) {
            setInvitationPriceState(false)
        } else {
            setInvitationPriceState(true)
        }
    }

    return (

        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <Modal
                    show={teacherContext.showScheduleClass}
                    size="xl"
                    backdrop='false'
                    className="schedule-class"
                >
                    <Modal.Header className="d-block">

                        <div
                            className="invitation-earning overflow-hidden w-100 bg-gradient-green shadow rounded p-2 text-white text-center cursor-pointer"
                            onClick={handleClickInvitationEarning}
                        >
                            {invitationPriceState ?
                                <IconContext.Provider
                                    value={{
                                        className: "global-class-name cursor-pointer float-right font-weight-light",
                                        size: '20px'
                                    }}
                                >
                                    <IoMdClose />

                                </IconContext.Provider> :
                                <IconContext.Provider
                                    value={{
                                        className: "global-class-name cursor-pointer float-right font-weight-light",
                                        size: '20px'
                                    }}
                                >
                                    <FaRegQuestionCircle />

                                </IconContext.Provider>

                            }

                            <span className={invitationPriceState ? "d-block" : "d-block"}>Por cada compañero que invites a la clase obtendrás <span className="font-weight-bold">{Math.round(teacherContext.classPrice * 0.2)}€</span></span>

                        </div>
                        <div
                            className={invitationPriceState ? "d-block text-center p-2 shadow rounded-bottom text-grey position-absolute bg-white" : "d-none"}
                            style={{ width: '85%', zIndex: '1000', left: '0', right: '0', margin: '0 auto' }}
                        >
                            <span className="d-block">
                                Al compañero que invites le va a costar la classe exactamente{' '}
                                <span className="font-weight-bold">{Math.round(teacherContext.classPrice - teacherContext.classPrice * 0.2)}€</span><br />
                                que es un <span className="font-weight-bold">20% menos</span> del coste inicial de la clase,<br /> y tu vas a ganar{' '}
                                <span className="font-weight-bold">{Math.round(teacherContext.classPrice * 0.2)}€</span> por cada invitado que adquiera la clase
                                </span>
                        </div>

                    </Modal.Header>
                    <Modal.Body className="pt-3 border-0 rounded bg-white">
                        <div >
                            <div className="d-flex justify-content-end">

                                <IconContext.Provider
                                    value={{
                                        className: "global-class-name cursor-pointer",
                                        size: '20px'
                                    }}
                                >
                                    <div onClick={teacherContext.handleClose}>
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
                                            </div >
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

                                            <span className="h3 p-2 shadow mt-3 rounded bg-gradient-green text-white text-center">{teacherContext.selectedClasses}</span>
                                            {teacherContext.selectedClasses == 1 ?
                                                <span className="d-block">Clase seleccionada</span>
                                                :
                                                <span className="d-block">Clases seleccionadas</span>
                                            }

                                        </div >

                                    </div >
                                </Col >
                                <Col lg={9}>
                                    <Tab.Container id="left-tabs-example" activeKey={teacherContext.key} onSelect={k => teacherContext.setKey(k)} defaultActiveKey="first" className="p-3">

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
                                                                    {' '}Cuantas clases quieres?

                                                                </IconContext.Provider>

                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            {teacherContext.selectedClasses > 0 ?
                                                                <Nav.Link eventKey={1} >
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <FaRegCalendarCheck />
                                                                        {' '}Asigna tus clases
                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                                :
                                                                < Nav.Link >
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <FaRegCalendarCheck />
                                                                        {' '}Asigna tus clases
                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                            }
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            {teacherContext.selectedClasses > 0 ?
                                                                <Nav.Link eventKey={2}>
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <MdPayment />
                                                                        {' '}Completa el proceso
                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                                :
                                                                <Nav.Link>
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <MdPayment />
                                                                        {' '}Completa el proceso
                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                            }
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
                                                        <Tab.Pane eventKey={2} className="text-grey">
                                                            <div className="d-flex justify-content-center">
                                                                <a
                                                                    className="btn btn-green text-white"
                                                                    onClick={teacherContext.handleBuy}
                                                                >
                                                                    Adquirir
                                                                </a>
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab.Container>
                                </Col>


                            </Row >
                        </div >
                    </Modal.Body >
                    <Modal.Footer className="pt-0 border-0">
                        <div className="d-flex justify-content-end">


                            {


                                teacherContext.selectedClasses < 1 || teacherContext.key == 2 ?
                                    (

                                        <a className='btn text-white btn-green disabled' onClick={teacherContext.handleNext}>Siguiente paso</a>
                                    )
                                    :
                                    (
                                        <a className='btn text-white btn-green' onClick={teacherContext.handleNext}>Siguiente paso</a>
                                    )
                            }

                        </div>
                    </Modal.Footer>


                </Modal >
            )
            }
        </TeachersProfileContext.Consumer >

    )
}
