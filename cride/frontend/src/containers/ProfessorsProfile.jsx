import React from 'react';
import "../../static/assets/styles/containers/ProfessorsProfile.scss"

import ProfessorsSidebar from "../components/Professors/ProfessorsSidebar"
import ProfessorsExperience from "../components/Professors/ProfessorsExperience"
const ProfessorsProfile = () => {
    return (
        <div className="profile-content container mt-5 mb-5 text-grey">
            <div className="row">
                <div className="col-md-4 shadow p-0 rounded overflow-hidden h-100 mb-4">

                    <ProfessorsSidebar />
                </div>
                <div className="col-md-8 mb-4 p-0 pl-md-3 pr-md-3">

                    <ProfessorsExperience type={'Work experience'} />
                    <ProfessorsExperience type={'Education'} />
                </div>
            </div>
        </div>
    );
}

export default ProfessorsProfile