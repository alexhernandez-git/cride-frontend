import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { IoMdCheckmark } from 'react-icons/io';
import ProgressBar from 'react-bootstrap/ProgressBar'
const ProfessorsSkills = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="professors-skills shadow w-100 p-4 rounded mb-3 d-none d-md-block">

            <div className="skills border-bottom pb-4">
                <span className="d-block h3 font-weight-normal text-success">Skills</span>

                <div className="mt-2 mb-2">
                    <span>Adobe photoshop</span>
                    <ProgressBar className="mt-2" variant="success" now={40} />
                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <ProgressBar className="mt-2" variant="success" now={60} />
                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <ProgressBar className="mt-2" variant="success" now={10} />
                </div>
                <div className="mt-2">
                    <span>Photography</span>
                    <ProgressBar className="mt-2" variant="success" now={100} />
                </div>
            </div>
            <div className="languages mt-3">
                <span className="d-block h3 font-weight-normal text-success">Lenguajes</span>

                <div className="mt-2 mb-2">
                    <span>Adobe photoshop</span>
                    <ProgressBar className="mt-2" variant="success" now={40} />
                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <ProgressBar className="mt-2" variant="success" now={60} />
                </div>
                <div className="mt-2 mb-2">
                    <span>Photography</span>
                    <ProgressBar className="mt-2" variant="success" now={10} />
                </div>
                <div className="mt-2">
                    <span>Photography</span>
                    <ProgressBar className="mt-2" variant="success" now={100} />
                </div>
            </div>

        </div>

    );
}

export default ProfessorsSkills;
