import React, { useEffect, useState, useRef } from 'react';
import 'rc-slider/assets/index.css';
import Select from 'react-select'

import { MdPlaylistAdd, MdCancel } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Table } from 'react-bootstrap'


export default function TeachersProfileTeach() {
    const [showSubjectsInput, setShowSubjectsInput] = useState(false);
    const inputSubject = useRef(null)



    const [valueSubjects, setValueSubjects] = useState('')
    const [subjects, setSubjects] = useState([])


    const handleSubjectsChange = (e) => {
        setValueSubjects(e.target.value)
    }

    const handleUpdateSubjects = (e) => {


        console.log(e.target.parentElement.parentElement);

        const subjectIndex = subjects.findIndex((subject => subject.id == e.target.parentElement.parentElement.id));
        const newValue = [...subjects]
        newValue[subjectIndex].subjectValue = e.target.value
        console.log(newValue);

        setSubjects([...newValue])
    }
    const handleAddSubjects = () => {
        if (valueSubjects != '') {
            const subject = {}
            subject.id = Math.random().toString(36).substr(2);
            subject.subjectValue = valueSubjects
            setSubjects([...subjects, subject])

        }
        console.log(subjects);

        setValueSubjects('');
        handleHideSubjects()
    }
    const handleDelete = (id) => {

        const newArrayLang = subjects.filter((subject) => subject.id != id)
        setSubjects(newArrayLang);

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

                    < Form onSubmit={(e) => { e.preventDefault(); handleAddSubjects() }}>

                        <Form.Group className="position-relative" >
                            <Form.Control type="text" placeholder="Añadir tema" value={valueSubjects} onChange={(e) => handleSubjectsChange(e)} />
                            <div
                                className="position-absolute"
                                style={{
                                    top: '5px',
                                    right: '7px'
                                }}
                            >

                                <span onClick={handleAddSubjects}>
                                    <IconContext.Provider
                                        value={{
                                            className: "global-class-name cursor-pointer text-secondary",
                                            size: '25px'
                                        }}

                                    >
                                        <MdPlaylistAdd />

                                    </IconContext.Provider>
                                </span>
                            </div>
                        </Form.Group>
                    </Form>

                </Col>
            </Row >



        </div >
    )
}
