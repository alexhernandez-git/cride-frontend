import React, { useState, useRef, useEffect } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "../../../../static/assets/styles/components/Professors/ProfessorsProfile/ProfessorsCalendar.scss"

import moment from 'moment'
import calendarMoment from '@fullcalendar/moment'
const ProfessorsCalendar = () => {
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
    const [calendarEvents, setCalendarEvents] = useState({
        calendarEvents: []
    })
    const [calendarView, setCalendarView] = useState(null)

    function handleDateClick(arg) {
        let date = moment(arg.date)
        var dateAdd = moment(date).add(30, "minutes")
        var halfHourMore = dateAdd._d

        let result = calendarEvents.calendarEvents.filter(element => {
            return (
                String(element.start) == String(arg.date) ||
                String(element.start) == String(halfHourMore)
            )
        }
        );

        if (result.length <= 0) {
            if (arg.jsEvent.target.classList.contains('fc-nonbusiness') ||
                arg.jsEvent.target.classList.contains('busy-time')
            ) {
                alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
            } else {
                if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
                    setCalendarEvents({  // add new event data
                        calendarEvents: calendarEvents.calendarEvents.concat({ // creates a new array
                            title: 'Reservado',
                            start: arg.date,
                        })
                    })
                }
            }
        }
    }
    function handleEventClick(args) {
        if (confirm('¿Are you sure you want remove this event?')) {
            let newEventsArray = calendarEvents.calendarEvents.filter(event => {
                return event.start.toString() !== args.event.start.toString()
            })
            setCalendarEvents({ calendarEvents: newEventsArray })
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
        console.log(calendarComponentRef);
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
                    slotDuration='00:30:00'
                    minTime="06:00:00"
                    maxTime="23:00:00"
                    contentHeight="auto"
                    ref={calendarComponentRef}
                    businessHours={businessHours.businessHours}
                    eventLimit={true}
                    events={calendarEvents.calendarEvents}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    eventDrop={handleEventDrop}
                    displayEventTime={false}
                />
            </div>
        </div>
    );
}

export default ProfessorsCalendar;
