import React, { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Select from 'react-select'

import { MdPlaylistAdd, MdCancel } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Table } from 'react-bootstrap'


export default function TeachersProfileTeach() {
    const [showSubjectsInput, setShowSubjectsInput] = useState(false);

    const handleHideSubjects = () => setShowSubjectsInput(false);
    const handleShowSubjects = () => setShowSubjectsInput(true);
    const [valueSubjects, setValueSubjects] = useState('')
    const [subjects, setSubjects] = useState([])

    const handleSubjectsChange = (e) => {

        setValueSubjects(e.target.value);

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
        console.log('entra');

        const newArrayLang = subjects.filter((subject) => subject.id != id)
        setSubjects(newArrayLang);

    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Que vas a enseñar</span>
                    {!showSubjectsInput ?
                        <button className="btn btn-green text-white float-right" onClick={handleShowSubjects}>Añadir tema</button>
                        :
                        ''
                    }
                </Col>
            </Row>
            <Form>
                <Row>

                    <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center mb-2">
                        <span className="h5 font-weight-normal m-0">Temas</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        {subjects.length != 0 ?
                            subjects.map((subject) => (
                                <div className="my-2" key={subject.id}>
                                    <div className="d-flex justify-content-between">
                                        <span className="font-weight-light text-break">{subject.subjectValue}</span>
                                        <div className="d-flex justify-content-between">

                                            <span onClick={() => handleDelete(subject.id)}>
                                                <IconContext.Provider
                                                    value={{
                                                        className: "global-class-name cursor-pointer text-secondary",
                                                        size: '20px'
                                                    }}

                                                >
                                                    <FaRegTrashAlt />

                                                </IconContext.Provider>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            ))

                            :
                            !showSubjectsInput ?
                                <span className="text-secondary">Añade lo que vas a enseñar...</span>
                                :
                                ''
                        }
                        {showSubjectsInput ?
                            <Form onSubmit={(e) => { e.preventDefault(); handleAddSubjects() }}>

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
                                                    className: "global-class-name cursor-pointer text-secondary mr-2",
                                                    size: '20px'
                                                }}

                                            >
                                                <MdPlaylistAdd />

                                            </IconContext.Provider>
                                        </span>

                                        <span onClick={handleHideSubjects}>
                                            <IconContext.Provider
                                                value={{
                                                    className: "global-class-name cursor-pointer text-secondary",
                                                    size: '20px'
                                                }}

                                            >
                                                <MdCancel />

                                            </IconContext.Provider>
                                        </span>
                                    </div>
                                </Form.Group>
                            </Form>

                            :
                            ''

                        }


                    </Col>
                </Row>


            </Form>

        </div >
    )
}
