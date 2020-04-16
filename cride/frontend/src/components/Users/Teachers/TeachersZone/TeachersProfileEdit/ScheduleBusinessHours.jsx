import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import { AppContext } from "src/context/AppContext"
import { Modal, Button } from 'react-bootstrap'
import moment from 'moment'
import momenttz from 'moment-timezone'
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function ScheduleBuisnessHours() {
    const appContext = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(null)
    const [saved, setSaved] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const calendarComponentRef = useRef(null)
    const businessHoursReducer = (state, action) => {
        switch (action.type) {
            case 'SET_BUSINESS_HOURS':
                return [...action.payload]
            case 'ADD_BUSINESS_HOUR':
                return [...state, action.payload]
            case 'UPDATE_BUSINESS_HOUR':
                const indexClasses = state.findIndex(event => event.id === action.payload.id);

                state[indexClasses].start = action.payload.start
                state[indexClasses].end = action.payload.end

                return state
            case 'DELETE_BUSINESS_HOUR':
                const newArray = state.filter(event => event.id !== action.payload);
                console.log(newArray);

                return newArray
            default:
                return state;
        }
    }
    useEffect(() => {
        if (!appContext.userProfile.loading) {
            console.log(appContext.userProfile.user.teacher.businessHours)

            dispatchBuisnessHours({ type: "SET_BUSINESS_HOURS", payload: appContext.userProfile.user.teacher.businessHours })
        }

    }, [appContext.userProfile.loading]);
    useEffect(() => {
        console.log(businessHours)
    });
    const [businessHours, dispatchBuisnessHours] = useReducer(businessHoursReducer, []);


    const handleDateClick = (arg) => {

        setSaved(false)
        dispatchBuisnessHours({
            type: 'ADD_BUSINESS_HOUR', payload: {
                id: Math.random().toString(36).substr(2),
                title: '',
                start: arg.date,
                end: null,
                day: moment(arg.date).day()
            }
        })


    }
    const handleEventResize = (arg) => {

        setSaved(false)
        dispatchBuisnessHours({
            type: 'UPDATE_BUSINESS_HOUR', payload: {
                id: arg.event.id,
                title: '',
                start: arg.event.start,
                end: arg.event.end,
                daysOfWeek: moment(arg.event.start).day()

            }
        })
    }
    const handleEventDrop = (arg) => {

        setSaved(false)
        dispatchBuisnessHours({
            type: 'UPDATE_BUSINESS_HOUR', payload: {
                id: arg.event.id,
                title: '',
                start: arg.event.start,
                end: arg.event.end,
                daysOfWeek: moment(arg.event.start).day()
            }
        })
    }

    const handleEventClick = (arg) => {
        setId(arg.event.id)
        handleShow()

    }
    const handleDelete = () => {
        setSaved(false)
        dispatchBuisnessHours({
            type: 'DELETE_BUSINESS_HOUR', payload: id
        })
        handleClose()
    }
    const handleSave = () => {
        appContext.updateBusinessHours(businessHours)
        setSaved(true)
    }

    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <>
                    <div className='demo-app-calendar bg-white shadow p-3 rounded'>
                        <div className="d-md-flex justify-content-between">
                            <span className="d-none d-md-block">Selecciona tus horas disponibles</span>
                            {saved ?
                                <button
                                    className="btn btn-green-disabled text-white d-none d-sm-block rounded-pill mr-2"
                                >Guardar</button>
                                :
                                <button
                                    className="btn btn-green text-white d-none d-sm-block rounded-pill mr-2"
                                    onClick={handleSave}
                                >Guardar</button>
                            }

                        </div>
                        <FullCalendar
                            view={'timeGridWeek'}
                            defaultView={'timeGridWeek'}
                            plugins={[timeGridPlugin, interactionPlugin, bootstrapPlugin]}
                            header={{
                                left: '',
                                center: '',
                                right: ''
                            }}
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
                            eventSources={[{
                                events: businessHours,

                            }]}
                            eventConstraint="businessHours"
                            droppable={true}
                            longPressDelay={0}
                            businessHours={
                                {
                                    startTime: "06:00:00",
                                    endTime: "24:00:00",
                                    daysOfWeek: [0, 1, 2, 3, 4, 5, 6]
                                }
                            }
                            editable={true}
                            eventDurationEditable={true}
                            ref={calendarComponentRef}
                            eventLimit={true}
                            columnHeaderFormat={{ weekday: 'long' }}
                            eventOverlap={false}
                            eventResizableFromStart={false}
                            dateClick={handleDateClick}
                            eventResize={handleEventResize}
                            eventDrop={handleEventDrop}
                            eventClick={handleEventClick}
                            displayEventTime={false}
                            eventResourceEditable={true}
                            selectAllow={function (selectInfo) {
                                return moment().diff(selectInfo.start) <= 0
                            }}

                        />
                    </div>

                    <Modal show={show} onHide={handleClose} centered size={"sm"}>
                        <Modal.Header className="border-0 pb-0 d-flex justify-content-center">
                            <span className="h5 text-center text-grey">¿Quieres descartar estas horas?</span>
                        </Modal.Header>
                        <Modal.Footer className="border-0 d-flex justify-content-center">
                            <Button variant="secondary" onClick={handleClose}>
                                Volver
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Descartar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )
            }
        </TeachersProfileContext.Consumer >
    )
}
