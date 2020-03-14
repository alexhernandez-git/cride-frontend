import React, { useEffect, useState } from 'react';
import Lang from "static/data/languages"
import Countries from "static/data/countries"
import Select from 'react-select'
import { Form, Row, Col } from 'react-bootstrap'
const TeachersProfileInfo = () => {
    // const [options, setOptions] = useState([])
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
                            <Form.Control type="text" placeholder="Tu nombre" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>

                    <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center">
                        <span className="h5 m-0 font-weight-normal">Apellidos</span>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        <Form.Group controlId="formGroupName">
                            <Form.Control type="text" placeholder="Tus apellidos" />
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


            </Form>
        </div >
    );
}

export default TeachersProfileInfo;
