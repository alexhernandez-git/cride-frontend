import React, { useEffect, useState, useRef } from 'react';
import 'rc-slider/assets/index.css';
import Select from 'react-select'

import { MdPlaylistAdd, MdCancel } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Table } from 'react-bootstrap'


export default function TeachersProfileTeach() {

    const [isEditing, setIsEditing] = useState(false)

    const [subjects, setSubjects] = useState([
        {
            id: Math.random().toString(36).substr(2),
            subjectValue: ''
        }
    ])


    const handleUpdateSubjects = (e) => {
        console.log(e.target.parentElement.parentElement);

        const subjectIndex = subjects.findIndex((subject => subject.id == e.target.parentElement.parentElement.id));
        const newValue = [...subjects]
        newValue[subjectIndex].subjectValue = e.target.value
        console.log(newValue);
        setIsEditing(true)
        setSubjects([...newValue])
    }
    const handleAddSubjects = () => {
        const subject = {}
        if (subjects[subjects.length - 1].subjectValue != '') {

            subject.id = Math.random().toString(36).substr(2);
            subject.subjectValue = ''
            setSubjects([...subjects, subject])

        }
    }
    const handleDelete = (id) => {

        console.log(subjects.length);

        if (subjects.length == 1) {
            setIsEditing(false)
            setSubjects([
                {
                    id: Math.random().toString(36).substr(2),
                    subjectValue: ''
                }
            ]);

        } else {
            const newArrayLang = subjects.filter((subject) => subject.id != id)
            setSubjects(newArrayLang);

        }

    }
    const handleSave = () => {
        console.log(subjects);


        setIsEditing(false)

    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Que temas te gustaria enseñar</span>


                </Col>
            </Row>
            <Row>

                <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center mb-2">
                    <span className="h5 font-weight-normal m-0">Temas</span>
                </Col>

                <Col lg={{ offset: 1, span: 6 }}>
                    {subjects.length != 0 ?
                        subjects.map(subject => (

                            <Form id={subject.id} key={subject.id}>

                                <Form.Group className="position-relative" >
                                    <Form.Control type="text" placeholder="Añadir tema" value={subject.subjectValue} onChange={(e) => handleUpdateSubjects(e)} />
                                    <div
                                        className="position-absolute"
                                        style={{
                                            top: '5px',
                                            right: '7px'
                                        }}
                                    >

                                        <span onClick={() => handleDelete(subject.id)}>
                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name cursor-pointer text-secondary",
                                                    size: '25px'
                                                }}

                                            >
                                                <MdCancel />

                                            </IconContext.Provider>
                                        </span>
                                    </div>
                                </Form.Group>
                            </Form>
                        ))

                        :
                        ''
                    }
                    <span className="text-secondary cursor-pointer" onClick={handleAddSubjects}>Añade otro tema...</span>


                </Col>
            </Row >
            <div className="d-flex justify-content-center align-items-center mt-4">
                {isEditing ?
                    <span className="btn btn-green rounded-pill text-white py-2 px-4" onClick={handleSave}>Guardar</span>

                    :
                    <span className="btn btn-green-disabled rounded-pill text-white py-2 px-4" onClick={handleSave}>Guardar</span>


                }

            </div>


        </div >
    )
}
