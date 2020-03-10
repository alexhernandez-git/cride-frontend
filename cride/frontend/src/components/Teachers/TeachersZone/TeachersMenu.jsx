import React from 'react'
import { FaChalkboardTeacher, FaRegCalendarAlt, FaUniversity } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
export default function TeachersMenu() {
    return (
        <>
            <Link>
                <div className="seccion">
                    <IconContext.Provider
                        value={{
                            className: "global-class-name",
                            size: '20px'
                        }}>
                        <FaChalkboardTeacher />
                    </IconContext.Provider>
                    <br />
                    <span>
                        Profesor
                    </span>
                </div>
            </Link>
            <Link>
                <div className="seccion">
                    <IconContext.Provider
                        value={{
                            className: "global-class-name",
                            size: '20px'
                        }}>
                        <FaUniversity />
                    </IconContext.Provider>
                    <br />
                    <span>
                        Mis clases
                    </span>
                </div>
            </Link>
            <Link>
                <div className="seccion">
                    <IconContext.Provider
                        value={{
                            className: "global-class-name",
                            size: '20px'
                        }}>
                        <FaRegCalendarAlt />
                    </IconContext.Provider>
                    <br />
                    <span>
                        Calendario
                    </span>
                </div>
            </Link>
            <Link>
                <div className="seccion">
                    <IconContext.Provider
                        value={{
                            className: "global-class-name",
                            size: '20px'
                        }}>
                        <MdMessage />
                    </IconContext.Provider>
                    <br />
                    <span className="">
                        Mensajes
            </span>
                </div>
            </Link>
        </>
    )
}
