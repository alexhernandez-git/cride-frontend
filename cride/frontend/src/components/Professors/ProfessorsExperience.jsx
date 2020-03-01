import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import { IconContext } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../../../static/assets/styles/components/Professors/ProfessorsExperience.scss"
export default function ProfessorsExperience(props) {
    const [type, setType] = useState(props.type)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="professors-experience shadow w-100 p-4 rounded mb-3">
            <span className="d-block h2 font-weight-normal text-success">{type}</span>
            <div className="work-experience border-bottom pb-4 mt-4">

                <span className="d-block h4 mb-1 font-weight-normal">Front End Developer / w3schools.com</span>
                <span className="font-weight-normal">
                    <IconContext.Provider value={{
                        className: "mr-2 text-success",
                        size: '20px'
                    }}>
                        <FaRegCalendarAlt />Jan 2015 - <Badge variant="success" >Current</Badge>
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
                        className: "mr-2 text-success",
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
                        className: "mr-2 text-success",
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
