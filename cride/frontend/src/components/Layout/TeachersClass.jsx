import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher, FaRegHandshake } from "react-icons/fa";
import { MdCancel, MdTimer } from "react-icons/md";
import EnrolledStudents from "src/components/Users/Teachers/TeachersZone/TeachersClasses/EnrolledStudents"
import CalendarClass from "src/components/Layout/CalendarClass"
import { TeachersClassesContext } from "src/context/TeachersZoneContext/TeachersClassesContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment-timezone'
import { AppContext } from 'src/context/AppContext';
const TeachersNextClasses = (props) => {
    const MySwal = withReactContent(Swal)

    const { classElement, type, invitation } = props
    console.log(classElement);

    const classesContext = useContext(TeachersClassesContext);
    const appContext = useContext(AppContext);

    const [showClassModal, setShowClassModal] = useState(false);
    const [pay, setPay] = useState(false);
    const handleCloseClass = () => { setShowClassModal(false); setPay(false) }
    const handleShowClass = () => setShowClassModal(true);
    const handleCancelClass = () => {
        if (type == 0 || type == 2) {

            MySwal.fire({
                title: 'Estas seguro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Cancelar',
                cancelButtonText: 'Volver'
            }).then((result) => {
                if (result.value) {
                    if (type == 0) {
                        classesContext.cancelClass(classElement)
                    } else if (type == 2) {
                        appContext.cancelClass(classElement)
                    }

                    return Swal.fire({
                        icon: 'success',
                        title: 'Clase cancelada',
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
                confirmButtonText: 'Rechazar',
                cancelButtonText: 'Volver'
            }).then((result) => {
                if (result.value) {
                    if (type == 1) {
                        classesContext.discardClass(classElement)
                    } else if (type == 3) {
                        appContext.discardInvitation(invitation)
                    }

                    return Swal.fire({
                        icon: 'success',
                        title: 'Clase rechazada',
                    })
                }
            })
        }
    }
    const handleConfirmClasse = () => {
        if (type == 3) {

            setShowClassModal(true);
            setPay(true)
        } else {

            MySwal.fire({
                title: 'Estas seguro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {

                    classesContext.confirmClass(classElement)

                    return Swal.fire({
                        icon: 'success',
                        title: 'Clase aceptada',
                    })



                }

            })

        }
    }
    const handlePay = () => {
        MySwal.fire({
            icon: 'success',
            title: 'Clase aceptada',
        })
        appContext.acceptInvitation(classElement, invitation)

        handleCloseClass();

    }
    return (
        <TeachersClassesContext.Consumer>
            {classesContext => (
                < div className="teachers-my-classes bg-white shadow p-3 rounded my-2">
                    <div className="d-sm-flex justify-content-between mb-3 px-0">
                        <div className="div-delegate-student d-flex justify-content-between align-items-center">
                            {type == 2 || type == 3 ?
                                <>
                                    <div
                                        className="delegate-img mr-3"
                                        style={{
                                            overflow: 'hidden',
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '50%'
                                        }}>
                                        <img
                                            src={`https://source.unsplash.com/random/1`}
                                            alt=""
                                            style={{
                                                height: '50px',
                                                width: '50px'
                                            }}
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="h5 mb-0">{classElement.teacher.name} {classElement.teacher.surname}</span>
                                        <span className="">{classElement.teacher.email}</span>

                                    </div>
                                </>
                                :
                                ''
                            }



                        </div>
                        <div className="div-buttons-next-classes d-flex justify-content-between align-items-center">
                            {type == 0 || type == 2 ?
                                <button
                                    className="btn btn-green text-white d-none d-sm-block rounded-pill mr-2" onClick={() => window.open('https://meet.jit.si/' + classElement.id)}
                                    style={{
                                        height: '40px'
                                    }}>
                                    <IconContext.Provider value={{
                                        className: " text-white cursor-ponter align-text-bottom",
                                        size: '20px'
                                    }}>
                                        <FaChalkboardTeacher /> Ir a la sala
                            </IconContext.Provider>
                                </button>
                                :
                                ''}
                            {type == 1 && !pay || type == 3 && !pay ?
                                <>
                                    <button
                                        className="btn btn-outline-green mr-2 d-none d-md-block rounded-pill bg-white"
                                        style={{
                                            height: '40px'
                                        }}
                                        onClick={() => handleConfirmClasse(classElement)}
                                    >
                                        <IconContext.Provider value={{
                                            className: "cursor-ponter align-text-bottom",
                                            size: '20px'

                                        }}>
                                            <FaRegHandshake /> Confirmar
                                    </IconContext.Provider>
                                    </button>
                                    <button
                                        className="btn-outline-cancel d-none d-md-block rounded-pill mr-2 bg-white"
                                        style={{
                                            height: '40px'
                                        }}
                                        onClick={() => handleCancelClass()}
                                    >
                                        <IconContext.Provider value={{
                                            className: "cursor-ponter align-text-bottom",
                                            size: '20px'

                                        }}>
                                            <MdCancel /> Rechazar
                                    </IconContext.Provider>
                                    </button>
                                </>
                                :
                                ''}
                            <button
                                className="btn btn-green text-white d-none d-sm-block rounded-pill mr-2" onClick={handleShowClass}
                                style={{
                                    height: '40px'
                                }}>
                                <IconContext.Provider value={{
                                    className: " text-white cursor-ponter align-text-bottom",
                                    size: '20px'
                                }}>
                                    <FaInfoCircle /> Ver más
                            </IconContext.Provider>
                            </button>



                        </div>


                    </div>
                    <Row className="mb-2">
                        <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                            <span className="font-weight-normal text-primary">
                                <IconContext.Provider value={{
                                    className: "mr-2 text-primary cursor-ponter",
                                    size: '20px'
                                }}>
                                    <FaRegCalendarAlt /> Fecha:
                    </IconContext.Provider>

                            </span>{' '}
                        </Col>
                        <Col sm={6} className="d-flex justify-content-center d-sm-inline">

                            {moment(classElement.start).tz('Europe/Madrid').lang('es').format('LLL')}
                        </Col>

                    </Row>


                    <Row className="mb-2">
                        <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                            <span className="font-weight-normal text-primary">
                                <IconContext.Provider value={{
                                    className: "mr-2 text-primary cursor-ponter",
                                    size: '20px'
                                }}>
                                    <FaUserGraduate /> Num. alumnos:
                    </IconContext.Provider>

                            </span>{' '}
                        </Col>
                        <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                            {classElement.students.length}
                        </Col>

                    </Row>
                    <Row className="mb-2">
                        <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                            <span className="font-weight-normal text-primary">
                                <IconContext.Provider value={{
                                    className: "mr-2 text-primary cursor-ponter",
                                    size: '20px'
                                }}>
                                    <MdTimer /> Duración de la clase:
                                    </IconContext.Provider>

                            </span>{' '}
                        </Col>
                        <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                            1 hora
                </Col>

                    </Row>
                    <Row className="">
                        <Col sm={6} lg={3} className="d-flex justify-content-center d-sm-inline">
                            <span className="font-weight-normal text-primary">
                                <IconContext.Provider value={{
                                    className: "mr-2 text-primary cursor-ponter",
                                    size: '20px'
                                }}>
                                    <FaChalkboardTeacher />
                                </IconContext.Provider> Temas a tocar:

                    </span>{' '}
                        </Col>
                        <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                            {classElement.description}
                        </Col>

                    </Row>
                    <div className="d-block d-md-none mt-3">
                        {type == 0 || type == 2 ?
                            <button className="btn d-block d-sm-none mt-2 btn-block btn-green text-white py-2" onClick={handleShowClass}>
                                <IconContext.Provider value={{
                                    className: " text-white cursor-ponter",
                                    size: '20px'
                                }}>
                                    <FaInfoCircle /> Ir a la sala
                                </IconContext.Provider>
                            </button>
                            :
                            ''
                        }
                        <button className="btn d-block d-sm-none mt-2 btn-block btn-green text-white py-2" onClick={handleShowClass}>
                            <IconContext.Provider value={{
                                className: " text-white cursor-ponter",
                                size: '20px'
                            }}>
                                <FaInfoCircle /> Ver más
                    </IconContext.Provider>
                        </button>
                        {type == 1 ?
                            <>
                                <button className="btn btn-outline-green btn-block bg-white mb-2 py-1" onClick={handleConfirmClasse}>
                                    <IconContext.Provider value={{
                                        className: "cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <FaRegHandshake /> Confirmar clase
                                        </IconContext.Provider>
                                </button>
                                <button className="btn-outline-cancel btn-block bg-white py-1" onClick={handleCancelClass}>
                                    <IconContext.Provider value={{
                                        className: "cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <MdCancel /> Cancelar clase
                                        </IconContext.Provider>
                                </button>
                            </>
                            :
                            ''}



                    </div>
                    <Modal show={showClassModal} onHide={handleCloseClass} size="lg">
                        <Modal.Header closeButton className="border-0 text-grey">
                            <div className="d-sm-flex justify-content-between mb-2 px-0">
                                <div className="div-delegate-student d-flex justify-content-between align-items-center">
                                    <div
                                        className="delegate-img mr-3"
                                        style={{
                                            overflow: 'hidden',
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '50%'
                                        }}>
                                        <img
                                            src={`https://source.unsplash.com/random/1`}
                                            alt=""
                                            style={{
                                                height: '50px',
                                                width: '50px'
                                            }}
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        {type == 2 || type == 3 ?
                                            <>
                                                <span className="h5 mb-0">{classElement.teacher.name} {classElement.teacher.surname}</span>
                                                <span className="">{classElement.teacher.email}</span>
                                            </>
                                            :
                                            ''
                                        }

                                    </div>

                                </div>
                                <div className="d-flex justify-content-end align-items-center my-auto">
                                    {type == 1 && !pay || type == 3 && !pay ?
                                        <>
                                            <button className="btn-outline-green h-100 d-none d-sm-block rounded-pill bg-white ml-3" onClick={handleConfirmClasse}>
                                                <IconContext.Provider value={{
                                                    className: "cursor-ponter align-text-bottom",
                                                    size: '20px'
                                                }}>
                                                    <FaRegHandshake /> Confirmar
                                                </IconContext.Provider>
                                            </button>
                                            <button className="btn-outline-cancel h-100 d-none d-sm-block ml-2 rounded-pill bg-white float-right" onClick={handleCancelClass}>
                                                <IconContext.Provider value={{
                                                    className: "cursor-ponter align-text-bottom",
                                                    size: '20px'
                                                }}>
                                                    <MdCancel /> Rechazar
                                            </IconContext.Provider>
                                            </button>
                                        </>
                                        :
                                        ''}


                                </div>

                            </div>
                        </Modal.Header>
                        <Modal.Body className="bg-white text-grey border-0 rounded pt-0">

                            <Row className="mb-2">
                                <Col sm={6} lg={4} className="d-flex justify-content-center d-sm-inline">
                                    <span className="font-weight-normal text-primary">
                                        <IconContext.Provider value={{
                                            className: "mr-2 text-primary cursor-ponter",
                                            size: '20px'
                                        }}>
                                            <FaRegCalendarAlt /> Fecha:
                    </IconContext.Provider>

                                    </span>{' '}
                                </Col>
                                <Col sm={6} className="d-flex justify-content-center d-sm-inline">

                                    {moment(classElement.start).tz('Europe/Madrid').lang('es').format('LLL')}

                                </Col>

                            </Row>


                            <Row className="mb-2">
                                <Col sm={6} lg={4} className="d-flex justify-content-center d-sm-inline">
                                    <span className="font-weight-normal text-primary">
                                        <IconContext.Provider value={{
                                            className: "mr-2 text-primary cursor-ponter",
                                            size: '20px'
                                        }}>
                                            <FaUserGraduate /> Num. alumnos:
                    </IconContext.Provider>

                                    </span>{' '}
                                </Col>
                                <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                                    {classElement.students.length}
                                </Col>

                            </Row>
                            <Row className="mb-2">
                                <Col sm={6} lg={4} className="d-flex justify-content-center d-sm-inline">
                                    <span className="font-weight-normal text-primary">
                                        <IconContext.Provider value={{
                                            className: "mr-2 text-primary cursor-ponter",
                                            size: '20px'
                                        }}>
                                            <MdTimer /> Duración de la clase:
                                    </IconContext.Provider>

                                    </span>{' '}
                                </Col>
                                <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                                    1 hora
                </Col>

                            </Row>
                            <Row className="">
                                <Col sm={6} lg={4} className="d-flex justify-content-center d-sm-inline">
                                    <span className="font-weight-normal text-primary">
                                        <IconContext.Provider value={{
                                            className: "mr-2 text-primary cursor-ponter",
                                            size: '20px'
                                        }}>
                                            <FaChalkboardTeacher />
                                        </IconContext.Provider> Temas a tocar:

                    </span>{' '}
                                </Col>
                                <Col sm={6} className="d-flex justify-content-center d-sm-inline">
                                    {classElement.description}
                                </Col>

                            </Row>
                            <div className="mt-4 mb-3">

                                <span className="h5">Estudiantes inscritos</span>
                            </div>
                            <div className="">
                                {classElement.students ?
                                    <>
                                        {
                                            classElement.students.map(student => {

                                                return < EnrolledStudents key={student.user.id} student={student} />
                                            })

                                        }
                                    </>
                                    :
                                    ''}
                            </div>
                            {pay ?
                                <>
                                    <div className="mt-4 mb-3">
                                        <span className="h5">Pagar</span>
                                        <button
                                            className="btn btn-green d-block text-white rounded-pill mt-3" onClick={handlePay}
                                            style={{
                                                height: '40px'
                                            }}>
                                            <IconContext.Provider value={{
                                                className: " text-white cursor-ponter align-text-bottom",
                                                size: '20px'
                                            }}>
                                                <FaInfoCircle /> Pagar
                                            </IconContext.Provider>
                                        </button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="mt-4 mb-3">

                                        <span className="h5">Calendario</span>
                                    </div>
                                    <div className="">


                                        <CalendarClass classEvent={classElement} />
                                    </div>
                                    {type == 0 || type == 2 ?
                                        <>
                                            <div className="d-block d-sm-none">

                                                <button className="btn-outline-cancel btn-block bg-white" onClick={handleCancelClass}>
                                                    <IconContext.Provider value={{
                                                        className: "cursor-ponter",
                                                        size: '20px'
                                                    }}>
                                                        <MdCancel /> Cancelar clase
                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <button className="btn-outline-cancel h-100 d-none d-sm-block rounded-pill bg-white float-right" onClick={handleCancelClass}>
                                                <IconContext.Provider value={{
                                                    className: "cursor-ponter align-text-bottom",
                                                    size: '20px'
                                                }}>
                                                    <MdCancel /> Cancelar clase
                                        </IconContext.Provider>
                                            </button>
                                        </>
                                        :
                                        ''
                                    }
                                </>
                            }
                        </Modal.Body>

                    </Modal>
                </div >

            )
            }
        </TeachersClassesContext.Consumer >

    );
}

export default TeachersNextClasses;
