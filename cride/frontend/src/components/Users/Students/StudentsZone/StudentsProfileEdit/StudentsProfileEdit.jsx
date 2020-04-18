import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import "static/assets/styles/components/Users/Teachers/TeachersZone/Profile/TeachersClasses.scss"
import TeachersProfileInfo from "src/components/Users/Profile/ProfileInfo"
import TeachersProfileImage from "src/components/Users/Profile/ProfileImage"


const TeacherProfileEdit = () => {
    const [key, setKey] = useState(0)
    return (
        <>
            <div className="container teachers-profile-edit pt-5 text-grey">
                <div className="d-sm-flex justify-content-start">
                    <div>
                        <span className="h3 d-block mb-0 text-dark">Ajustes y perfil</span>
                        <span>Perfil de usuario</span>
                    </div>
                </div>
                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={k => setKey(k)} defaultActiveKey="first" className="p-3">

                    <Row className="mb-3 mt-4">
                        <Col sm={12}>
                            <Nav style={{
                                whiteSpace: 'nowrap',
                                position: 'relative',
                                overflowX: 'auto',
                                overflowY: 'hidden',
                                width: '100%',
                                flexWrap: 'nowrap'
                            }}>

                                <Nav.Item>
                                    <Nav.Link eventKey={0} className="text-grey">
                                        <span className="font-weight-bold">INFORMACIÓN PRINCIPAL</span>

                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="pl-3 pr-3">

                            <Tab.Content>
                                <Tab.Pane eventKey={0} className="text-grey">
                                    <TeachersProfileImage />
                                    <TeachersProfileInfo />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default TeacherProfileEdit;
