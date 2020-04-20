import React, { useState, useEffect } from 'react';
import "static/assets/styles/containers/TeachersProfile.scss"

import { TeachersProfileProvider, TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

import TeacherSidebar from "src/components/Users/Teachers/TeachersProfile/TeacherSidebar"
import TeacherWorkExperience from "src/components/Users/Teachers/TeachersProfile/TeacherWorkExperience"
import TeacherEducation from "src/components/Users/Teachers/TeachersProfile/TeacherEducation"
import TeacherPresentation from "src/components/Users/Teachers/TeachersProfile/TeacherPresentation"
import TeacherTeach from "src/components/Users/Teachers/TeachersProfile/TeacherTeach"
import TeacherSkills from "src/components/Users/Teachers/TeachersProfile/TeacherSkills"
import ScheduleHour from "src/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour"
import StudentFeedback from 'src/components/Users/Teachers/TeachersProfile/StudentFeedback';
import ScheduleClass from 'src/components/Users/Teachers/TeachersProfile/ScheduleClass';
import TeacherLanguages from 'src/components/Users/Teachers/TeachersProfile/TeacherLanguages';
import {
    Row, Tab, Col, Nav
} from 'react-bootstrap';
import "static/assets/styles/components/Users/Teachers/TeachersZone/Profile/TeachersClasses.scss"

import { useLocation } from 'react-router-dom'
const TeachersProfile = props => {
    const { match } = props;
    let { id } = match.params;
    const [key, setKey] = useState(0)
    return (
        <TeachersProfileProvider id={id}>
            <TeachersProfileContext.Consumer>
                {teacherContext => (
                    <>
                        {teacherContext.teacherState.loading ? 'Cargando...' :
                            <>
                                < div className="profile-content container mt-5 mb-5 text-grey">
                                    <Row>

                                        <div onClick={teacherContext.handleShow} className="mb-4 w-100 bg-gradient-green shadow rounded-pill p-2 text-white text-center cursor-pointer">
                                            <span>
                                                Por cada compañero que invites a la clase obtendrás{' '}
                                                <span className="font-weight-bold">{Math.round(teacherContext.teacherState.user.teacher.class_price.value * 0.2)}€</span>
                                            </span>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        <div className="col-md-4 shadow p-0 rounded overflow-hidden h-100 mb-4">

                                            <TeacherSidebar />
                                        </div>
                                        <div className="col-md-8 mb-4 p-0 pl-md-3">
                                            <Tab.Container id="left-tabs-example" activeKey={key} onSelect={k => setKey(k)} defaultActiveKey="first" className="p-3">
                                                <Row className="mb-3 p-2">
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

                                                            <Nav.Item>
                                                                <Nav.Link eventKey={1} className="text-grey">
                                                                    <span className="font-weight-bold">CALENDARIO</span>

                                                                </Nav.Link>
                                                            </Nav.Item>

                                                        </Nav>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="pl-3 pr-3">
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey={0} className="text-grey">
                                                                <TeacherPresentation />
                                                                <TeacherTeach />
                                                                <TeacherSkills />
                                                                <TeacherLanguages />
                                                                <TeacherWorkExperience />
                                                                <TeacherEducation />
                                                                <StudentFeedback />
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey={1} className="text-grey">
                                                                {!teacherContext.showScheduleClass ?
                                                                    <div className="mb-5">

                                                                        <ScheduleHour profile={true} />
                                                                    </div>
                                                                    :
                                                                    ''
                                                                }
                                                            </Tab.Pane>

                                                        </Tab.Content>



                                                    </Col>
                                                </Row>
                                            </Tab.Container>
                                            <ScheduleClass />
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                )
                }
            </TeachersProfileContext.Consumer >
        </TeachersProfileProvider >
    );
}

export default TeachersProfile