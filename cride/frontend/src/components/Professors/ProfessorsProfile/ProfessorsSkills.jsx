import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { IoMdCheckmark } from 'react-icons/io';
import ProgressBar from 'react-bootstrap/ProgressBar'
const ProfessorsSkills = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="professors-skills shadow w-100 p-4 rounded mb-3 d-none d-md-block">

            <div className="skills border-bottom pb-4">
                <span className="d-block h3 font-weight-normal text-primary">Skills</span>

                <div className="mt-2 mb-2">
                    <span>Adobe photoshop</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                </div>
                <div className="mt-2">
                    <span>Photography</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="languages mt-3">
                <span className="d-block h3 font-weight-normal text-primary">Lenguajes</span>

                <div className="mt-2 mb-2">
                    <span>Adobe photoshop</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mt-2">
                    <span>Photography</span>
                    <div className="progress">
                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                </div>
            </div>

        </div>

    );
}

export default ProfessorsSkills;
