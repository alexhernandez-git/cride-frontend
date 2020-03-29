import React, { useEffect, useState } from 'react';

import Select from 'react-select'
import DatePicker from 'react-date-picker';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiEdit2 } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Badge } from 'react-bootstrap'
import "static/assets/styles/components/Users/Teachers/TeachersZone/Profile/TeachersProfileStudies.scss"
import moment from 'moment'
const TeachersProfileStudies = () => {
    const [showStudiesModal, setShowStudiesModal] = useState(false);
    const handleCloseStudies = () => {
        setIsEditing(false)
        setValueStudies({
            id: '',
            title: '',
            company: '',
            currentStudiesing: false,
            startDate: new Date(),
            endDate: new Date(),
            description: ''
        });
        setShowStudiesModal(false)
    }
    const handleShowStudies = () => setShowStudiesModal(true);

    const [valueStudies, setValueStudies] = useState({
        id: '',
        title: '',
        company: '',
        currentStudiesing: false,
        startDate: new Date(),
        endDate: new Date(),
        description: ''
    })
    const [studies, setStudiess] = useState([])
    const sortStudiess = (newArrayStudiess) => {
        const studiesSorted = newArrayStudiess.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
        setStudiess(studiesSorted)
    }


    const handleAddStudies = () => {


        const studiesComplete = {}
        studiesComplete.id = Math.random().toString(36).substr(2);
        studiesComplete.title = valueStudies.title
        studiesComplete.company = valueStudies.company
        studiesComplete.currentStudiesing = valueStudies.currentStudiesing
        studiesComplete.startDate = valueStudies.startDate
        studiesComplete.endDate = valueStudies.endDate
        studiesComplete.description = valueStudies.description
        console.log(studiesComplete);

        const newArrayStudiess = [...studies, studiesComplete]
        sortStudiess(newArrayStudiess)


        handleCloseStudies()

    }
    const handleStartDateChange = (d) => {
        // if (valueStudies.currentStudiesing) {
        setValueStudies({ ...valueStudies, startDate: d })

        // } else {
        // if (d < valueStudies.endDate) {
        // setValueStudies({ ...valueStudies, startDate: d })
        // }
        // }

    }
    const handleEndDateChange = (d) => {
        // if (valueStudies.currentStudiesing) {
        setValueStudies({ ...valueStudies, endDate: d })

        // } else {
        //     if (d > valueStudies.startDate) {
        //         setValueStudies({ ...valueStudies, endDate: d })

        //     }
        // }
    }
    const handleCheckChange = e => {
        if (!valueStudies.currentStudiesing) {


            setValueStudies({ ...valueStudies, endDate: false, currentStudiesing: e.target.checked })

        } else {
            setValueStudies({ ...valueStudies, endDate: new Date(), currentStudiesing: e.target.checked })

        }
    }
    const handleDelete = (id) => {
        if (confirm('¿Estas seguro?')) {

            const newArrayStudiess = studies.filter((w) => w.id != id)
            setStudiess(newArrayStudiess)
            handleCloseStudies()
        }
    }
    const [isEditing, setIsEditing] = useState(false)
    const handleOpenEdit = (id) => {
        const studiesEdit = studies.filter(studies => studies.id == id)[0]
        setValueStudies(studiesEdit)
        setIsEditing(true)
        setShowStudiesModal(true)

    }
    const handleEdit = () => {

        const studiesIndex = studies.findIndex((studies => studies.id == valueStudies.id));
        const arrayStudies = studies
        arrayStudies[studiesIndex].title = valueStudies.title
        arrayStudies[studiesIndex].company = valueStudies.company
        arrayStudies[studiesIndex].currentStudiesing = valueStudies.currentStudiesing
        arrayStudies[studiesIndex].startDate = valueStudies.startDate
        arrayStudies[studiesIndex].endDate = valueStudies.endDate
        arrayStudies[studiesIndex].description = valueStudies.description
        sortStudiess(arrayStudies)
        setShowStudiesModal(false)
        handleCloseStudies()
    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Tus experiencia academica</span>
                </Col>
            </Row>
            <Row>

                <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center mb-2">
                    <span className="h5 font-weight-normal m-0">Experiencia academica</span>
                </Col>

                <Col lg={{ offset: 1, span: 6 }}>
                    {studies.length != 0 ?
                        <div className="mb-3">
                            {studies.map(studies => (


                                <div className="studies-experience w-100 border-bottom pb-2 mb-2" key={studies.id}>
                                    <div className="d-flex justify-content-between">

                                        <span className="d-block h4 mb-1 font-weight-normal text-break">{studies.title} / {studies.company}</span>
                                        <span onClick={() => handleOpenEdit(studies.id)}>
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
                                            {studies.currentStudiesing

                                                ?
                                                <>
                                                    <FaRegCalendarAlt />{moment(studies.startDate).format('MM/YYYY')}  - <Badge variant="primary" >Actualidad</Badge>
                                                </>
                                                :
                                                <>
                                                    <FaRegCalendarAlt />{moment(studies.startDate).format('MM/YYYY')} - {moment(studies.endDate).format('MM/YYYY')}
                                                </>
                                            }
                                        </IconContext.Provider>
                                    </span>
                                    <div className="mt-2 text-break">
                                        {studies.description}
                                    </div>

                                </div>
                            ))}
                        </div>
                        :
                        ''
                    }
                    <span className="text-secondary cursor-pointer" onClick={handleShowStudies}>Añade tu experiencia academica...</span>

                </Col>
            </Row>


            <Modal show={showStudiesModal} onHide={handleCloseStudies}>
                <Modal.Header closeButton className="border-0">
                </Modal.Header>
                <Modal.Body className="bg-white text-grey">
                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" value={valueStudies.title} onChange={e => setValueStudies({ ...valueStudies, title: e.target.value })} placeholder="Ex: Desarrollo de aplicaciónes web" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre de la institución</Form.Label>
                        <Form.Control type="text" value={valueStudies.company} onChange={e => setValueStudies({ ...valueStudies, company: e.target.value })} placeholder="Ex: Harvard" />
                    </Form.Group>
                    <Form.Group>
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={valueStudies.currentStudiesing}
                                onChange={handleCheckChange}
                            />
                            <span className="checkmark"></span>
                            Estudiando actualmente
                        </label>
                    </Form.Group>
                    <span>Duración</span>
                    <div className="d-sm-flex justify-content-around mt-2">

                        <Form.Group>
                            <DatePicker
                                onChange={d => handleStartDateChange(d)}
                                value={valueStudies.startDate}
                                className="shadow p-1 rounded mb-2"
                            />
                            <Form.Label className="d-block">Fecha de inicio</Form.Label>
                        </Form.Group>
                        {valueStudies.currentStudiesing ?
                            <Form.Group>

                                <Form.Label className="d-block">Fecha de fin (actual)</Form.Label>
                            </Form.Group>
                            :
                            <Form.Group>
                                <DatePicker

                                    onChange={d => handleEndDateChange(d)}
                                    value={valueStudies.endDate}
                                    className="shadow p-1 rounded mb-2"
                                />
                                <Form.Label className="d-block">Fecha de fin</Form.Label>
                            </Form.Group>
                        }
                    </div>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows="3" value={valueStudies.description} onChange={e => setValueStudies({ ...valueStudies, description: e.target.value })} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-0" className="d-block">
                    <div className="d-flex justify-content-between">
                        <div>
                            {isEditing ?
                                <button className="btn btn-outline-green " onClick={() => handleDelete(valueStudies.id)}>
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
                                <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0" onClick={handleAddStudies}>
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

export default TeachersProfileStudies;
