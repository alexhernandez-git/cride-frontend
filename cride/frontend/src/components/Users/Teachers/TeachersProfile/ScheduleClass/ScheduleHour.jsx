import React, { useState, useRef, useEffect, useContext, useCallback } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import ClassDetailsForm from "src/components/Users/Teachers/TeachersProfile/ClassDetailsForm"
import moment from 'moment'
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function ScheduleHour() {
    const teacherContext = useContext(TeachersProfileContext);
    const calendarComponentRef = useRef(null)
    const [startDate, setStartDate] = useState()

    const [calendarView, setCalendarView] = useState(null)
    // recoje la fecha del evento que queremos crear

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

                        setStartDate(roundDown._d)
                        teacherContext.handleShowDetailsClassForm()


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
                <div className="teacher-calendar w-100 rounded">

                    <div className="mb-2 w-100 border-bottom rounded p-2 text-grey text-center">
                        Este paso es 100% opcional, podras asignar las clases cuando quieras
                    </div>
                    <div className={teacherContext.showDetailsClassForm ? 'd-none' : 'd-block'}>

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
                    <ClassDetailsForm startDate={startDate} />
                </div>
            )}
        </TeachersProfileContext.Consumer>
    )
}
