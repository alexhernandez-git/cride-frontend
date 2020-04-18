import React from 'react'
import { FaChalkboardTeacher, FaUserEdit, FaChalkboard, FaUserGraduate } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
export default function TeachersMenu() {
    return (
        <div className="teachers-menu zone-sidebar shadow bg-gradient-green">
            <Link className="cursor-no-pointer">

                <div className="seccion">
                    <div className="div-icon-rol rounded-circle teacher active bg-white">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-primary",
                                size: '20px'
                            }}>
                            <FaChalkboardTeacher />
                        </IconContext.Provider>
                    </div>
                    <small className="text-white">
                        Profesor
                    </small>
                </div>
            </Link>
            <Link to="/myzone/teacher">
                <div className="seccion">
                    <div className="div-icon bg-white rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-primary",
                                size: '20px'
                            }}>
                            <FaUserEdit />
                        </IconContext.Provider>
                    </div>

                    <small className="text-white">
                        Perfil
                    </small>
                </div>
            </Link>
            <Link to="/myzone/teacher/classes">
                <div className="seccion">
                    <div className="div-icon bg-white rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-primary",
                                size: '20px'
                            }}>
                            <FaChalkboard />
                        </IconContext.Provider>
                    </div>

                    <small className="text-white">
                        Mis clases
                    </small>
                </div>
            </Link>
            <Link to="/myzone/teacher/messages">
                <div className="seccion">
                    <div className="div-icon bg-white rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-primary",
                                size: '20px'
                            }}>
                            <MdMessage />
                        </IconContext.Provider>
                    </div>

                    <small className="text-white">
                        Mensajes
                    </small>
                </div>
            </Link>
            <Link to="/myzone/student">
                <div className="seccion">
                    <div className="div-icon bg-white rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-primary",
                                size: '20px'
                            }}>
                            <FaUserGraduate />
                        </IconContext.Provider>
                    </div>
                    <small className="text-white">
                        Alumno
                    </small>
                </div>
            </Link>
            {/* <Link to="/myzone/teacher/calendar">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaRegCalendarAlt />
                        </IconContext.Provider>
                    </div>

                    <small>
                        Calendario
                    </small>
                </div>
            </Link> */}
            {/* <Link to="/myzone/messages">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <MdMessage />
                        </IconContext.Provider>
                    </div>

                    <small className="">
                        Mensajes
                    </small>
                </div>
            </Link> */}

        </div>

    )
}
