import React, { useEffect, useState } from 'react';
import Lang from "static/data/languages"
import LangLevel from "static/data/languageLevel"
import Select from 'react-select'

import { FaTrashAlt } from 'react-icons/fa';

import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Table } from 'react-bootstrap'
const TeachersProfileLanguages = () => {
    const [showLanguageModal, setShowLanguageModal] = useState(false);

    const handleCloseLanguage = () => setShowLanguageModal(false);
    const handleShowLanguage = () => setShowLanguageModal(true);
    const [valueLanguage, setValueLanguage] = useState(null)
    const [valueLevel, setValueLevel] = useState(null)
    const [language, setLanguage] = useState([])
    const handleValueChange = (option) => {
        option.level = 'higth'
        console.log(option);

        setValueLanguage(option);
    }
    const handleLevelChange = (option) => {
        option.level = 'higth'
        console.log(option);

        setValueLevel(option);
    }
    const handleAddLanguage = () => {
        if (valueLanguage != null && valueLevel != null) {
            const languageComplete = {}
            languageComplete.id = Math.random().toString(36).substr(2);
            languageComplete.languageValue = valueLanguage.value
            languageComplete.languageLabel = valueLanguage.label
            languageComplete.levelValue = valueLevel.value
            languageComplete.levelLabel = valueLevel.label
            setLanguage([...language, languageComplete])
            console.log(language);

        }
        setValueLanguage(null);
        setValueLevel(null);
        handleCloseLanguage()

    }
    const handleDelete = (id) => {
        const newArrayLang = language.filter((lang) => lang.id != id)
        setLanguage(newArrayLang);

    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Tus idiomas</span>
                    <button className="btn btn-green text-white float-right" onClick={handleShowLanguage}>Añadir idioma</button>
                </Col>
            </Row>
            <Form>
                <Row>

                    <Col lg={{ span: 4 }} className="text-center d-lg-flex justify-content-end align-items-center mb-2">
                        <span className="h5 font-weight-normal m-0">Idiomas</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        {language.length == 0 ?
                            <span className="text-secondary">Añade tus idiomas...</span>

                            :
                            <Table responsive className="botder-top border-bottom text-grey">
                                <tbody>
                                    {language.map((lang) => (

                                        <tr key={lang.id}>
                                            <td>{lang.languageLabel}</td>
                                            <td>{lang.levelLabel}</td>
                                            <td onClick={() => handleDelete(lang.id)} className="d-flex align-items-center justify-content-center h-100">
                                                <IconContext.Provider
                                                    value={{
                                                        className: "global-class-name cursor-pointer text-secondary",
                                                        size: '20px'
                                                    }}
                                                >
                                                    <FaTrashAlt />

                                                </IconContext.Provider>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </Table>
                        }

                    </Col>
                </Row>


            </Form>
            <Modal show={showLanguageModal} onHide={handleCloseLanguage}>
                <Modal.Header closeButton className="border-0">
                </Modal.Header>
                <Modal.Body className="bg-white text-grey">
                    <div className="mb-4">
                        <span className="mb-2">Elije el idioma</span>
                        <Select
                            options={Lang}
                            placeholder={<div>Idiomas</div>}
                            onChange={handleValueChange}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    text: 'orangered',
                                    primary25: '#45948930',
                                    primary50: '#45948952',
                                    primary: '#459489',
                                },
                            })}
                        />
                    </div>
                    <div className="mb-4">
                        <span className="mb-2">Elije el nivel</span>
                        <Select
                            placeholder={<div>Niveles</div>}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    text: 'orangered',
                                    primary25: '#45948930',
                                    primary50: '#45948952',
                                    primary: '#459489',
                                },
                            })}
                            options={LangLevel}
                            onChange={handleLevelChange}

                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="info" onClick={handleCloseLanguage}>
                        Cancelar
                    </Button>
                    <Button className="btn-gradient-green bg-gradient-green border-0" onClick={handleAddLanguage}>
                        Añadir
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default TeachersProfileLanguages;
