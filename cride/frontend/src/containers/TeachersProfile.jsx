import React, { useState, useEffect } from 'react';
import "static/assets/styles/containers/TeachersProfile.scss"

import { TeachersProfileProvider, TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

import TeacherSidebar from "src/components/Users/Teachers/TeachersProfile/TeacherSidebar"
import TeacherWorkExperience from "src/components/Users/Teachers/TeachersProfile/TeacherWorkExperience"
import TeacherEducation from "src/components/Users/Teachers/TeachersProfile/TeacherEducation"
import TeacherPresentation from "src/components/Users/Teachers/TeachersProfile/TeacherPresentation"
import TeacherTeach from "src/components/Users/Teachers/TeachersProfile/TeacherTeach"
import TeacherSkills from "src/components/Users/Teachers/TeachersProfile/TeacherSkills"
import TeacherCalendar from "src/components/Users/Teachers/TeachersProfile/TeacherCalendar"
import ScheduleHour from "src/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour"
import StudentFeedback from 'src/components/Users/Teachers/TeachersProfile/StudentFeedback';
import ScheduleClass from 'src/components/Users/Teachers/TeachersProfile/ScheduleClass';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
const TeachersProfile = props => {
    const { match } = props;
    let { id } = match.params;

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
                                                <span className="font-weight-bold">{Math.round(teacherContext.teacherState.user.teacher.classPrice * 0.2)}€</span>
                                            </span>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        <div className="col-md-4 shadow p-0 rounded overflow-hidden h-100 mb-4">

                                            <TeacherSidebar />
                                        </div>
                                        <div className="col-md-8 mb-4 p-0 pl-md-3">
                                            <TeacherPresentation />
                                            <TeacherTeach />
                                            <TeacherSkills />
                                            <TeacherWorkExperience />
                                            <TeacherEducation />
                                            {!teacherContext.showScheduleClass ?
                                                <ScheduleHour profile={true} />
                                                :
                                                ''
                                            }
                                            <StudentFeedback />
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