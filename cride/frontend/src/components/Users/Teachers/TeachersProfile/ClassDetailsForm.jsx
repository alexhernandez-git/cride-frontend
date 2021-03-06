import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaUserGraduate, FaSave, FaChalkboardTeacher } from "react-icons/fa";
import { MdAddCircleOutline, MdTimer, MdCancel } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import ClassStudents from "src/components/Users/Teachers/TeachersProfile/ClassStudents"
import { AppContext } from "src/context/AppContext"
import moment from 'moment'
const ClassDetailsForm = (props) => {
    const MySwal = withReactContent(Swal)
    const teacherContext = useContext(TeachersProfileContext);
    const appContext = useContext(AppContext);
    const [isAdmin, setIsAdmin] = useState(false)
    const myRef = useRef(null)

    useEffect(() => {
        const el = document.querySelector('.teacher-calendar');
        el.scrollIntoView(true)

        // if (adminStudents.map((student) => student.id == appContext.userProfile.user.id)) {

        // }
    }, [])
    const [classData, setClassData] = useState({
        id: Math.random().toString(36).substr(2),
        title: 'Clase',
        start: null,
        constraint: 'businessHours',
        description: '',
        students: [],
        invitations: [],
        accepted: null,
    })

    useEffect(() => {
        console.log('props.args', props.args);
        console.log('teacherContext.isEdit', teacherContext.isEdit);

        if (props.args) {

            if (teacherContext.isEdit) {
                setClassData(() => ({
                    id: props.args.event.id,
                    title: 'Clase',
                    start: props.args.event.start,
                    constraint: 'businessHours',
                    description: props.args.event.extendedProps.description,
                    accepted: props.args.event.extendedProps.accepted,
                    owner: props.args.event.extendedProps.owner,
                    students: props.args.event.extendedProps.students,
                    invitations: props.args.event.extendedProps.invitations
                }))
                let adminStudents = props.args.event.extendedProps.students.filter((student) => student.isAdmin == true)
                const result = adminStudents.filter((student) => student.user.id == appContext.userProfile.user.id)

                if (result.length > 0) {
                    setIsAdmin(true)
                }
            } else if (teacherContext.isMyClass) {
                setClassData(() => ({
                    id: props.args.event.id,
                    title: props.args.event.title,
                    start: props.args.event.start,
                    constraint: 'businessHours',
                    description: props.args.event.extendedProps.description,
                    accepted: props.args.event.extendedProps.accepted,
                    owner: props.args.event.extendedProps.owner,
                    students: props.args.event.extendedProps.students,
                    invitations: props.args.event.extendedProps.invitations
                }))
                let adminStudents = props.args.event.extendedProps.students.filter((student) => student.isAdmin == true)
                const result = adminStudents.filter((student) => student.user.id == appContext.userProfile.user.id)

                if (result.length > 0) {
                    setIsAdmin(true)
                }
            } else if (teacherContext.onlyShow) {
                setClassData(() => ({
                    id: props.args.event.id,
                    title: props.args.event.title,
                    start: props.args.event.start,
                    constraint: 'businessHours',
                    description: props.args.event.extendedProps.description,
                    accepted: props.args.event.extendedProps.accepted,
                    owner: props.args.event.extendedProps.owner,
                    students: props.args.event.extendedProps.students,
                    invitations: props.args.event.extendedProps.invitations

                }))
            }
            else {

                setIsAdmin(true)
                setClassData(() => ({
                    id: Math.random().toString(36).substr(2),
                    title: 'Clase',
                    start: props.args.date,
                    constraint: 'businessHours',
                    description: '',
                    owner: {
                        id: appContext.userProfile.user.id,
                        name: appContext.userProfile.user.name,
                        surname: appContext.userProfile.user.surname,
                        name: appContext.userProfile.user.name,
                    },
                    accepted: false,
                    students: [{
                        user: {
                            id: appContext.userProfile.user.id,
                            name: appContext.userProfile.user.name,
                            surname: appContext.userProfile.user.surname,
                            name: appContext.userProfile.user.name,
                        },
                        isAdmin: true,
                    }],
                    invitations: []
                }))
            }

        }

    }, [props.args])

    const [calendarView, setCalendarView] = useState(null)

    const addClass = () => {

        if (props.profile) {
            teacherContext.addClass(classData)

        } else {

            teacherContext.addTemporaryClassEvent(classData)


        }

        teacherContext.handleHideDetailsClassForm()
        setClassData({
            id: '',
            title: 'Clase',
            start: null,
            description: ''
        })
    }
    const deleteClass = () => {
        if (props.profile) {

            MySwal.fire({
                title: 'Estas seguro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {

                    teacherContext.removeClass(classData)

                    props.args.event.remove()
                    // let event = props.calendar.current.getResourceById(classData.id);
                    // event.remove()
                    setClassData({
                        id: '',
                        title: 'Clase',
                        start: null,
                        description: '',
                        accepted: null,
                        students: []
                    })
                    return Swal.fire({
                        icon: 'success',
                        title: 'Eliminado',
                    })

                }
            })


        } else {
            MySwal.fire({
                title: 'Estas seguro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {

                    teacherContext.removeTemporaryClassEvent(classData)
                    props.args.event.remove()
                    // let event = props.calendar.current.getResourceById(classData.id);
                    // event.remove()
                    setClassData({
                        id: '',
                        title: 'Clase',
                        start: null,
                        description: '',
                        accepted: null,
                        students: []
                    })
                    return Swal.fire({
                        icon: 'success',
                        title: 'Eliminado',
                    })

                }
            })
        }
    }
    const updateClass = () => {

        if (props.profile) {

            teacherContext.updateClass(classData)
        } else {
            teacherContext.updateTemporaryClassEvent(classData)

        }


        props.args.event.setExtendedProp('description', classData.description)

        setClassData({
            id: '',
            title: 'Clase',
            start: null,
            description: '',
            accepted: null,
            students: []
        })

    }
    useEffect(() => {
        return () => {
            setClassData({
                id: '',
                title: 'Clase',
                start: null,
                description: '',
                accepted: null,
                students: []
            })
            setIsAdmin(false)
            teacherContext.setIsEdit(false)
            teacherContext.setOnlyShow(false)
        }
    }, []);

    moment.locale('es')
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="text-grey">
                    <div
                        className="mb-2 w-100 border-bottom rounded pb-2 text-grey text-center"
                        ref={myRef}
                        id="class-details-form"
                    >
                        {teacherContext.onlyShow && !teacherContext.isEdit ?
                            <>
                                Detalles de la clase
                           </>
                            :
                            <>
                                Antes de añadir tu clase comprueba los datos
                            </>
                        }
                    </div>
                    <div className="d-lg-flex justify-content-between align-items-center mt-3 mb-4">

                        <button
                            className="btn-outline-cancel bg-white rounded-pill mr-2 pr-3 pl-2 btn-md-block"
                            style={{
                                height: '40px'
                            }}
                            onClick={teacherContext.handleHideDetailsClassForm}
                        >
                            <IconContext.Provider value={{
                                className: "cursor-ponter",
                                size: '25px'
                            }}>
                                <IoIosArrowBack /> Volver al calendario
                            </IconContext.Provider>

                        </button>

                        {!teacherContext.onlyShow && isAdmin ?
                            <>

                                {teacherContext.isEdit || teacherContext.isMyClass ?

                                    <div className="d-sm-flex justify-content-between align-items-cente  btn-md-block">


                                        <button
                                            className="btn-outline-cancel bg-white rounded-pill mr-2 pl-2 pr-3 btn-md-block"
                                            style={{
                                                height: '40px'
                                            }}
                                            onClick={deleteClass}>
                                            <IconContext.Provider value={{
                                                className: "cursor-ponter",
                                                size: '25px'
                                            }}>
                                                <MdCancel /> Cancelar clase
                                  </IconContext.Provider>

                                        </button>



                                        <button
                                            className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                            style={{
                                                height: '40px'
                                            }}

                                            onClick={updateClass}>

                                            <IconContext.Provider value={{
                                                className: " text-white cursor-ponter",
                                                size: '25px'
                                            }}>
                                                <FaSave />  Guardar
                                        </IconContext.Provider>

                                        </button>

                                    </div>

                                    :
                                    <>
                                        {teacherContext.isMyClass ?
                                            <button
                                                className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                                style={{
                                                    height: '40px'
                                                }}

                                                onClick={updateClass}>

                                                <IconContext.Provider value={{
                                                    className: " text-white cursor-ponter",
                                                    size: '25px'
                                                }}>
                                                    <FaSave />  Guardar
                                    </IconContext.Provider>

                                            </button>

                                            :

                                            < button
                                                className="btn-green text-white rounded-pill mr-2 px-3 shadow btn-md-block"
                                                style={{
                                                    height: '40px'
                                                }}
                                                onClick={addClass}>
                                                <IconContext.Provider value={{
                                                    className: " text-white cursor-ponter",
                                                    size: '25px'
                                                }}>
                                                    <MdAddCircleOutline /> Añadir clase
                                                   </IconContext.Provider>

                                            </button>
                                        }
                                    </>
                                }
                            </>
                            :
                            ''
                        }

                    </div>
                    <span className="h5">Detalles de la clase</span>

                    <div className="mt-3 mb-4">
                        <Row className="mb-2">
                            <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaRegCalendarAlt /> Fecha:
                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">

                                {moment(classData.start).format('LLL')}
                            </Col>

                        </Row>


                        <Row className="mb-2">
                            <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaUserGraduate /> Num. alumnos:
                                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">
                                1
                </Col>

                        </Row>

                        <Row className="mb-2">
                            <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                <span className="font-weight-normal text-primary">
                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <MdTimer /> Duración de la clase:
                                    </IconContext.Provider>

                                </span>{' '}
                            </Col>
                            <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">
                                1 hora
                </Col>

                        </Row>

                        {teacherContext.onlyShow || !isAdmin ?
                            <>
                                <Row className="mb-2">
                                    <Col sm={5} xl={4} className="d-flex justify-content-center d-sm-inline">
                                        <span className="font-weight-normal text-primary">
                                            <IconContext.Provider value={{
                                                className: "mr-2 text-primary cursor-ponter",
                                                size: '20px'
                                            }}>
                                                <FaChalkboardTeacher /> Temas a tocar:
                                    </IconContext.Provider>

                                        </span>{' '}
                                    </Col>
                                    <Col sm={7} lg={6} className="d-flex justify-content-center d-sm-inline">
                                        {classData.description}
                                    </Col>

                                </Row>
                            </>
                            :
                            <>

                                <span className="h5">Que quieres aprender en esta clase</span>

                                <div className="mt-3 mb-4">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="3" placeholder='' value={classData.description} onChange={(e) => setClassData({ ...classData, description: e.target.value })} />
                                        <small>
                                            Al poner tus objetivos en esta clase conseguiras lo siguiente:
                                <ol>
                                                <li>Que el profesor obtenga información de tu clase y pueda ofrecerte un mejor servicio</li>
                                                <li>Que otros alumnos que tengan tus mismos intereses te pidan una invitación a esa clase y asi ganar dinero</li>
                                            </ol>

                                        </small>
                                    </Form.Group>

                                </div>
                            </>
                        }
                    </div>
                    <Row>
                        <Col sm={12}>
                            <ClassStudents isAdmin={isAdmin} classData={classData} />
                        </Col>

                    </Row>

                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default ClassDetailsForm;
