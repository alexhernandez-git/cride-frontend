import React, { useEffect, useState } from 'react';
import Lang from "static/data/languages"
import Countries from "static/data/countries"
import Select from 'react-select'
import { Form, Row, Col } from 'react-bootstrap'
const TeachersProfileInfo = () => {
    const [info, setInfo] = useState({
        name: '',
        surname: ''
    })
    const [isEditing, setIsEditing] = useState(false)

    const handleSave = () => {
        setIsEditing(false)
    }
    return (
        <div className="bg-white shadow p-3 rounded my-4">
            <span className="d-none d-md-block">Información principal</span>
            <Form>
                <Row>

                    <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center">
                        <span className="h5 m-0 font-weight-normal">Nombre</span>

                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        <Form.Group controlId="formGroupName">
                            <Form.Control value={info.name} onChange={(e) => { setInfo({ ...info, name: e.target.value }); setIsEditing(true) }} type="text" placeholder="Tu nombre" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>

                    <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center">
                        <span className="h5 m-0 font-weight-normal">Apellidos</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        <Form.Group controlId="formGroupName">
                            <Form.Control value={info.surname} onChange={(e) => { setInfo({ ...info, surname: e.target.value }); setIsEditing(true) }} type="text" placeholder="Tus apellidos" />
                        </Form.Group>
                    </Col>
                </Row>
                {/* <Row>

                    <Col lg={{ span: 4 }} className="mb-3text-center d-lg-flex justify-content-end align-items-center">
                        <span className="h5 m-0 font-weight-normal">Pais</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        <Select
                            options={Countries}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    text: 'orangered',
                                    primary25: '#45948930',
                                    primary50: '#45948952',
                                    primary: '#459489',
                                },
                            })} />
                    </Col>
                </Row> */}
                <div className="d-flex justify-content-center align-items-center mt-4">
                    {isEditing ?
                        <span className="btn btn-green rounded-pill text-white py-2 px-4" onClick={handleSave}>Guardar</span>

                        :
                        <span className="btn btn-green-disabled rounded-pill text-white py-2 px-4" onClick={handleSave}>Guardar</span>


                    }

                </div>
            </Form>
        </div >
    );
}

export default TeachersProfileInfo;
