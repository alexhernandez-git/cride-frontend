import React, { useState, useEffect, useRef, useContext } from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import "static/assets/styles/components/Users/Teachers/TeachersZone/Profile/TeachersClasses.scss"
import "static/assets/styles/components/Users/Teachers/TeachersZone/Classes/TeachersMyClasses.scss"

import TeachersClass from "src/components/Layout/TeachersClass"

import { AppProvider, AppContext } from "src/context/AppContext"


import { IconContext } from "react-icons";
const TeacherProfileEdit = () => {
    const [key, setKey] = useState(0)

    return (
        <AppProvider>
            <AppContext.Consumer>
                {appContext => (

                    <div className="container teachers-profile-edit pt-5 text-grey">

                        <div className="d-sm-flex justify-content-start">
                            <div>
                                <span className="h3 d-block mb-0 text-dark">Tus clases</span>
                                <span>Gestiona las clases de tus alumnos</span>

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
                                                <span className="font-weight-bold">PRÓXIMAS CLASES</span>{' '}
                                                <span className="badge badge-pill badge-secondary align-text-bottom">
                                                    {appContext.userProfile.classes ?
                                                        <span>{appContext.userProfile.classes.length}</span>
                                                        :
                                                        '0'
                                                    }
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey={1} className="text-grey">
                                                <span className="font-weight-bold">INVITACIONES</span>{' '}
                                                <span className="badge badge-pill badge-secondary">
                                                    {appContext.userProfile.invitations ?

                                                        <span>{appContext.userProfile.invitations.length}</span>
                                                        :
                                                        '0'
                                                    }
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="pl-3 pr-3">

                                    <Tab.Content>
                                        <Tab.Pane eventKey={0} className="text-grey">
                                            {appContext.userProfile.classes ?
                                                appContext.userProfile.classes.length > 0 ?
                                                    <>
                                                        {appContext.userProfile.classes.map(classElement => (
                                                            <TeachersClass key={classElement.id} classElement={classElement} type={2} />
                                                        ))}
                                                    </>
                                                    :
                                                    'No tienes clases'
                                                :
                                                ''
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey={1} className="text-grey">
                                            {appContext.userProfile.invitations ?
                                                appContext.userProfile.invitations.length > 0 ?
                                                    <>
                                                        {appContext.userProfile.invitations.map(invitation => (
                                                            <TeachersClass key={invitation.id} invitation={invitation.code} classElement={invitation.class} type={3} />
                                                        ))}
                                                    </>
                                                    :
                                                    'No tienes invitaciones'
                                                :
                                                ''
                                            }
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                )}
            </AppContext.Consumer>
        </AppProvider>
    );
}

export default TeacherProfileEdit;
