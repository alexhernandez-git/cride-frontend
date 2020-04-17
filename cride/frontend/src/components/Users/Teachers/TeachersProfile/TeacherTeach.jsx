import React, { useState, useContext } from 'react';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherTeach.scss"
import { IconContext } from "react-icons";
import { IoMdCheckmark } from 'react-icons/io';
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

const TeachersTeach = () => {
    const teacherContext = useContext(TeachersProfileContext);

    const [isOpen, setIsOpen] = useState(false)
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="teacher-teach shadow w-100 p-4 rounded mb-3">

                    <span className="d-block h3 font-weight-normal text-primary">¿What does the teacher teach?</span>
                    <div className="row pr-4 pl-4">
                        {teacherContext.teacherState.user.teacher.teach.map(teach => (
                            <div className="col-md-6 text-break">
                                <div className="subject p-2 position-relative">

                                    <IconContext.Provider value={{
                                        className: "mr-2 text-primary position-absolute",
                                        size: '20px',

                                    }}>
                                        <IoMdCheckmark style={{ top: '9px', left: '-12px' }} />{' '}
                                        {teach.subjectValue}
                                    </IconContext.Provider>
                                </div>


                            </div>
                        ))}

                    </div>


                </div >
            )
            }
        </TeachersProfileContext.Consumer >
    )
}

export default TeachersTeach;
