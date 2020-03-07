import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Teachers/TeachersProfile/TeacherCalendar.scss"
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
        let result = teacherContext.calendarEvents.filter(element => String(element.start) == String(roundDown._d));


        if (!moment().isAfter(roundDown._d) > 0) {


            if (result.length <= 0) {
                if (arg.jsEvent.target.classList.contains('fc-nonbusiness') ||
                    arg.jsEvent.target.classList.contains('busy-time')
                ) {
                    alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
                } else {
                    if (teacherContext.lessonsLeft > 0) {
                        if (confirm('Would you like to add an event to ' + roundDown._d + ' ?')) {
                            teacherContext.addClass()

                            teacherContext.addCalendarEvent({
                                // creates a new array
                                id: Math.random().toString(36).substr(2),
                                title: 'Reservado',
                                start: roundDown._d,
                            })
                        }
                    } else {
                        if (confirm('No te quedan clases, ¿quieres adquirir mas?')) {
                            result = prompt('¿Cuantas quieres adquirir?')

                            if (result)
                                teacherContext.addLessonsLeft(result)
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
            let newEventsArray = teacherContext.calendarEvents.filter(event => {
                return event.start.toString() !== args.event.start.toString()
            })
            teacherContext.setCalendarEvents(newEventsArray)
            teacherContext.removeClass()
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
                <div className="teacher-calendar w-100 rounded overflow-hidden text-center">
                    <span className="d-block h4 mb-3">Elige cuándo quieres realizar la/s clase/s</span>
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
                            events={teacherContext.calendarEvents}
                            dateClick={handleDateClick}
                            eventClick={handleEventClick}
                            eventDrop={handleEventDrop}
                            displayEventTime={false}
                            selectAllow={function (selectInfo) {
                                return moment().diff(selectInfo.start) <= 0
                            }}
                        />
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer>
    )
}
