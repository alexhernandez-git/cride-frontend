import React, { useState, useEffect, useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import { IconContext } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherWorkExperience.scss"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import moment from 'moment'
export default function TeachersWorkExperience() {
    const [isOpen, setIsOpen] = useState(false)
    const teacherContext = useContext(TeachersProfileContext);

    useEffect(() => {
        const div = document.getElementById('professors-work-experience')

        if (!isOpen) {
            div.style.height = '80px'
        }

    }, [])
    function handleToogle() {
        // console.log('entra');

        const div = document.getElementById('professors-work-experience')
        const toggleIcon = document.querySelector('.toggle-icon-work')
        if (!isOpen) {
            toggleIcon.style.transform = 'rotate(180deg)'

            div.style.height = 'inherit'
            setIsOpen(true)

        } else {
            toggleIcon.style.transform = 'inherit'

            div.style.height = '80px'
            setIsOpen(false)

        }
    }
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="teacher-work-experience shadow w-100 p-4 rounded mb-3 overflow-hidden" id="professors-work-experience">
                    <div className="d-flex justify-content-between cursor-pointer" onClick={handleToogle}>

                        <span className="d-block h3 font-weight-normal text-primary">Work experience</span>
                        <IconContext.Provider value={{
                            className: "mr-2 text-primary toggle-icon-work",
                            size: '30px'
                        }}>
                            <IoIosArrowDown />
                        </IconContext.Provider>
                    </div>
                    {teacherContext.teacherState.user.teacher.work_experience.map(work => (
                        <div className="work-experience mt-4 pb-2">

                            <span className="d-block h4 mb-1 font-weight-normal">{work.title} / {work.company}</span>
                            <span className="font-weight-normal">
                                <IconContext.Provider value={{
                                    className: "mr-2 text-primary",
                                    size: '20px'
                                }}>
                                    <FaRegCalendarAlt />{' '}
                                    {moment(work.startDate).format('L')}{' - '}
                                    {work.currentWorking ?
                                        <Badge variant="primary" >Current</Badge>
                                        :
                                        <>
                                            {moment(work.endDate).format('L')}
                                        </>
                                    }
                                </IconContext.Provider>

                            </span>
                            <div className="mt-2">
                                {work.description}
                            </div>
                        </div>
                    ))}

                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    )
}
