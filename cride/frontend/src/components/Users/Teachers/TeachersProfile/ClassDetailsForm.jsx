import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaUserGraduate, FaSave } from "react-icons/fa";
import { MdAddCircleOutline, MdTimer, MdCancel } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import ClassStudents from "src/components/Users/Teachers/TeachersProfile/ClassStudents"

import moment from 'moment'
const ClassDetailsForm = (props) => {
    const teacherContext = useContext(TeachersProfileContext);

    const myRef = useRef(null)
    useEffect(() => {
        console.log(props);

        const el = document.querySelector('.teacher-calendar');
        el.scrollIntoView(true)
    }, [])
    const [classData, setClassData] = useState({
        id: Math.random().toString(36).substr(2),
        title: 'Clase',
        start: null,
        constraint: 'businessHours',
        description: '',
        students: []
    })
    const handleBack = () => {
        teacherContext.setIsDateEditing(false)
    }
    const updateDate = () => {

    }
    useEffect(() => {
        if (props.args) {
            console.log(props.args);

            if (teacherContext.isEdit) {

                setClassData(() => ({
                    id: props.args.event.id,
                    title: 'Clase',
                    start: props.args.event.start,
                    constraint: 'businessHours',
                    description: props.args.event.extendedProps.description,
                    students: props.args.event.extendedProps.students

                }))
            } else if (teacherContext.isMyClass) {
                setClassData(() => ({
                    id: props.args.event.id,
                    title: props.args.event.title,
                    start: props.args.event.start,
                    constraint: 'businessHours',
                    description: props.args.event.extendedProps.description,
                    students: props.args.event.extendedProps.students

                }))
            } else {
                setClassData(() => ({
                    id: Math.random().toString(36).substr(2),
                    title: 'Clase',
                    start: props.args.date,
                    constraint: 'businessHours',
                    description: '',
                    students: []
                }))
            }

        }

    }, [props.args])

    const [calendarView, setCalendarView] = useState(null)

    const addClass = () => {
        if (props.profile) {
            teacherContext.addMyPendingClass(classData)

        } else {
            teacherContext.addTemporaryClassEvent(classData)


        }

        teacherContext.handleHideDetailsClassForm()
        setClassData({
            id: '',
            title: 'Clase',
            start: null,
            description: ''
        })
    }
    const deleteClass = () => {
        if (props.profile) {
            if (confirm('¿Estas seguro?')) {

                teacherContext.removeMyPendingClassEvent(classData)
                props.args.event.remove()
                // let event = props.calendar.current.getResourceById(classData.id);
                // event.remove()
                setClassData({
                    id: '',
                    title: 'Clase',
                    start: null,
                    description: ''
                })
            }
        } else {
            if (confirm('¿Estas seguro?')) {

                teacherContext.removeTemporaryClassEvent(classData)
                props.args.event.remove()
                // let event = props.calendar.current.getResourceById(classData.id);
                // event.remove()
                setClassData({
                    id: '',
                    title: 'Clase',
                    start: null,
                    description: ''
                })
            }
        }
    }
    const updateClass = () => {
        if (confirm('¿Estas seguro?')) {
            if (teacherContext.isMyClass) {
                teacherContext.updateMyAcceptedClass(classData)

            } else if (props.profile) {
                teacherContext.updatePendingClassEvent(classData)

            } else {

                teacherContext.updateTemporaryClassEvent(classData)
            }

            props.args.event.setExtendedProp('description', classData.description)

            setClassData({
                id: '',
                title: 'Clase',
                start: null,
                description: ''
            })
        }
    }
    useEffect(() => {
        return () => {
            setClassData({
                id: '',
                title: 'Clase',
                start: null,
                description: ''
            })
        }
    }, []);
    moment.locale('es')
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="text-grey">
                    <div
                        className="mb-2 w-100 border-bottom rounded pb-2 text-grey text-center"
                        ref={myRef}
                        id="class-details-form"
                    >

                        Comprueba los detalles de la clase
</div>
                    <div className="d-lg-flex justify-content-between align-items-center mt-3 mb-4">
                        {teacherContext.isDateEditing
                            ?
                            <button
                                className="btn-outline-cancel bg-white rounded-pill mr-2 pr-3 pl-2 btn-sm-block"
                                style={{
                                    height: '40px'
                                }}
                                onClick={handleBack}
                            >
                                <IconContext.Provider value={{
                                    className: "cursor-ponter",
                                    size: '25px'
                                }}>
                                    <IoIosArrowBack /> Volver
                        </IconContext.Provider>

                            </button>
                            :
                            <button
                                className="btn-outline-cancel bg-white rounded-pill mr-2 pr-3 pl-2 btn-md-block"
                                style={{
                                    height: '40px'
                                }}
                                onClick={teacherContext.handleHideDetailsClassForm}
                            >
                                <IconContext.Provider value={{
                                    className: "cursor-ponter",
                                    size: '25px'
                                }}>
                                    <IoIosArrowBack /> Volver al calendario
                            </IconContext.Provider>

                            </button>
                        }
                        {teacherContext.isEdit ?

                            <div className="d-sm-flex justify-content-between align-items-cente  btn-md-block">

                                {!teacherContext.isDateEditing ?
                                    <>
                                        <button
                                            className="btn-outline-cancel bg-white rounded-pill mr-2 pl-2 pr-3 btn-md-block"
                                            style={{
                                                height: '40px'
                                            }}
                                            onClick={deleteClass}>
                                            <IconContext.Provider value={{
                                                className: "cursor-ponter",
                                                size: '25px'
                                            }}>
                                                <MdCancel /> Cancelar clase
                                  </IconContext.Provider>

                                        </button>
                                    </>
                                    :
                                    ''
                                }
                                {teacherContext.isDateEditing ?
                                    <button
                                        className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                        style={{
                                            height: '40px'
                                        }}

                                        onClick={updateDate}>

                                        <IconContext.Provider value={{
                                            className: " text-white cursor-ponter",
                                            size: '25px'
                                        }}>
                                            <FaSave /> Solicitar cambio de fecha
                                        </IconContext.Provider>

                                    </button>
                                    :
                                    <button
                                        className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                        style={{
                                            height: '40px'
                                        }}

                                        onClick={updateClass}>

                                        <IconContext.Provider value={{
                                            className: " text-white cursor-ponter",
                                            size: '25px'
                                        }}>
                                            <FaSave />  Guardar
                                        </IconContext.Provider>

                                    </button>
                                }
                            </div>

                            :
                            <>
                                {teacherContext.isMyClass ?
                                    <button
                                        className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                        style={{
                                            height: '40px'
                                        }}

                                        onClick={updateClass}>

                                        <IconContext.Provider value={{
                                            className: " text-white cursor-ponter",
                                            size: '25px'
                                        }}>
                                            <FaSave />  Guardar
                                    </IconContext.Provider>

                                    </button>

                                    :

                                    < button
                                        className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                        style={{
                                            height: '40px'
                                        }}
                                        onClick={addClass}>
                                        <IconContext.Provider value={{
                                            className: " text-white cursor-ponter",
                                            size: '25px'
                                        }}>
                                            <MdAddCircleOutline /> Añadir clase
                                                   </IconContext.Provider>

                                    </button>
                                }
                            </>
                        }


                    </div>
                    <span className="h5">Detalles de la clase</span>

                    <div className="mt-3 mb-4">
                        <Row className="mb-2">
                            <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaRegCalendarAlt /> Fecha:
                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">

                                {moment(classData.start).format('LLL')}
                            </Col>

                        </Row>


                        <Row className="mb-2">
                            <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaUserGraduate /> Num. alumnos:
                                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">
                                1
                </Col>

                        </Row>

                        <Row className="mb-2">
                            <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <MdTimer /> Duración de la clase:
                                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">
                                1 hora
                </Col>

                        </Row>

                    </div>

                    <span className="h5">Que quieres aprender en esta clase</span>

                    <div className="mt-3 mb-4">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder='' value={classData.description} onChange={(e) => setClassData({ ...classData, description: e.target.value })} />
                            <small>
                                Al poner tus objetivos en esta clase conseguiras lo siguiente:
                                <ol>
                                    <li>Que el profesor obtenga información de tu clase y pueda ofrecerte un mejor servicio</li>
                                    <li>Que otros alumnos que tengan tus mismos intereses te pidan una invitación a esa clase y asi ganar dinero</li>
                                </ol>

                            </small>
                        </Form.Group>

                    </div>
                    <Row>
                        <Col sm={12}>
                            <ClassStudents />
                        </Col>

                    </Row>
                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default ClassDetailsForm;
