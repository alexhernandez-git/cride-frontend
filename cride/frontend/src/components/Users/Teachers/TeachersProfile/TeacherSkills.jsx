import React, { useState, useContext } from 'react';
import { IconContext } from "react-icons";
import { IoMdCheckmark } from 'react-icons/io';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

const TeachersSkills = () => {
    const teacherContext = useContext(TeachersProfileContext);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="teacher-skills shadow w-100 p-4 rounded mb-3 d-none d-md-block">

                    <span className="d-block h3 font-weight-normal text-primary">Skills</span>
                    {teacherContext.teacherState.teacher.skills.map(skill => (

                        <div className="mt-2 mb-2" key={skill.id}>
                            <span>{skill.skillValue}</span>
                            <div className="progress">
                                <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: `${skill.levelValue}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    ))}

                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default TeachersSkills;
