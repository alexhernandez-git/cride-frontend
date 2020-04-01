import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import ClassDetailsForm from "src/components/Users/Teachers/TeachersProfile/ClassDetailsForm"

import moment from 'moment'
const TeachersCalendar = () => {
    const teacherContext = useContext(TeachersProfileContext);
    const calendarComponentRef = useRef(null)
    const [startDate, setStartDate] = useState()
    const [calendarView, setCalendarView] = useState(null)

    function handleDateClick(arg) {
        // Creamos la fecha con moment para poder modificarla
        let date = moment(arg.date)
        // Redondeamos abajo la hora
        var roundDown = date.startOf('hour');

        // Miramos que no haya ninguna hora parecida en el array de eventos

        let result = teacherContext.myPendingClassState.filter(element => String(element.start) == String(roundDown._d));


        if (!moment().isAfter(roundDown._d) > 0) {


            if (result.length <= 0) {
                if (arg.jsEvent.target.classList.contains('fc-nonbusiness') ||
                    arg.jsEvent.target.classList.contains('busy-time')
                ) {
                    alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
                } else {
                    if (teacherContext.classesLeftState > 0) {
                        setStartDate(roundDown._d)
                        teacherContext.handleShowDetailsClassForm()
                    } else {
                        if (confirm('No te quedan clases, ¿quieres adquirir mas?')) {
                            teacherContext.handleShow()
                        }
                    }
                }
            }
        } else {
            alert('this date is in the past')
        }
    }
    function handleEventClick(args) {
        if (confirm('¿Are you sure you want remove this event?')) {
            console.log(teacherContext.myPendingClassState);

            let newEventsArray = teacherContext.myPendingClassState.filter(event => {

                return event.start.toString() !== args.event.start.toString()
            })
            teacherContext.dispatchMyPendingClass({ type: 'SET_MY_PENDING_CLASS', myPendingClass: newEventsArray })
            teacherContext.dispatchClassesLeft({ type: 'REMOVE_CLASS' })
            args.event.remove()

        }

    }
    function handleEventDrop(args) {
        alert(args.event.title + " was dropped on " + args.event.start.toISOString());

        if (!confirm("Are you sure about this change?")) {
            args.revert();
        }
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
            if (getSize().width < 768) {
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
                <div className="teacher-calendar shadow w-100 pt-4 pl-4 pr-4 pb-3 rounded mb-3 overflow-hidden">
                    <span className="d-block h3 font-weight-normal text-primary text-center">Programa la clase</span>

                    {!teacherContext.showDetailsClassForm ?
                        <>
                            <div className="mb-2 w-100 border-bottom rounded pb-2 text-grey text-center">

                                Clica la casilla en la que quieres realizar la classe
                            </div>
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
                                    businessHours={teacherContext.teacherState.teacher.businessHours}
                                    eventLimit={true}
                                    eventSources={[
                                        {
                                            events: teacherContext.teacherState.teacher.myPendingClasses,
                                            color: '#757575',
                                        },
                                    ]}
                                    dateClick={handleDateClick}
                                    eventClick={handleEventClick}
                                    eventDrop={handleEventDrop}
                                    displayEventTime={false}
                                    selectAllow={function (selectInfo) {
                                        return moment().diff(selectInfo.start) <= 0
                                    }}
                                />
                            </div>
                            <div className="classes-to-assign mt-2 bg-gradient-green shadow rounded p-2 text-white text-center cursor-pointer">
                                Clases por asignar <span className="font-weight-bold">{teacherContext.classesLeftState}</span>
                            </div>
                        </>
                        :
                        ''
                    }

                </div>

            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default TeachersCalendar;
