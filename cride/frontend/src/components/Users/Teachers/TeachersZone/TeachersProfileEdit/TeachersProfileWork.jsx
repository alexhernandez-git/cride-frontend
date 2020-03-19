import React, { useEffect, useState } from 'react';

import Select from 'react-select'
import DatePicker from 'react-date-picker';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiEdit2 } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Badge } from 'react-bootstrap'
import "static/assets/styles/components/Users/Teachers/TeachersZone/Profile/TeachersProfileWork.scss"
import moment from 'moment'
const TeachersProfileWork = () => {
    const [showWorkModal, setShowWorkModal] = useState(false);
    const handleCloseWork = () => {
        setIsEditing(false)
        setValueWork({
            id: '',
            title: '',
            company: '',
            currentWorking: false,
            startDate: new Date(),
            endDate: new Date(),
            description: ''
        });
        setShowWorkModal(false)
    }
    const handleShowWork = () => setShowWorkModal(true);

    const [valueWork, setValueWork] = useState({
        id: '',
        title: '',
        company: '',
        currentWorking: false,
        startDate: new Date(),
        endDate: new Date(),
        description: ''
    })
    const [works, setWorks] = useState([])
    const sortWorks = (newArrayWorks) => {
        const worksSorted = newArrayWorks.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
        console.log(worksSorted)
        setWorks(worksSorted)
    }
    const [formErrors, setFormErrors] = useState({
        title: false,
        company: false,
        currentWorking: false,
        startDate: false,
        endDate: false,
        description: false
    })

    const handleAddWork = () => {


        const workComplete = {}
        workComplete.id = Math.random().toString(36).substr(2);
        workComplete.title = valueWork.title
        workComplete.company = valueWork.company
        workComplete.currentWorking = valueWork.currentWorking
        workComplete.startDate = valueWork.startDate
        workComplete.endDate = valueWork.endDate
        workComplete.description = valueWork.description
        const newArrayWorks = [...works, workComplete]
        sortWorks(newArrayWorks)


        handleCloseWork()

    }
    const handleStartDateChange = (d) => {
        setValueWork({ ...valueWork, startDate: d })


    }
    const handleEndDateChange = (d) => {
        setValueWork({ ...valueWork, endDate: d })

    }
    const handleCheckChange = e => {
        if (!valueWork.currentWorking) {


            setValueWork({ ...valueWork, endDate: false, currentWorking: e.target.checked })

        } else {
            setValueWork({ ...valueWork, endDate: new Date(), currentWorking: e.target.checked })

        }
    }
    const handleDelete = (id) => {
        if (confirm('¿Estas seguro?')) {
            const newArrayWorks = works.filter((w) => w.id != id)
            setWorks(newArrayWorks)
            handleCloseWork()
        }
    }
    const [isEditing, setIsEditing] = useState(false)
    const handleOpenEdit = (id) => {
        const workEdit = works.filter(work => work.id == id)[0]
        setValueWork(workEdit)
        setIsEditing(true)
        setShowWorkModal(true)

    }
    const handleEdit = () => {

        const workIndex = works.findIndex((work => work.id == valueWork.id));
        const arrayWorks = works
        arrayWorks[workIndex].title = valueWork.title
        arrayWorks[workIndex].company = valueWork.company
        arrayWorks[workIndex].currentWorking = valueWork.currentWorking
        arrayWorks[workIndex].startDate = valueWork.startDate
        arrayWorks[workIndex].endDate = valueWork.endDate
        arrayWorks[workIndex].description = valueWork.description
        sortWorks(arrayWorks)
        setShowWorkModal(false)
        handleCloseWork()
    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Tus experiencia laboral</span>
                </Col>
            </Row>
            <Row>

                <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center mb-2">
                    <span className="h5 font-weight-normal m-0">Experiencia laboral</span>
                </Col>

                <Col lg={{ offset: 1, span: 6 }}>
                    {works.length != 0 ?
                        <div className="mb-3">
                            {works.map(work => (

                                <div className="work-experience w-100 border-bottom pb-2 mb-2" key={work.id}>
                                    <div className="d-flex justify-content-between">

                                        <span className="d-block h4 mb-1 font-weight-normal text-break">{work.title} / {work.company}</span>
                                        <span onClick={() => handleOpenEdit(work.id)}>
                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name cursor-pointer text-secondary",
                                                    size: '25px'
                                                }}

                                            >
                                                <FiEdit2 />

                                            </IconContext.Provider>
                                        </span>
                                    </div>
                                    <span className="font-weight-normal">
                                        <IconContext.Provider value={{
                                            className: "mr-2 text-primary",
                                            size: '20px'
                                        }}>
                                            {work.currentWorking

                                                ?
                                                <>
                                                    <FaRegCalendarAlt />{moment(work.startDate).format('MM/YYYY')}  - <Badge variant="primary" >Actualidad</Badge>
                                                </>
                                                :
                                                <>
                                                    <FaRegCalendarAlt />{moment(work.startDate).format('MM/YYYY')} - {moment(work.endDate).format('MM/YYYY')}
                                                </>
                                            }
                                        </IconContext.Provider>
                                    </span>
                                    <div className="mt-2 text-break">
                                        {work.description}
                                    </div>

                                </div>
                            ))}
                        </div>
                        :
                        ''
                    }
                    <span className="text-secondary cursor-pointer" onClick={handleShowWork}>Añade tu experiencia laboral...</span>

                </Col>
            </Row>


            <Modal show={showWorkModal} onHide={handleCloseWork}>
                <Modal.Header closeButton className="border-0">
                </Modal.Header>
                <Modal.Body className="bg-white text-grey">
                    <Form.Group>
                        <Form.Label>Trabajo</Form.Label>
                        <Form.Control type="text" value={valueWork.title} onChange={e => setValueWork({ ...valueWork, title: e.target.value })} placeholder="Ex: Programador frontend" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre de la empresa</Form.Label>
                        <Form.Control type="text" value={valueWork.company} onChange={e => setValueWork({ ...valueWork, company: e.target.value })} placeholder="Ex: Microsoft" />
                    </Form.Group>
                    <Form.Group>
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={valueWork.currentWorking}
                                onChange={handleCheckChange}
                            />
                            <span className="checkmark"></span>
                            Trabajando actualmente
                        </label>
                    </Form.Group>
                    <span>Duración</span>
                    <div className="d-sm-flex justify-content-around mt-2">

                        <Form.Group>
                            <DatePicker
                                onChange={d => handleStartDateChange(d)}
                                value={valueWork.startDate}
                                className="shadow p-1 rounded mb-2"
                            />
                            <Form.Label className="d-block">Fecha de inicio</Form.Label>
                        </Form.Group>
                        {valueWork.currentWorking ?
                            <Form.Group>

                                <Form.Label className="d-block">Fecha de fin (actual)</Form.Label>
                            </Form.Group>
                            :
                            <Form.Group>
                                <DatePicker

                                    onChange={d => handleEndDateChange(d)}
                                    value={valueWork.endDate}
                                    className="shadow p-1 rounded mb-2"
                                />
                                <Form.Label className="d-block">Fecha de fin</Form.Label>
                            </Form.Group>
                        }
                    </div>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows="3" value={valueWork.description} onChange={e => setValueWork({ ...valueWork, description: e.target.value })} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-0" className="d-block">
                    <div className="d-flex justify-content-between">
                        <div>
                            {isEditing ?
                                <button className="btn btn-outline-green " onClick={() => handleDelete(valueWork.id)}>
                                    Eliminar
                         </button>
                                :
                                ''
                            }
                        </div>
                        <div>
                            {isEditing ?
                                <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0" onClick={handleEdit}>
                                    Guardar
                         </Button>
                                :
                                <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0" onClick={handleAddWork}>
                                    Añadir
                        </Button>

                            }
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>

        </div >
    );
}

export default TeachersProfileWork;
