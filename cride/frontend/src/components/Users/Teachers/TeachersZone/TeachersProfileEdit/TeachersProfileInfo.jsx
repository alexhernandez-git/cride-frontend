import React from 'react';
import { Form, Row, Col } from 'react-bootstrap'
const TeachersProfileInfo = () => {
    return (
        <>
            <Form>
                <Row>
                    <Col lg={4}>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Tu nombre" />
                        </Form.Group>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Tus apellidos" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tu presentación</Form.Label>
                            <Form.Control style={{ minHeight: '125px' }} as="textarea" rows="3" />
                        </Form.Group>
                    </Col>

                </Row>
            </Form>
        </>
    );
}

export default TeachersProfileInfo;
