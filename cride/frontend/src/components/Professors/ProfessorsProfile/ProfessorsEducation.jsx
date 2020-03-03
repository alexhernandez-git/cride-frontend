import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import { IconContext } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "../../../../static/assets/styles/components/Professors/ProfessorsProfile/ProfessorsWorkExperience.scss"
export default function ProfessorsEducation() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const div = document.getElementById('professors-education')

        if (!isOpen) {
            div.style.height = '80px'

        }

    }, [])
    function handleToogle() {
        // console.log('entra');

        const div = document.getElementById('professors-education')
        const toggleIcon = document.querySelector('.toggle-icon-education')

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
        <div className="professors-education shadow w-100 p-4 rounded mb-3 overflow-hidden" id="professors-education">
            <div className="d-flex justify-content-between cursor-pointer" onClick={handleToogle}>

                <span className="d-block h3 font-weight-normal text-primary">Education</span>
                <IconContext.Provider value={{
                    className: "mr-2 text-primary toggle-icon-education",
                    size: '30px'
                }}>
                    <IoIosArrowDown />
                </IconContext.Provider>
            </div>
            <div className="work-experience border-bottom pb-4 mt-4">

                <span className="d-block h4 mb-1 font-weight-normal">Front End Developer / w3schools.com</span>
                <span className="font-weight-normal">
                    <IconContext.Provider value={{
                        className: "mr-2 text-primary",
                        size: '20px'
                    }}>
                        <FaRegCalendarAlt />Jan 2015 - <Badge variant="primary" >Current</Badge>
                    </IconContext.Provider>
                </span>
                <div className="mt-2">

                    Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                </div>
            </div>
            <div className="work-experience border-bottom pb-4 mt-4">

                <span className="d-block h4 mb-1 font-weight-normal">Front End Developer / w3schools.com</span>
                <span className="font-weight-normal">
                    <IconContext.Provider value={{
                        className: "mr-2 text-primary",
                        size: '20px'
                    }}>
                        <FaRegCalendarAlt />             Jan 2015 - Dec 2014
                    </IconContext.Provider>

                </span>
                <div className="mt-2">

                    Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                </div>
            </div>
            <div className="work-experience mt-4">

                <span className="d-block h4 mb-1 font-weight-normal">Front End Developer / w3schools.com</span>
                <span className="font-weight-normal">
                    <IconContext.Provider value={{
                        className: "mr-2 text-primary",
                        size: '20px'
                    }}>
                        <FaRegCalendarAlt />Jan 2015 - Dec 2014
                    </IconContext.Provider>

                </span>
                <div className="mt-2">

                    Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
            </div>
            </div>
        </div>
    )
}
