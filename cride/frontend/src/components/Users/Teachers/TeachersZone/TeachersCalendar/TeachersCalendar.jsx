import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import dayGridPlugin from '@fullcalendar/daygrid'
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import { AppContext } from "src/context/AppContext"
import { Modal, Button } from 'react-bootstrap'
import moment from 'moment'
import momenttz from 'moment-timezone'
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function TeacherCalendar() {
    const MySwal = withReactContent(Swal)
    const appContext = useContext(AppContext);
    const [id, setId] = useState(null)
    const [saved, setSaved] = useState(true)
    const calendarComponentRef = useRef(null)
    const [calendarView, setCalendarView] = useState(null)
    const [businessHours, setBusinessHours] = useState(null);





    useEffect(() => {
        if (!appContext.userProfile.loading) {
            const businessHoursArray = appContext.userProfile.user.teacher.businessHours
            const hours = new Array(businessHoursArray.length)
            console.log(hours);

            for (let i = 0; i < businessHoursArray.length; i++) {
                hours[i] = {
                    daysOfWeek: [businessHoursArray[i].day],
                    startTime: moment(businessHoursArray[i].start, "HH:mm").format("HH:mm").toString(),
                    endTime: moment(businessHoursArray[i].end, "HH:mm").format("HH:mm").toString()
                }
            }
            if (hours.length == 0) {
                setBusinessHours([{
                    startTime: "06:00:00",
                    endTime: "24:00:00",
                    daysOfWeek: [0, 1, 2, 3, 4, 5, 6]
                }])
            } else {
                setBusinessHours(hours)
            }
            console.log(hours);

        }
    }, [appContext.userProfile.loading]);
    function getSize() {
        return {
            width: window.innerWidth
        };
    }
    function getSize() {
        return {
            width: window.innerWidth
        };
    }

    useEffect(() => {
        if (!appContext.userProfile.loading) {

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
        }
    }, [appContext.userProfile.loading]); // Empty array ensures that effect is only run on mount and unmount
    return appContext.userProfile.loading ? 'Cargando...' : (
        <AppContext.Consumer>
            {appContext => (
                <>
                    <div className="container teachers-profile-edit pt-5 text-grey">

                        <div className="d-sm-flex justify-content-start">
                            <div>
                                <span className="h3 d-block mb-0 text-dark">Tus clases</span>
                                <span>Gestiona las clases de tus alumnos</span>

                            </div>
                        </div>
                        <div className='demo-app-calendar bg-white shadow p-3 rounded mt-4'>

                            <FullCalendar
                                view={'dayGridMonth'}
                                defaultView={'dayGridMonth'}
                                header={{
                                    right: "today prev,next",
                                    center: "title",
                                    left: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                                }}
                                start={moment().day() + 8}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin]}


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
                                editable={false}
                                contentHeight="auto"
                                businessHours={businessHours}
                                eventSources={[
                                    {
                                        id: 0,
                                        // events: teacherContext.teacherState.teacher.myPendingClasses,
                                        events: appContext.userProfile.user.teacher.classes.filter((classEvent) => {
                                            classEvent.title = 'Clase'
                                            if (classEvent.students.some(student => student.id == appContext.userProfile.user.id)) {
                                                return classEvent.accepted == false
                                            }
                                            return false
                                        }),
                                        color: '#e5c07b',
                                        editable: false,
                                    },
                                    {
                                        id: 2,
                                        // events: teacherContext.teacherState.teacher.myAcceptedClasses,
                                        events: appContext.userProfile.user.teacher.classes.filter((classEvent) => {
                                            classEvent.title = 'Clase'
                                            if (classEvent.students.some(student => student.id == appContext.userProfile.user.id)) {
                                                return classEvent.accepted == true
                                            }
                                            return false
                                        }),
                                        color: '#56b389',
                                        editable: false,

                                    },
                                    {
                                        id: 3,
                                        // events: teacherContext.teacherState.teacher.reservedClasses,
                                        events: appContext.userProfile.user.teacher.classes.filter((classEvent) => {
                                            classEvent.title = 'Clase'
                                            return classEvent.students.some(student => student.id != appContext.userProfile.user.id)
                                        }),
                                        color: 'grey',
                                        editable: false,

                                    },
                                ]}
                                // eventSources={[{
                                //     events: businessHours,

                                // }]}
                                eventConstraint="businessHours"
                                droppable={true}
                                longPressDelay={0}

                                eventDurationEditable={true}
                                ref={calendarComponentRef}
                                eventLimit={true}
                                columnHeaderFormat={{ weekday: 'long' }}
                                eventOverlap={false}
                                eventResizableFromStart={false}
                                // dateClick={handleDateClick}
                                // eventResize={handleEventResize}
                                // eventDrop={handleEventDrop}
                                // eventClick={handleEventClick}
                                displayEventTime={false}
                                eventResourceEditable={true}
                                selectAllow={function (selectInfo) {
                                    return moment().diff(selectInfo.start) <= 0
                                }}

                            />
                        </div>
                    </div>


                </>
            )
            }
        </AppContext.Consumer >
    )
}
