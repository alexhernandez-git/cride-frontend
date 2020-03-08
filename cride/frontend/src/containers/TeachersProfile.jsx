import React, { useState } from 'react';
import "../../static/assets/styles/containers/TeachersProfile.scss"

import { TeachersProfileProvider } from "../context/TeachersProfileContext"
import { TeachersProfileContext } from "src/context/TeachersProfileContext"

import TeacherSidebar from "../components/Teachers/TeachersProfile/TeacherSidebar"
import TeacherWorkExperience from "../components/Teachers/TeachersProfile/TeacherWorkExperience"
import TeacherEducation from "../components/Teachers/TeachersProfile/TeacherEducation"
import TeacherPresentation from "../components/Teachers/TeachersProfile/TeacherPresentation"
import TeacherTeach from "../components/Teachers/TeachersProfile/TeacherTeach"
import TeacherSkills from "../components/Teachers/TeachersProfile/TeacherSkills"
import TeacherCalendar from "../components/Teachers/TeachersProfile/TeacherCalendar"
import StudentFeedback from '../components/Teachers/TeachersProfile/StudentFeedback';
import ScheduleClass from '../components/Teachers/TeachersProfile/ScheduleClass';
import { Row } from 'react-bootstrap';
const TeachersProfile = () => {
    return (
        <TeachersProfileProvider>
            <TeachersProfileContext.Consumer>
                {teacherContext => (

                    <div className="profile-content container mt-5 mb-5 text-grey">
                        <Row>

                            <div className="mb-2 w-100 bg-gradient-green shadow rounded p-2 text-white text-center cursor-pointer">
                                <span>
                                    Por cada compañero que invites a la clase obtendrás{' '}
                                    <span className="font-weight-bold">{Math.round(teacherContext.classPrice * 0.2)}€</span>
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
                                <TeacherCalendar />
                                <StudentFeedback />
                                <ScheduleClass />
                            </div>
                        </div>
                    </div>

                )
                }
            </TeachersProfileContext.Consumer >
        </TeachersProfileProvider>
    );
}

export default TeachersProfile