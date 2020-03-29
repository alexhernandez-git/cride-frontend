import React, { useState, useRef, useEffect, useContext } from 'react';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"
import { IconContext } from "react-icons";
import {
    FaRegQuestionCircle
} from 'react-icons/fa';
import { Row, Col, Modal } from 'react-bootstrap'
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import ClassDetailsForm from "src/components/Users/Teachers/TeachersProfile/ClassDetailsForm"
import moment from 'moment'
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function ScheduleHour(props) {
    const teacherContext = useContext(TeachersProfileContext);
    const calendarComponentRef = useRef(null)
    const [args, setArgs] = useState()

    const [calendarView, setCalendarView] = useState(null)
    // recoje la fecha del evento que queremos crear

    useEffect(() => {
        if (props.profile) {
            let draggableEl = document.getElementById("external-profile-events");
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

        } else {
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
        }
    }, [])
    const handleDateClick = () => {
        if (props.profile) {
            teacherContext.handleShow()
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
            console.log(args.event);


            teacherContext.setIsEdit(true)
            setArgs(args)

            teacherContext.handleShowDetailsClassForm()
        } else if (args.event.source.id == 2 && props.profile) {
            console.log(args);

            setArgs(args)
            teacherContext.setIsMyClass(true)

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
    const [invitationPriceState, setInvitationPriceState] = useState(false)
    const handleClickInvitationEarning = () => {
        if (invitationPriceState) {
            setInvitationPriceState(() => false)
        } else {
            setInvitationPriceState(() => true)
        }
    }
    const invitationText = useRef()
    const handleWindowClick = (e) => {
        console.log('entra');

        if (e.target != invitationText.current) {
            setInvitationPriceState(false)
        }
    }

    useEffect(() => {
        const handleClick = (e) => {

            if (invitationPriceState) {
                handleWindowClick(e)
            }
        }
        window.addEventListener("mousedown", handleClick);

        return () => {
            window.removeEventListener("mousedown", handleClick);
        };
    })
    const handleClickHideModal = () => {
        console.log('key: ', teacherContext.key);

        if (teacherContext.key > 0) {
            if (confirm('¿Estas seguro? Si sales al perfil del profesor los cambios se perderan'))
                teacherContext.handleClose()
        } else {
            teacherContext.handleClose()

        }

    }
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className={props.profile ? "teacher-calendar w-100 shadow w-100 p-4 rounded mb-3" : "teacher-calendar w-100"}>
                    <div className={teacherContext.showDetailsClassForm ? 'd-none' : 'd-block'}>
                        {!props.profile ?
                            <>
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
                            </>
                            :
                            <span className="d-block h3 font-weight-normal text-primary">Calendario</span>
                        }
                        <div
                            id='external-profile-events'
                            className="text-center draggable-events"
                        >
                            {teacherContext.teacherProfile.teacher.eventClassesLeft.length > 0 && !teacherContext.showScheduleClass ?
                                <>



                                    <div className="py-2 d-none d-lg-block"></div>
                                    <div className="pt-3 d-block d-lg-none"></div>
                                    {teacherContext.teacherProfile.teacher.eventClassesLeft.length > 0 ?
                                        <span className="text-center h5 mb-0 font-weight-light">Arrastra tus clases</span>
                                        :
                                        ''
                                    }
                                    <Row>
                                        {teacherContext.teacherProfile.teacher.eventClassesLeft.map(() => (
                                            teacherContext.teacherProfile.teacher.eventClassesLeft.length == 1 ?
                                                < Col >
                                                    <div className="fc-event text-center">Clase</div>
                                                </Col>
                                                :
                                                < Col lg={6} >
                                                    <div className="fc-event text-center">Clase</div>
                                                </Col>
                                        ))}
                                    </Row>
                                </>
                                :
                                ''
                            }
                        </div>
                        <div className='demo-app-calendar'>

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
                                longPressDelay={0}
                                editable={false}
                                eventDurationEditable={false}
                                ref={calendarComponentRef}
                                businessHours={teacherContext.businessHours}
                                eventLimit={true}
                                eventSources={
                                    props.profile ?

                                        [
                                            {
                                                id: 0,
                                                events: teacherContext.teacherProfile.teacher.myPendingClasses,
                                                color: '#e5c07b',
                                                editable: false,
                                            },
                                            {
                                                id: 2,
                                                events: teacherContext.teacherProfile.teacher.myAcceptedClasses,
                                                color: '#56b389',
                                                editable: false,

                                            },
                                            {
                                                id: 3,
                                                events: teacherContext.teacherProfile.teacher.reservedClasses,
                                                color: 'grey',
                                                editable: false,

                                            },
                                        ]
                                        :

                                        [
                                            {
                                                id: 0,
                                                events: teacherContext.temporaryClasses,
                                                color: '#3f8989'
                                            },
                                            {
                                                id: 1,
                                                events: teacherContext.teacherProfile.teacher.myPendingClasses,
                                                color: 'grey',
                                                editable: false,
                                            },
                                            {
                                                id: 2,
                                                events: teacherContext.teacherProfile.teacher.myAcceptedClasses,
                                                color: 'grey',
                                                editable: false,

                                            },
                                            {
                                                id: 3,
                                                events: teacherContext.teacherProfile.teacher.reservedClasses,
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
                            Clases por asignar
                            <span className="font-weight-bold">{' '}
                                {props.profile ? teacherContext.teacherProfile.teacher.eventClassesLeft.length : teacherContext.classesAssignedLeft.length}
                            </span>
                        </div>
                    </div>
                    {props.profile ?
                        <>

                            <Modal
                                show={teacherContext.showDetailsClassForm}
                                size="xl"
                                backdrop='false'
                            >
                                <Modal.Header className="d-block border-0">

                                    <div
                                        className="invitation-earning overflow-hidden w-100 bg-gradient-green shadow rounded p-2 text-white text-center cursor-pointer"
                                        onClick={handleClickInvitationEarning}
                                    >
                                        {invitationPriceState ?
                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name cursor-pointer float-right font-weight-light",
                                                    size: '20px'
                                                }}
                                            >
                                                <IoMdClose />

                                            </IconContext.Provider> :
                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name cursor-pointer float-right font-weight-light",
                                                    size: '20px'
                                                }}
                                            >
                                                <FaRegQuestionCircle />

                                            </IconContext.Provider>

                                        }

                                        <span className={invitationPriceState ? "d-block" : "d-block"}>Por cada compañero que invites a la clase obtendrás <span className="font-weight-bold">{Math.round(teacherContext.teacherProfile.teacher.classPrice * 0.2)}€</span></span>

                                    </div>
                                    <div
                                        className={invitationPriceState ? "d-block text-center p-2 shadow rounded-bottom text-grey position-absolute bg-white" : "d-none"}
                                        style={{ width: '85%', zIndex: '1000', left: '0', right: '0', margin: '0 auto' }}
                                    >
                                        <span className="d-block" ref={invitationText}>
                                            Al compañero que invites le va a costar la classe exactamente{' '}
                                            <span className="font-weight-bold">{Math.round(teacherContext.classPrice - teacherContext.classPrice * 0.2)}€</span><br />
                                                        que es un <span className="font-weight-bold">20% menos</span> del coste inicial de la clase,<br /> y tu vas a ganar{' '}
                                            <span className="font-weight-bold">{Math.round(teacherContext.classPrice * 0.2)}€</span> por cada invitado que adquiera la clase
                                                        </span>
                                    </div>

                                </Modal.Header>
                                <Modal.Body className="pt-3 border-0 rounded bg-white">
                                    <div >
                                        <div className="d-flex justify-content-end">

                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name cursor-pointer",
                                                    size: '20px'
                                                }}
                                            >
                                                <div onClick={handleClickHideModal}>
                                                    <IoMdClose />

                                                </div>
                                            </IconContext.Provider>
                                        </div>

                                        <ClassDetailsForm args={args} profile={props.profile} />
                                    </div>
                                </Modal.Body>
                            </Modal >

                        </>
                        :
                        <>
                            {
                                teacherContext.showDetailsClassForm ?

                                    <ClassDetailsForm args={args} profile={props.profile} />

                                    :
                                    ''
                            }
                        </>

                    }

                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    )
}
