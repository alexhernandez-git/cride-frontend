import React, { useState, useRef, useEffect, useContext, useCallback } from 'react';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"
import { IconContext } from "react-icons";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import ClassDetailsForm from "src/components/Users/Teachers/TeachersProfile/ClassDetailsForm"
import moment from 'moment'
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function ScheduleHour() {
    const teacherContext = useContext(TeachersProfileContext);
    const calendarComponentRef = useRef(null)
    const [args, setArgs] = useState()

    const [calendarView, setCalendarView] = useState(null)
    // recoje la fecha del evento que queremos crear

    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {

                let title = eventEl.innerHTML
                let id = eventEl.getAttribute("data");
                return {
                    title: title,
                    id: id,
                    constraint: 'businessHours',
                    color: '#3f8989'
                };
            }
        });
    }, [])
    function handleDateClick(args) {
        // Miramos que no haya ninguna hora parecida en el array de eventos
        let result = false;


        teacherContext.businessHours.forEach((hours) => {
            let day = moment(args.date).isoWeekday();

            if (day == 7) {
                day = 0
            }
            if (hours.daysOfWeek[0] == day) {
                const formatTimeStart = moment(args.date).format("HH:mm");
                const formatTimeEnd = moment(args.date).add(30, 'minutes').format("HH:mm");

                if (formatTimeEnd == hours.endTime || formatTimeEnd > hours.endTime) {
                    result = true;
                }
                if (formatTimeStart < hours.startTime) {
                    result = true;
                }
            }
        })
        const index = teacherContext.temporaryClassState.findIndex(event => String(event.start) == String(args.date) || String(moment(event.start)) == String(moment(args.date).subtract(30, 'minutes')));
        const index2 = teacherContext.myPendingClassState.findIndex(event => String(event.start) == String(args.date) || String(moment(event.start)) == String(moment(args.date).subtract(30, 'minutes')));
        const index3 = teacherContext.myPendingClassState.findIndex(event => String(event.start) == String(args.date) || String(moment(event.start)) == String(moment(args.date).add(30, 'minutes')));
        const index4 = teacherContext.temporaryClassState.findIndex(event => String(event.start) == String(args.date) || String(moment(event.start)) == String(moment(args.date).add(30, 'minutes')));

        if (!moment().isAfter(args.date) > 0) {
            if (!~index && !~index2 && !~index3 && !~index4) {
                if (result) {
                    alert('Esta hora no esta disponible, habla con el profesor para mas informacion')
                } else {

                    if (teacherContext.classesAssignedLeft.length > 0) {


                        setArgs(() => (args))
                        teacherContext.setIsEdit(() => false)
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
    const handleDropedEvent = (args) => {


        setArgs(args)
        teacherContext.handleShowDetailsClassForm()
        // }

        args.event.remove()


    }

    const handleEventClick = (args) => {
        if (args.event.source.id == 0) {
            console.log(args);

            teacherContext.setIsEdit(true)
            setArgs(args)

            teacherContext.handleShowDetailsClassForm()
        } else {
            alert('No es posible editar este evento')
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
                <div className="teacher-calendar w-100 rounded">
                    <div className={teacherContext.showDetailsClassForm ? 'd-none' : 'd-block'}>
                        <div className="d-sm-flex justify-content-between align-items-center my-4">
                            <button
                                className="btn-outline-cancel bg-white rounded-pill mr-2 pr-3 pl-2 btn-sm-block"
                                style={{
                                    height: '40px'
                                }}
                                onClick={teacherContext.handlePrevious}
                            >
                                <IconContext.Provider value={{
                                    className: "cursor-ponter",
                                    size: '25px'
                                }}>
                                    <IoIosArrowBack /> Atras
                            </IconContext.Provider>

                            </button>
                            <button
                                className="btn-green text-white rounded-pill mr-2 pr-2 pl-3 shadow btn-sm-block"
                                style={{
                                    height: '40px'
                                }}
                                onClick={teacherContext.handleNext}
                            >
                                <IconContext.Provider value={{
                                    className: " text-white cursor-ponter",
                                    size: '25px'
                                }}>
                                    Siguiente <IoIosArrowForward />
                                </IconContext.Provider>

                            </button>

                        </div>
                        <div className="mb-2 w-100 border-bottom rounded p-2 text-grey text-center">

                            <small className="">Este paso es 100% opcional, podras asignar las clases cuando quieras</small>

                        </div>

                        <div className='demo-app-calendar'>
                            {console.log(moment().day())}
                            <FullCalendar
                                view={calendarView}
                                defaultView={calendarView}
                                start={moment().day() + 8}
                                plugins={[timeGridPlugin, interactionPlugin, bootstrapPlugin]}

                                firstDay={moment().day() + 8}
                                weekends={true}
                                themeSystem='bootstrap'
                                timeZone='local'
                                locales={allLocales}
                                locale='es'
                                allDaySlot={false}
                                slotDuration='00:30:00'
                                // slotLabelInterval='00:30:00'
                                slotLabelFormat={{
                                    hour: "numeric",
                                    minute: "2-digit",
                                    omitZeroMinute: false,
                                    hour12: false,
                                    meridiem: "short"
                                }}
                                minTime="06:00:00"
                                maxTime="24:00:00"
                                contentHeight="auto"
                                droppable={true}
                                editable={false}
                                eventDurationEditable={false}
                                ref={calendarComponentRef}
                                businessHours={teacherContext.businessHours}
                                eventLimit={true}
                                eventSources={[
                                    {
                                        id: 0,
                                        events: teacherContext.temporaryClassState,
                                        color: '#3f8989'
                                    },
                                    {
                                        id: 1,
                                        events: teacherContext.myPendingClassState,
                                        color: 'grey',
                                        editable: false,
                                    },
                                ]

                                }
                                eventOverlap={false}
                                dateClick={handleDateClick}
                                eventClick={handleEventClick}
                                displayEventTime={false}
                                eventResourceEditable={true}
                                selectAllow={function (selectInfo) {
                                    return moment().diff(selectInfo.start) <= 0
                                }}
                                drop={handleDropedEvent}
                            />
                        </div>
                        <div className="classes-to-assign mt-2 bg-gradient-green shadow p-2 text-white text-center cursor-pointer rounded">
                            Clases por asignar <span className="font-weight-bold">{teacherContext.classesAssignedLeft.length}</span>
                        </div>
                    </div>
                    <div className={teacherContext.showDetailsClassForm ? 'd-block' : 'd-none'}>
                        <ClassDetailsForm args={args} teacherProfile={false} calendar={calendarComponentRef} />
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer>
    )
}
