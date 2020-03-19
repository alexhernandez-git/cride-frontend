import React, { useEffect, useState, useContext } from 'react';

import Select from 'react-select'
import DatePicker from 'react-date-picker';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiEdit2 } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Badge } from 'react-bootstrap'
import moment from 'moment'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

export default function ClassModal() {
    const teacherContext = useContext(TeachersProfileContext);
    const [classData, setClassData] = useState(teacherContext.classData);
    return (

        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <Modal
                    show={teacherContext.classModal}
                    onHide={teacherContext.handleCloseClassModal}
                >
                    <Modal.Header closeButton className="border-0">
                    </Modal.Header>
                    <Modal.Body className="bg-white text-grey border-0">
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" value={classData.start} onChange={e => teacherContext.setClassData({ ...classData, start: e.target.value })} placeholder="Ex: Programador frontend" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Que quieres aprender</Form.Label>
                            <Form.Control as="textarea" rows="3" value={classData.description} onChange={e => setClassData({ ...classData, description: e.target.value })} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className="d-block border-0">
                        <div className="d-flex justify-content-between">
                            <div>
                                {classData.isEditing ?
                                    <button className="btn btn-outline-green ">
                                        Eliminar
                         </button>
                                    :
                                    ''
                                }
                            </div>
                            <div>
                                {classData.isEditing ?
                                    <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0">
                                        Guardar
                         </Button>
                                    :
                                    <Button className="btn-gradient-green rounded-pill bg-gradient-green border-0">
                                        Añadir
                        </Button>

                                }
                            </div>
                        </div>

                    </Modal.Footer>
                </Modal>
            )
            }
        </TeachersProfileContext.Consumer >
    )
}

export function RemoveClassModal() {
    return (
        <div>

        </div>
    )
}
