import React, { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Select from 'react-select'

import { MdCancel } from 'react-icons/md';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Table } from 'react-bootstrap'


export default function TeachersProfileSkills() {
    const [showSkillsModal, setShowSkillsModal] = useState(false);

    const handleCloseSkills = () => setShowSkillsModal(false);
    const handleShowSkills = () => setShowSkillsModal(true);
    const [valueSkills, setValueSkills] = useState('')
    const [valueLevel, setValueLevel] = useState(0)
    const [skills, setSkills] = useState([])

    const handleLevelChange = (value) => {

        setValueLevel(value);

    }
    const handleAddSkills = () => {
        if (valueSkills != '') {
            const skill = {}
            skill.id = Math.random().toString(36).substr(2);
            skill.skillValue = valueSkills
            skill.levelValue = valueLevel
            setSkills([...skills, skill])

        }
        console.log(skills);

        setValueSkills('');
        setValueLevel(0);
        handleCloseSkills()
    }
    const handleDelete = (id) => {
        console.log('entra');

        const newArrayLang = skills.filter((skill) => skill.id != id)
        setSkills(newArrayLang);

    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Tus habilidades</span>
                </Col>
            </Row>
            <Form>
                <Row>

                    <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center mb-2">
                        <span className="h5 font-weight-normal m-0">Habilidades</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>

                        {skills.length != 0 ?
                            <div className="mb-3">

                                {skills.map((skill) => (
                                    <div className="my-2" key={skill.id}>
                                        <div className="d-flex justify-content-between">
                                            <span className="h5 font-weight-light text-break">{skill.skillValue}</span>
                                            <div className="d-flex justify-content-between">

                                                <span onClick={() => handleDelete(skill.id)}>
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
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: skill.levelValue + '%' }} aria-valuenow={skill.levelValue} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            ''
                        }

                        <span className="text-secondary cursor-pointer" onClick={handleShowSkills}>Añade tus habilidades...</span>
                    </Col>
                </Row>


            </Form>
            <Modal show={showSkillsModal} onHide={handleCloseSkills}>
                <Modal.Header closeButton className="border-0">
                </Modal.Header>
                <Modal.Body className="bg-white text-grey">
                    <div className="mb-4">
                        <Form.Group>
                            <Form.Label>Tu hablilidad</Form.Label>
                            <Form.Control value={valueSkills} onChange={e => setValueSkills(e.target.value)} type="text" placeholder="Pon tu hablilidad" />

                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="d-flex justify-content-between"><span>Tu nivel</span> <span>{valueLevel}%</span></Form.Label>
                            <div className="mt-3 mx-2">
                                <Slider
                                    className="cursor-pointer"
                                    min={0}
                                    max={100}
                                    value={valueLevel}
                                    defaultValue={0}
                                    onChange={handleLevelChange}
                                    railStyle={{
                                        height: 2
                                    }}
                                    handleStyle={{
                                        height: 28,
                                        width: 28,
                                        marginTop: -14,
                                        backgroundColor: "#459489",
                                        border: 0
                                    }}
                                    trackStyle={{
                                        background: "none"
                                    }}
                                />
                            </div>
                        </Form.Group>


                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button className="btn-gradient-green bg-gradient-green border-0" onClick={handleAddSkills}>
                        Añadir
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
