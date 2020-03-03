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
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            setCalendarEvents({  // add new event data
                calendarEvents: calendarEvents.calendarEvents.concat({ // creates a new array
                    title: 'Reservado',
                    start: arg.date,
                    allDay: arg.allDay
                })
            })
        }
        console.log(calendarEvents.calendarEvents);
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
                    minTime="07:00:00"
                    maxTime="21:00:00"
                    contentHeight="auto"
                    ref={calendarComponentRef}
                    events={calendarEvents.calendarEvents}
                    dateClick={handleDateClick}
                    businessHours={businessHours.businessHours}
                />
            </div>
        </div>
    );
}

export default ProfessorsCalendar;
