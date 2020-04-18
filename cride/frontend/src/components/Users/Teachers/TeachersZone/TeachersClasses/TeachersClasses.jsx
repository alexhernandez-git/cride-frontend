import React, { useState, useEffect, useRef, useContext } from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import "static/assets/styles/components/Users/Teachers/TeachersZone/Profile/TeachersClasses.scss"
import "static/assets/styles/components/Users/Teachers/TeachersZone/Classes/TeachersMyClasses.scss"
import TeachersClass from "src/components/Layout/TeachersClass"

import { TeachersClassesProvider, TeachersClassesContext } from "src/context/TeachersZoneContext/TeachersClassesContext"


import { IconContext } from "react-icons";
const TeacherProfileEdit = () => {
    const [key, setKey] = useState(0)

    return (
        <TeachersClassesProvider>
            <TeachersClassesContext.Consumer>
                {classesContext => (

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
                                                    {classesContext.isFetching ? (
                                                        <span>0</span>
                                                    ) : classesContext.hasError ? (
                                                        <span>0</span>
                                                    ) : (
                                                                <span>{classesContext.classes.classesConfirmed.length}</span>
                                                            )
                                                    }
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey={1} className="text-grey">
                                                <span className="font-weight-bold">CLASES POR CONFIRMAR</span>{' '}
                                                <span className="badge badge-pill badge-secondary">
                                                    {classesContext.isFetching ? (
                                                        <span>0</span>
                                                    ) : classesContext.hasError ? (
                                                        <span>0</span>
                                                    ) : (
                                                                <span>{classesContext.classes.classesToBeConfirmed.length}</span>
                                                            )
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
                                            {classesContext.isFetching ? (
                                                <span>LOADING...</span>
                                            ) : classesContext.hasError ? (
                                                <span className="error">Ha ocurrido un error</span>
                                            ) : (

                                                        classesContext.classes.classesConfirmed.length > 0 ?
                                                            <>
                                                                {classesContext.classes.classesConfirmed.map(classElement => (
                                                                    < TeachersClass key={classElement.id} classElement={classElement} type={0} />
                                                                ))}
                                                            </>
                                                            :
                                                            'No tienes clases'
                                                    )
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey={1} className="text-grey">
                                            {classesContext.isFetching ? (
                                                <span>LOADING...</span>
                                            ) : classesContext.hasError ? (
                                                <span className="error">Ha ocurrido un error</span>
                                            ) : (
                                                        classesContext.classes.classesToBeConfirmed.length > 0 ?
                                                            <>
                                                                {classesContext.classes.classesToBeConfirmed.map(classElement => (
                                                                    <TeachersClass key={classElement.id} classElement={classElement} type={1} />
                                                                ))}
                                                            </>
                                                            :
                                                            'No tienes clases por confirmar'
                                                    )
                                            }
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                )}
            </TeachersClassesContext.Consumer>
        </TeachersClassesProvider>
    );
}

export default TeacherProfileEdit;
