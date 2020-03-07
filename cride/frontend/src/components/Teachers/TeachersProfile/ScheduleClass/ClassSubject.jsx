import React, { useState, useContext, useRef } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { TeachersProfileContext } from "../../../../context/TeachersProfileContext"

import { FaPlus, FaMinus } from 'react-icons/fa';

import { IconContext } from "react-icons";
export default function ClassSubject() {
    const counter = useRef()
    const teacherContext = useContext(TeachersProfileContext);

    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="text-center">
                    <Row className="mb-4">

                        <Col>
                            <span className="d-block h4 mb-3">¿Que quieres aprender?</span>
                            <Form.Group controlid="description">
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-5">

                        <Col md={12}>
                            <span className="d-block h4 mb-3">Clases</span>
                            <div controlid="num-classes" className="d-flex justify-content-center align-content-center">
                                <a className="btn btn-green text-white shadow" onClick={teacherContext.handleSub}>
                                    <IconContext.Provider
                                        value={{
                                            className: "global-class-name cursor-pointer",
                                            size: '20px'
                                        }}
                                    >
                                        <FaMinus />

                                    </IconContext.Provider>
                                </a>
                                <Form.Control
                                    type="text"
                                    onChange={(event) => teacherContext.handleChangeSelected(event.target.value)}
                                    value={teacherContext.selectedClasses.selected}
                                    style={{ width: '100px' }}
                                    className="d-inline border-0 mr-3 ml-3 text-center"
                                />
                                <a className="btn btn-green text-white shadow" onClick={teacherContext.handleAdd}>
                                    <IconContext.Provider
                                        value={{
                                            className: "global-class-name cursor-pointer",
                                            size: '20px'
                                        }}
                                    >
                                        <FaPlus />

                                    </IconContext.Provider>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={4} className="mb-4">
                            <span className="d-block h4 mb-3">Precio inicial</span>
                            <span className="h4 pl-2 pr-2 shadow pt-1 pb-1 rounded font-weight-light bg-primary text-white">{teacherContext.selectedClasses.totalPrice}€</span>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">

                            <span className="d-block h4 mb-3">Descuento</span>
                            <span className="h4 pl-2 pr-2 shadow pt-1 pb-1 rounded font-weight-light bg-warning text-white">{teacherContext.selectedClasses.totalDiscount}€</span>
                        </Col>
                        <Col md={4} className="mb-4">

                            <span className="d-block h4 mb-3">Precio final</span>
                            <span className="h4 pl-2 pr-2 pt-1 shadow pb-1 rounded font-weight-light bg-danger text-white">{teacherContext.selectedClasses.finalPrice}€</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-4">
                            <span className="d-block h4 mb-3">Precio por clase</span>
                            <span className="h3 pl-2 pr-2 pt-1 pb-1 shadow rounded font-weight-light bg-gradient-green text-white">{teacherContext.selectedClasses.priceByClass}€</span>
                        </Col>
                    </Row>

                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    )
}
