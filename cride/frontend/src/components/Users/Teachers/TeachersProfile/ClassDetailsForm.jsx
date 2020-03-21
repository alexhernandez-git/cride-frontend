import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaRegQuestionCircle } from "react-icons/fa";
import { MdAddCircleOutline, MdPersonAdd, MdMessage } from "react-icons/md";
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
    const [classData, setClassData] = useState({
        id: '',
        title: 'Clase',
        start: null,
        description: ''
    })
    useEffect(() => {
        setClassData(() => ({ ...classData, start: props.startDate }))

    }, [props.startDate])

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
        teacherContext.dispatchTemporaryClass({
            type: 'ADD_TEMPORARY_CLASS',
            classData
        })
        teacherContext.handleHideDetailsClassForm()
        setClassData({
            id: '',
            title: 'Clase',
            start: null,
            description: ''
        })
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

    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className={teacherContext.showDetailsClassForm ? 'd-block' : 'd-none'}>
                    <div className="d-sm-flex justify-content-between align-items-center my-4">
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

                                Friday, 20 de March, 13:20
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

                    </div>

                    <span className="h5">De que va a ir esta clase</span>

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
