import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"

import { TeachersProfileContext } from "src/context/TeachersProfileContext"

import moment from 'moment'
export default function ScheduleHour() {
    const teacherContext = useContext(TeachersProfileContext);
    const calendarComponentRef = useRef(null)


    const [calendarView, setCalendarView] = useState(null)

    function handleDateClick(arg) {

        // Creamos la fecha con moment para poder modificarla
        let date = moment(arg.date)
        // Redondeamos abajo la hora
        var roundDown = date.startOf('hour');

        // Miramos que no haya ninguna hora parecida en el array de eventos

        let result = teacherContext.temporaryClass.classes.filter(element => String(element.start) == String(roundDown._d));
        let result2 = teacherContext.myClassState.filter(element => String(element.start) == String(roundDown._d));
        result = [...result, ...result2]

        if (!moment().isAfter(roundDown._d) > 0) {


            if (result.length <= 0) {
                if (arg.jsEvent.target.classList.contains('fc-nonbusiness') ||
                    arg.jsEvent.target.classList.contains('busy-time')
                ) {
                    alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
                } else {

                    if (teacherContext.classesAssignedLeft > 0) {
                        teacherContext.addTemporaryClass()

                        teacherContext.addMyTemporaryClass({
                            // creates a new array
                            id: Math.random().toString(36).substr(2),
                            title: 'Reservado',
                            start: roundDown._d,
                        })
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
        if (confirm('¿Are you sure you want remove this event?')) {
            let newEventsArray = teacherContext.temporaryClass.classes.filter(event => {
                return event.start.toString() !== args.event.start.toString()
            })
            teacherContext.setTemporaryClass({ classes: newEventsArray })
            teacherContext.removeTemporaryClass()
            args.event.remove()

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
                                    events: teacherContext.myClassState,
                                    color: 'grey',
                                    editable: false,
                                },
                                {
                                    events: teacherContext.temporaryClass.classes,
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
                    <div className="classes-to-assign mt-2 bg-gradient-green shadow rounded p-2 text-white text-center cursor-pointer">
                        Clases por asignar <span className="font-weight-bold">{teacherContext.classesAssignedLeft}</span>
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer>
    )
}
