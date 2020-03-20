import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import EnrolledStudents from "src/components/Users/Teachers/TeachersZone/TeachersClasses/EnrolledStudents"
import CalendarClass from "src/components/Users/Teachers/TeachersZone/TeachersClasses/CalendarClass"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"

import moment from 'moment'
const ClassDetailsForm = () => {
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



    const [students, setStudents] = useState([
        {
            id: Math.random().toString(36).substr(2),
            name: 'Alex',
            surname: 'Hernandez',
            isAdmin: true
        }
    ])



    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className={teacherContext.showDetailsClassForm ? 'd-block' : 'd-none'}>
                    <span className="h5">Detalles de la clase</span>
                    <div className="mt-3 mb-4">

                        <Row className="mb-2">
                            <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaRegCalendarAlt /> Fecha:
                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={6} className="d-flex justify-content-center d-sm-inline">

                                Friday, 20 de March, 13:20
                </Col>

                        </Row>


                        <Row className="mb-2">
                            <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaUserGraduate /> Num. alumnos:
                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                                2
                </Col>

                        </Row>

                        <Row className="">
                            <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaChalkboardTeacher />
                                    </IconContext.Provider> Temas a tocar:

                    </span>{' '}
                            </Col>
                            <Col sm={6} md={8} className="d-flex justify-content-center d-sm-inline">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" value={teacherContext.classData.description} onChange={(e) => { teacherContext.setClassData({ ...teacherContext.classData, description: e.target.value }) }} rows="3" />
                                </Form.Group>
                            </Col>

                        </Row>
                    </div>
                    <div className="mt-4 mb-3">

                        <span className="h5">Estudiantes inscritos</span>
                    </div>
                    <div className="">
                        {
                            students.map(student => (
                                <EnrolledStudents key={student.id} student={student} />
                            ))
                        }
                    </div>
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
                                        events: [teacherContext.classData],
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
            )}
        </TeachersProfileContext.Consumer>
    );
}

export default ClassDetailsForm;
