import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"
import { Form, Button } from 'react-bootstrap'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

import moment from 'moment'
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function ScheduleHour() {
    const teacherContext = useContext(TeachersProfileContext);
    const calendarComponentRef = useRef(null)
    const calendarDiv = useRef(null)
    const classDataForm = useRef(null)

    const [calendarView, setCalendarView] = useState(null)
    // recoje la fecha del evento que queremos crear
    const [classData, setClassData] = useState({
        id: '',
        start: '',
        description: '',
        isEditing: false
    })
    useEffect(() => {
        console.log(classData);

    }, [classData]);

    const handleShowClassDataForm = () => {
        classDataForm.current.classList = 'd-block'
        calendarDiv.current.classList = 'd-none'
    }
    const handleAddClassInCalendar = () => {
        teacherContext.dispatchTemporaryClass({
            type: 'ADD_TEMPORARY_CLASS', newClass: classData
        })
        setClassData({
            id: '',
            start: false,
            description: '',
            isEditing: false
        })
        classDataForm.current.classList = 'd-none'
        calendarDiv.current.classList = 'd-block'
    }

    const handleCancelAddClassInCalendar = () => {
        setClassData({
            id: '',
            start: false,
            description: '',
            isEditing: false
        })
        classDataForm.current.classList = 'd-none'
        calendarDiv.current.classList = 'd-block'
    }
    function handleDateClick(arg) {

        // Creamos la fecha con moment para poder modificarla
        let date = moment(arg.date)
        // Redondeamos abajo la hora
        var roundDown = date.startOf('hour');

        // Miramos que no haya ninguna hora parecida en el array de eventos

        let result = teacherContext.temporaryClassState.filter(element => String(element.start) == String(roundDown._d));
        let result2 = teacherContext.myPendingClassState.filter(element => String(element.start) == String(roundDown._d));
        result = [...result, ...result2]

        if (!moment().isAfter(roundDown._d) > 0) {


            if (result.length <= 0) {
                if (arg.jsEvent.target.classList.contains('fc-nonbusiness') ||
                    arg.jsEvent.target.classList.contains('busy-time')
                ) {
                    alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
                } else {

                    if (teacherContext.classesAssignedLeft > 0) {

                        setClassData(() => {
                            return {
                                id: Math.random().toString(36).substr(2),
                                start: roundDown._d,
                                description: 'dwqwqwqd',
                                isEditing: false
                            }

                        })


                        handleShowClassDataForm();

                        // teacherContext.addTemporaryClass()


                    } else {
                        alert("Ya has assignado todas las clases")
                    }
                }
            }
        } else {
            alert('this date is in the past')
        }
    }
    function handleEventClick(args) {
        if (args.el != undefined && args.el.style.backgroundColor == "grey") {
            return
        }
        let newEventsArray = teacherContext.temporaryClassState.filter(event => {
            return event.start.toString() !== args.event.start.toString()
        })

        teacherContext.dispatchTemporaryClass({ type: 'SET_TEMPORARY_CLASS', classes: newEventsArray })
        teacherContext.removeTemporaryClass()
        args.event.remove()
    }
    function getSize() {
        return {
            width: window.innerWidth
        };
    }
    useEffect(() => {
        if (getSize().width < 768) {
            calendarComponentRef.current.calendar.changeView('timeGridDay')

        } else {
            calendarComponentRef.current.calendar.changeView('timeGridWeek')

        }

        const handleResize = () => {
            if (getSize().width < 1024) {
                setCalendarView('timeGridDay');
                calendarComponentRef.current.calendar.changeView('timeGridDay')


            } else {
                calendarComponentRef.current.calendar.changeView('timeGridWeek')

            }

        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="teacher-calendar w-100 rounded text-center">

                    <div className="mb-2 w-100 border-bottom rounded p-2 text-grey text-center">
                        Este paso es 100% opcional, podras asignar las clases cuando quieras
                    </div>
                    <div ref={calendarDiv}>

                        <div className='demo-app-calendar'>
                            <FullCalendar
                                view={calendarView}
                                defaultView={calendarView}
                                start={moment().day()}
                                plugins={[timeGridPlugin, interactionPlugin, bootstrapPlugin]}
                                firstDay={moment().day()}
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

                                ref={calendarComponentRef}
                                businessHours={teacherContext.businessHours}
                                eventLimit={true}
                                eventSources={[
                                    {
                                        events: teacherContext.myPendingClassState,
                                        color: 'grey',
                                        editable: false,
                                    },
                                    {
                                        events: teacherContext.temporaryClassState,
                                        color: '#3f8989'
                                    },
                                ]

                                }
                                dateClick={handleDateClick}
                                eventClick={handleEventClick}
                                displayEventTime={false}
                                selectAllow={function (selectInfo) {
                                    return moment().diff(selectInfo.start) <= 0
                                }}
                            />
                        </div>
                        <div className="classes-to-assign mt-2 bg-gradient-green shadow p-2 text-white text-center cursor-pointer rounded">
                            Clases por asignar <span className="font-weight-bold">{teacherContext.classesAssignedLeft}</span>
                        </div>
                    </div>

                    <div className="d-none" ref={classDataForm}>
                        <div>
                            <span className="d-block">Tu clase estara programada para la fecha:</span>
                            {classData.start ?
                                <span className="d-block">{moment(classData.start).format('LLLL', 'es')}</span>
                                :
                                <span className="d-block">Ha habido algun error al introducir la fecha</span>
                            }
                        </div>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descripción</Form.Label>

                            <Form.Control as="textarea" rows="3" value={classData.description} onChange={e => setClassData({ ...classData, description: e.target.value })} />
                            <Form.Label>Pon una breve descripción de lo que queres aprender en esa clase</Form.Label>
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <div>
                                <button className="btn btn-outline-cancel" onClick={handleCancelAddClassInCalendar}>
                                    Volver
                                </button>
                                {classData.isEditing ?
                                    <button className="btn btn-outline-green ">
                                        Eliminar
                         </button>
                                    :
                                    ''
                                }
                            </div>
                            <div>
                                {classData.isEditing ?
                                    <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0">
                                        Guardar
                         </Button>
                                    :
                                    <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0" onClick={handleAddClassInCalendar}>
                                        Añadir clase
                        </Button>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer>
    )
}
