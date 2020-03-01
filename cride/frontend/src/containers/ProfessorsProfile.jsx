import React from 'react';
import "../../static/assets/styles/containers/ProfessorsProfile.scss"
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import ProfessorsSidebar from "../components/Professors/ProfessorsSidebar"
import ProfessorsExperience from "../components/Professors/ProfessorsExperience"
const ProfessorsProfile = () => {
    return (
        <div className="profile-content container mt-5 mb-5 text-grey">
            <div className="row">
                <div className="col-md-4 shadow p-0 rounded overflow-hidden h-100 mb-4">
                    <div className="main-info-profile p-4 shadow mb-2">
                        <div className="d-inline justify-content-between">
                            <span className="d-block h2 mb-3 text-break font-weight-normal">Alex Hernandez</span>

                            <div className="punctuation d-lg-flex justify-content-between">
                                <div>

                                    <IconContext.Provider
                                        value={{
                                            className: "global-class-name text-warning",
                                            size: '20px'
                                        }}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                    </IconContext.Provider>
                                </div>
                                <small className="font-weight-light ml-1 d-block">(+500 valoraciones)</small>
                            </div>
                        </div>

                    </div>
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