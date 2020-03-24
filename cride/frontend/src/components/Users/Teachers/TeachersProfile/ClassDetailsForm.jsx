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

    const myRef = useRef(null)
    const [classData, setClassData] = useState({
        id: Math.random().toString(36).substr(2),
        title: 'Clase',
        start: null,
        constraint: 'businessHours',
        description: ''
    })
    useEffect(() => {
        if (props.args) {

            if (teacherContext.isEdit) {

                setClassData(() => ({
                    id: Math.random().toString(36).substr(2),
                    title: 'Clase',
                    start: props.args.date,
                    constraint: 'businessHours',
                    description: props.args.event.extendedProps.description
                }))
            } else {
                setClassData(() => ({
                    id: Math.random().toString(36).substr(2),
                    title: 'Clase',
                    start: props.args.date,
                    constraint: 'businessHours',
                    description: ''
                }))
            }

        }

    }, [props.args])

    const [calendarView, setCalendarView] = useState(null)
    const calendarComponentRef = useRef(null)
    function getSize() {
        return {
            width: window.innerWidth
        };
    }
    const teacherContext = useContext(TeachersProfileContext);

    useEffect(() => {

        if (getSize().width < 480) {
            calendarComponentRef.current.calendar.changeView('timeGridDay')
        } else if (getSize().width < 992) {
            calendarComponentRef.current.calendar.changeView('timeGridWeek')

        } else {
            calendarComponentRef.current.calendar.changeView('dayGridMonth')
        }

        const handleResize = () => {
            if (getSize().width < 480) {
                setCalendarView('timeGridDay');
                calendarComponentRef.current.calendar.changeView('timeGridDay')
            } else if (getSize().width < 992) {
                calendarComponentRef.current.calendar.changeView('timeGridWeek')


            } else {
                calendarComponentRef.current.calendar.changeView('dayGridMonth')

            }

        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount



    const addClass = () => {
        if (props.teacherProfile) {
            teacherContext.dispatchMyPendingClass({
                type: 'ADD_MY_PENDING_CLASS',
                myPendingClass: classData
            })
            teacherContext.dispatchClassesLeft({
                type: 'ADD_CLASS',
            })
        } else {
            teacherContext.dispatchTemporaryClass({
                type: 'ADD_TEMPORARY_CLASS',
                classData
            })
            teacherContext.addTemporaryClass()

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
        if (props.teacherProfile) {

        } else {
            if (confirm('¿Estas seguro?')) {
                console.log(classData);

                teacherContext.dispatchTemporaryClass({
                    type: 'DELETE_TEMPORARY_CLASS',
                    classData
                })
                teacherContext.removeTemporaryClass()
                teacherContext.handleHideDetailsClassForm()

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
                <div className={teacherContext.showDetailsClassForm ? 'd-block' : 'd-none'}>
                    <div className="mb-2 w-100 border-bottom rounded pb-2 text-grey text-center" ref={myRef}>

                        Comprueba los detalles de la clase
</div>
                    <div className="d-sm-flex justify-content-between align-items-center mt-3 mb-4">
                        <button
                            className="btn-outline-cancel bg-white rounded-pill mr-2 pr-3 pl-2 btn-sm-block"
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
                        {teacherContext.isEdit ?

                            <div className="d-flex justify-content-between align-items-center">


                                <button
                                    className="btn-outline-cancel bg-white rounded-pill mr-2 pl-2 pr-3 btn-sm-block"
                                    style={{
                                        height: '40px'
                                    }}
                                    onClick={deleteClass}>
                                    <IconContext.Provider value={{
                                        className: "cursor-ponter",
                                        size: '25px'
                                    }}>
                                        <MdCancel /> Cancelar
                                  </IconContext.Provider>

                                </button>
                                <button
                                    className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-sm-block"
                                    style={{
                                        height: '40px'
                                    }}
                                    onClick={updateClass}>
                                    <IconContext.Provider value={{
                                        className: " text-white cursor-ponter",
                                        size: '25px'
                                    }}>
                                        <FaRegCalendarAlt /> Cambiar de fecha
              </IconContext.Provider>

                                </button>
                                <button
                                    className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-sm-block"
                                    style={{
                                        height: '40px'
                                    }}
                                    onClick={updateClass}>
                                    <IconContext.Provider value={{
                                        className: " text-white cursor-ponter",
                                        size: '25px'
                                    }}>
                                        <FaSave /> Guardar
              </IconContext.Provider>

                                </button>
                            </div>

                            :
                            <button
                                className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-sm-block"
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
                    <div className="mt-4 mb-3">

                        <span className="h5">Calendario</span>
                    </div>
                    <div className="">
                        <div className='demo-app-calendar'>
                            <FullCalendar
                                view={'dayGridMonth'}
                                defaultView={'dayGridMonth'}
                                start={moment().day()}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin]}
                                firstDay={moment().day()}
                                header={{
                                    right: "today prev,next",
                                    center: "title",
                                    left: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                                }}
                                weekends={true}
                                themeSystem='bootstrap'
                                timeZone='local'
                                locales={allLocales}
                                locale='es'
                                allDaySlot={false}
                                slotDuration='00:60:00'
                                minTime="06:00:00"
                                maxTime="24:00:00"
                                contentHeight="auto"
                                eventSources={[
                                    {
                                        events: [classData],
                                        color: '#3f8989',
                                        textColor: '#fff'
                                    }
                                ]}
                                color='#3f8989'
                                ref={calendarComponentRef}
                                eventLimit={true}
                                businessHours={teacherContext.businessHours}
                                displayEventTime={false}
                                selectAllow={function (selectInfo) {
                                    return moment().diff(selectInfo.start) <= 0
                                }}
                            />
                        </div>
                    </div>
                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default ClassDetailsForm;
