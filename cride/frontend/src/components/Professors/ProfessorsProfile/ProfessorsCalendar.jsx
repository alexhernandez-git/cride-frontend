import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "../../../../static/assets/styles/components/Professors/ProfessorsProfile/ProfessorsCalendar.scss"
import { ProfessorsProfileContext } from "../../../context/ProfessorsProfileContext"

import moment from 'moment'
const ProfessorsCalendar = () => {
    const professorContext = useContext(ProfessorsProfileContext);
    const calendarComponentRef = useRef(null)
    const [businessHours, setBusinessHours] = useState({
        businessHours: [ // specify an array instead
            {
                daysOfWeek: [1], // Monday, Tuesday, Wednesday
                startTime: '08:00', // 8am
                endTime: '18:00' // 6pm
            },
            {
                daysOfWeek: [2], // Thursday, Friday
                startTime: '10:00', // 10am
                endTime: '16:00' // 4pm
            },
            {
                daysOfWeek: [3], // Thursday, Friday
                startTime: '10:00', // 10am
                endTime: '16:00' // 4pm
            },
            {
                daysOfWeek: [4], // Thursday, Friday
                startTime: '10:00', // 10am
                endTime: '16:00' // 4pm
            },
            {
                daysOfWeek: [5], // Thursday, Friday
                startTime: '10:00', // 10am
                endTime: '16:00' // 4pm
            },
            {
                daysOfWeek: [0], // Thursday, Friday
                startTime: '10:00', // 10am
                endTime: '16:00' // 4pm
            }
        ]
    })

    const [calendarView, setCalendarView] = useState(null)

    function handleDateClick(arg) {
        // Creamos la fecha con moment para poder modificarla
        let date = moment(arg.date)
        // Redondeamos abajo la hora
        var roundDown = date.startOf('hour');

        // Miramos que no haya ninguna hora parecida en el array de eventos
        let result = professorContext.calendarEvents.filter(element => String(element.start) == String(roundDown._d));
        if (result.length <= 0) {
            if (arg.jsEvent.target.classList.contains('fc-nonbusiness') ||
                arg.jsEvent.target.classList.contains('busy-time')
            ) {
                alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
            } else {
                if (professorContext.lessonsLeft > 0) {
                    if (confirm('Would you like to add an event to ' + roundDown._d + ' ?')) {
                        professorContext.addClass()

                        professorContext.addCalendarEvent({
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
                            professorContext.addLessonsLeft(result)
                    }
                }
            }
        }
    }
    function handleEventClick(args) {
        if (confirm('¿Are you sure you want remove this event?')) {
            let newEventsArray = professorContext.calendarEvents.filter(event => {
                return event.start.toString() !== args.event.start.toString()
            })
            professorContext.setCalendarEvents(newEventsArray)
            professorContext.removeClass()
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
        <ProfessorsProfileContext.Consumer>
            {professorContext => (
                <div className="professors-calendar shadow w-100 p-4 rounded mb-3 overflow-hidden">
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
                            maxTime="23:00:00"
                            contentHeight="auto"
                            ref={calendarComponentRef}
                            businessHours={businessHours.businessHours}
                            eventLimit={true}
                            events={professorContext.calendarEvents}
                            dateClick={handleDateClick}
                            eventClick={handleEventClick}
                            eventDrop={handleEventDrop}
                            displayEventTime={false}
                        />
                    </div>
                </div>
            )}
        </ProfessorsProfileContext.Consumer>
    );
}

export default ProfessorsCalendar;
