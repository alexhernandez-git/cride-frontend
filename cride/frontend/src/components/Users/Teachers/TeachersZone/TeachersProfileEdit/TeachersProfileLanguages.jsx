import React, { useContext, useState } from 'react';
import Lang from "static/data/languages"
import LangLevel from "static/data/languageLevel"
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AppContext } from "src/context/AppContext"
import { MdCancel } from 'react-icons/md';

import { IconContext } from "react-icons";
import { Form, Row, Col, Modal, Button, Table } from 'react-bootstrap'
const TeachersProfileLanguages = () => {
    const appContext = useContext(AppContext);
    const MySwal = withReactContent(Swal)
    const [showLanguageModal, setShowLanguageModal] = useState(false);

    const handleCloseLanguage = () => setShowLanguageModal(false);
    const handleShowLanguage = () => setShowLanguageModal(true);
    const [valueLanguage, setValueLanguage] = useState(null)
    const [valueLevel, setValueLevel] = useState(null)
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
            appContext.addLenguage(languageComplete)

        }
        setValueLanguage(null);
        setValueLevel(null);
        handleCloseLanguage()

    }
    const handleDelete = (data) => {
        MySwal.fire({
            title: 'Estas seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {

                appContext.deleteLenguage(data);

                return Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                })
            }
        })



    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <Row className="mb-4">
                <Col className="d-md-flex justify-content-between">
                    <span className="d-none d-md-block">Tus idiomas</span>
                </Col>
            </Row>
            <Form>
                <Row>

                    <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center mb-2">
                        <span className="h5 font-weight-normal m-0">Idiomas</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        {appContext.userProfile.user.teacher.lenguages.length != 0 ?
                            <Table responsive className="botder-top border-bottom text-grey">
                                <tbody>
                                    {appContext.userProfile.user.teacher.lenguages.map((lang) => (

                                        <tr key={lang.id}>
                                            <td>{lang.languageLabel}</td>
                                            <td>{lang.levelLabel}</td>
                                            <td onClick={() => handleDelete(lang)} className="pr-1" style={{ width: '25px' }}>
                                                <IconContext.Provider
                                                    value={{
                                                        className: "global-class-name cursor-pointer text-secondary",
                                                        size: '25px'
                                                    }}

                                                >
                                                    <MdCancel />

                                                </IconContext.Provider>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </Table>
                            :
                            ''
                        }
                        <span className="text-secondary cursor-pointer" onClick={handleShowLanguage}>Añade tus idiomas...</span>

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
                    <Button className="btn-gradient-green bg-gradient-green border-0" onClick={handleAddLanguage}>
                        Añadir
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default TeachersProfileLanguages;
