import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"

import moment from 'moment'
const CalendarClass = () => {
    const calendarComponentRef = useRef(null)


    const [calendarView, setCalendarView] = useState(null)

    function getSize() {
        return {
            width: window.innerWidth
        };
    }

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
    return (

        <div className="teacher-calendar shadow w-100 pt-4 pl-4 pr-4 pb-3 rounded mb-3 overflow-hidden">
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

                    ref={calendarComponentRef}
                    eventLimit={true}

                    displayEventTime={false}
                    selectAllow={function (selectInfo) {
                        return moment().diff(selectInfo.start) <= 0
                    }}
                />
            </div>

        </div>

    );
}

export default CalendarClass;
