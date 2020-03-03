import React from 'react';
import "../../static/assets/styles/containers/ProfessorsProfile.scss"

import ProfessorsSidebar from "../components/Professors/ProfessorsProfile/ProfessorsSidebar"
import ProfessorsWorkExperience from "../components/Professors/ProfessorsProfile/ProfessorsWorkExperience"
import ProfessorsEducation from "../components/Professors/ProfessorsProfile/ProfessorsEducation"
import ProfessorsPresentation from "../components/Professors/ProfessorsProfile/ProfessorsPresentation"
import ProfessorsTeach from "../components/Professors/ProfessorsProfile/ProfessorsTeach"
import ProfessorsSkills from "../components/Professors/ProfessorsProfile/ProfessorsSkills"
import ProfessorsCalendar from "../components/Professors/ProfessorsProfile/ProfessorsCalendar"

const ProfessorsProfile = () => {
    return (
        <div className="profile-content container mt-5 mb-5 text-grey">
            <div className="row">
                <div className="col-md-4 shadow p-0 rounded overflow-hidden h-100 mb-4">

                    <ProfessorsSidebar />
                </div>
                <div className="col-md-8 mb-4 p-0 pl-md-3 pr-md-3">
                    <ProfessorsPresentation />
                    <ProfessorsTeach />
                    <ProfessorsSkills />
                    <ProfessorsWorkExperience />
                    <ProfessorsEducation />
                    <ProfessorsCalendar />
                </div>
            </div>
        </div>
    );
}

export default ProfessorsProfile