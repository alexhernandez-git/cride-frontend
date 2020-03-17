import React, { useRef, useState, useEffect } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

import EnrolledStudents from "src/components/Users/Teachers/TeachersZone/TeachersClasses/EnrolledStudents"
import CalendarClass from "src/components/Users/Teachers/TeachersZone/TeachersClasses/CalendarClass"
const TeachersNextClasses = () => {

    const [showClassModal, setShowClassModal] = useState(false);
    const handleCloseClass = () => setShowClassModal(false)
    const handleShowClass = () => setShowClassModal(true);
    return (
        < div className="bg-white shadow p-3 rounded my-2" >
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
                        <span className="h5 m-">Marcos Sanchez</span>

                    </div>

                </div>
                <button className="btn btn-green text-white d-none d-sm-block rounded-pill" onClick={handleShowClass}>
                    <IconContext.Provider value={{
                        className: " text-white cursor-ponter",
                        size: '20px'
                    }}>
                        <FaInfoCircle /> Ver más
                    </IconContext.Provider>
                </button>

            </div>
            <Row className="mb-2">
                <Col sm={6} lg={3} xl={2} className="d-flex justify-content-center d-sm-inline">
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
                <Col sm={6} lg={3} xl={2} className="d-flex justify-content-center d-sm-inline">
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

            <Row className="">
                <Col sm={6} lg={3} xl={2} className="d-flex justify-content-center d-sm-inline">
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
            <div className="d-block d-sm-none mt-3">
                <button className="btn btn-block btn-green text-white" onClick={handleShowClass}>
                    <IconContext.Provider value={{
                        className: " text-white cursor-ponter",
                        size: '20px'
                    }}>
                        <FaInfoCircle /> Ver más
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


                    </div>
                </Modal.Header>
                <Modal.Body className="bg-white text-grey border-0 rounded pt-0">

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
                    <div className="mt-4 mb-3">

                        <span className="h5">Estudiantes inscritos</span>
                    </div>
                    <div className="">
                        <EnrolledStudents />
                    </div>
                    <div className="mt-4 mb-3">

                        <span className="h5">Calendario</span>
                    </div>
                    <div className="">
                        <CalendarClass />
                    </div>
                </Modal.Body>

            </Modal>
        </div >
    );
}

export default TeachersNextClasses;
