import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import { MdCancel, MdTimer } from "react-icons/md";
import EnrolledStudents from "src/components/Users/Teachers/TeachersZone/TeachersClasses/EnrolledStudents"
import CalendarClass from "src/components/Users/Teachers/TeachersZone/TeachersClasses/CalendarClass"
import { TeachersClassesContext } from "src/context/TeachersZoneContext/TeachersClassesContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const TeachersNextClasses = (props) => {
    const MySwal = withReactContent(Swal)
    const { id, classEvent, students } = props.classElement
    const classesContext = useContext(TeachersClassesContext);


    const [showClassModal, setShowClassModal] = useState(false);
    const handleCloseClass = () => setShowClassModal(false)
    const handleShowClass = () => setShowClassModal(true);
    const handleCancelClass = (id) => {
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
                classesContext.dispatch({
                    type: 'CANCEL_CLASS_CONFIRMED',
                    payload: id
                })
                return Swal.fire({
                    icon: 'success',
                    title: 'Clase cancelada',
                })
            }
        })
    }

    return (
        <TeachersClassesContext.Consumer>
            {classesContext => (
                < div className="teachers-my-classes bg-white shadow p-3 rounded my-2">
                    <div className="d-sm-flex justify-content-between mb-3 px-0">
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
                                <span className="h5 m-">{students[0].name} {students[0].surname}</span>

                            </div>

                        </div>
                        <div className="div-buttons-next-classes d-flex justify-content-between align-items-center">
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


                            <button
                                className="btn-outline-cancel d-none d-md-block rounded-pill bg-white"
                                style={{
                                    height: '40px'
                                }}
                                onClick={() => handleCancelClass(id)}
                            >
                                <IconContext.Provider value={{
                                    className: "cursor-ponter align-text-bottom",
                                    size: '20px'

                                }}>
                                    <MdCancel /> Cancelar clase
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

                            Friday, 20 de March, 13:20
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
                            2
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
                            Quiero aprender programacion en C#
                </Col>

                    </Row>
                    <div className="d-block d-md-none mt-3">
                        <button className="btn d-block d-sm-none mt-2 btn-block btn-green text-white py-2" onClick={handleShowClass}>
                            <IconContext.Provider value={{
                                className: " text-white cursor-ponter",
                                size: '20px'
                            }}>
                                <FaInfoCircle /> Ver más
                    </IconContext.Provider>
                        </button>

                        <button className="btn-outline-cancel btn-block bg-white py-1" onClick={() => handleCancelClass(id)}>
                            <IconContext.Provider value={{
                                className: "cursor-ponter",
                                size: '20px'
                            }}>
                                <MdCancel /> Cancelar clase
                    </IconContext.Provider>
                        </button>

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
                                        <span className="h5 m-0">Marcos Sanchez</span>


                                    </div>

                                </div>
                                <div className="d-flex justify-content-end align-items-center my-auto">


                                    <button className="btn-outline-cancel h-100 d-none d-sm-block rounded-pill bg-white ml-2" onClick={() => handleCancelClass(id)}>
                                        <IconContext.Provider value={{
                                            className: "cursor-ponter align-text-bottom",
                                            size: '20px'
                                        }}>
                                            <MdCancel /> Cancelar clase
</IconContext.Provider>
                                    </button>
                                </div>

                            </div>
                        </Modal.Header>
                        <Modal.Body className="bg-white text-grey border-0 rounded pt-0">
                            <div className="d-block d-sm-none mb-3">

                                <button className="btn-outline-cancel btn-block bg-white py-1" onClick={() => handleCancelClass(id)}>
                                    <IconContext.Provider value={{
                                        className: "cursor-ponter",
                                        size: '20px'
                                    }}>
                                        <MdCancel /> Cancelar clase
                            </IconContext.Provider>
                                </button>
                            </div>
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

                                    Friday, 20 de March, 13:20
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
                                    2
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
                                    Quiero aprender programacion en C#
                </Col>

                            </Row>
                            <div className="mt-4 mb-3">

                                <span className="h5">Estudiantes inscritos</span>
                            </div>
                            <div className="">
                                {students.map(student => (
                                    <EnrolledStudents key={student.id} student={student} />
                                ))

                                }
                            </div>
                            <div className="mt-4 mb-3">

                                <span className="h5">Calendario</span>
                            </div>
                            <div className="">
                                <CalendarClass classEvent={classEvent} />
                            </div>
                        </Modal.Body>

                    </Modal>
                </div >

            )
            }
        </TeachersClassesContext.Consumer >

    );
}

export default TeachersNextClasses;
