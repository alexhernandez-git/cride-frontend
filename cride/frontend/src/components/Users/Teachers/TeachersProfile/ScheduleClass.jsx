import React, { useState, useEffect, useRef, useContext } from 'react'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass.scss"
import {
    FaChalkboardTeacher,
    FaRegCalendarCheck,
    FaRegQuestionCircle
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';

import { IconContext } from "react-icons";
import ClassSubject from "./ScheduleClass/ClassSubject"
import ScheduleHour from "./ScheduleClass/ScheduleHour"
import PayClass from "./ScheduleClass/PayClass"
import StarRating from 'src/components/Layout/StarRatings'

export default function ScheduleClass() {
    const teacherContext = useContext(TeachersProfileContext);
    const [invitationPriceState, setInvitationPriceState] = useState(false)
    const handleClickInvitationEarning = () => {
        if (invitationPriceState) {
            setInvitationPriceState(() => false)
        } else {
            setInvitationPriceState(() => true)
        }
    }
    const invitationText = useRef()
    const handleWindowClick = (e) => {
        if (e.target != invitationText.current) {
            setInvitationPriceState(false)
        }
    }
    const handleClick = () => {
        if (invitationPriceState) {
            window.onclick = handleWindowClick
        }
    }
    useEffect(() => {
        window.onclick = handleClick
        return () => {
            window.onclick = handleClick
        }
    }, [window.onclick = handleClick])

    const handleClickHideModal = () => {

        if (teacherContext.key > 0) {
            if (confirm('¿Estas seguro? Si sales al perfil del profesor los cambios se perderan'))
                teacherContext.handleClose()
        } else {
            teacherContext.handleClose()

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

                            <span className={invitationPriceState ? "d-block" : "d-block"}>Por cada compañero que invites a la clase obtendrás <span className="font-weight-bold">{Math.round(teacherContext.teacherState.user.teacher.class_price.value * 0.2)}€</span></span>

                        </div>
                        <div
                            className={invitationPriceState ? "d-block text-center p-2 shadow rounded-bottom text-grey position-absolute bg-white" : "d-none"}
                            style={{ width: '85%', zIndex: '1000', left: '0', right: '0', margin: '0 auto' }}
                        >
                            <span className="d-block" ref={invitationText}>
                                Al compañero que invites le va a costar la classe exactamente{' '}
                                <span className="font-weight-bold">{Math.round(teacherContext.teacherState.user.teacher.class_price.value - teacherContext.teacherState.user.teacher.class_price.value * 0.2) - 0.01}€</span><br />
                                que es un <span className="font-weight-bold">20% menos</span> del coste inicial de la clase,<br /> y tu vas a ganar{' '}
                                <span className="font-weight-bold">{Math.round(teacherContext.teacherState.user.teacher.class_price.value * 0.2)}€</span> por cada invitado que adquiera la clase
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
                                    <div onClick={handleClickHideModal}>
                                        <IoMdClose />

                                    </div>
                                </IconContext.Provider>
                            </div>

                            <Row>
                                <Col lg={3} className="">
                                    <div className="student-info d-flex flex-column justify-content-center align-items-center text-grey">
                                        <div className="d-flex flex-column justify-content-center align-items-center p-3">
                                            <div className="div-img mb-4">
                                                <img className="img-student" src={`https://source.unsplash.com/random/1`} />
                                            </div >
                                            <div>
                                                <span className="d-block h5">{teacherContext.teacherState.user.teacher.name} {teacherContext.teacherState.user.teacher.surname}</span>
                                            </div>
                                            <StarRating rating={teacherContext.teacherState.user.teacher.rating} />



                                            <div>
                                                <span className="text-small">{teacherContext.teacherState.user.teacher.ratings.length} puntuaciones</span>
                                            </div>
                                            <div
                                                id='external-events'
                                                className="text-center draggable-events"
                                            >
                                                {teacherContext.teacherState.classes_assigned_left.length > 0 ?
                                                    <>



                                                        <div className="py-2 d-none d-lg-block"></div>
                                                        <div className="pt-3 d-block d-lg-none"></div>
                                                        {teacherContext.teacherState.classes_assigned_left.length > 0 ?
                                                            <span className="text-center h5 mb-0 font-weight-light">Arrastra tus clases</span>
                                                            :
                                                            ''
                                                        }
                                                        <Row>
                                                            {teacherContext.teacherState.classes_assigned_left.map(() => (
                                                                teacherContext.teacherState.classes_assigned_left.length == 1 ?
                                                                    < Col >
                                                                        <div className="fc-event text-center">Clase</div>
                                                                    </Col>
                                                                    :
                                                                    < Col lg={6} >
                                                                        <div className="fc-event text-center">Clase</div>
                                                                    </Col>
                                                            ))}
                                                        </Row>
                                                    </>
                                                    :
                                                    ''
                                                }
                                            </div>
                                        </div>

                                    </div >

                                </Col >
                                <Col lg={9}>
                                    <Tab.Container id="left-tabs-example" activeKey={teacherContext.key} defaultActiveKey="first" className="p-3">

                                        <Form onSubmit={(e) => e.preventDefault()}>
                                            <Row className="mb-3">
                                                <Col sm={12}>

                                                    <Nav variant="pills" className="d-flex justify-content-center">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey={0} className="rounded-pill cursor-no-pointer">
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
                                                            {teacherContext.teacherState.selected_classes > 0 ?
                                                                <Nav.Link eventKey={1} className="rounded-pill cursor-no-pointer">
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <FaRegCalendarCheck />

                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                                :
                                                                < Nav.Link className="rounded-pill cursor-no-pointer">
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <FaRegCalendarCheck />

                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                            }
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            {teacherContext.teacherState.selected_classes > 0 ?
                                                                <Nav.Link eventKey={2} className="rounded-pill cursor-no-pointer">
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <MdPayment />

                                                                    </IconContext.Provider>
                                                                </Nav.Link>
                                                                :
                                                                <Nav.Link className="rounded-pill cursor-no-pointer">
                                                                    <IconContext.Provider
                                                                        value={{
                                                                            className: "global-class-name",
                                                                            size: '20px'
                                                                        }}>
                                                                        <MdPayment />

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
                                                            <ScheduleHour profile={false} />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey={2} className="text-grey">
                                                            <PayClass />
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


                </Modal >
            )
            }
        </TeachersProfileContext.Consumer >

    )
}
