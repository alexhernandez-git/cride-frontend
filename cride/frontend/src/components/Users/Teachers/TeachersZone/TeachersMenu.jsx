import React from 'react'
import { FaChalkboardTeacher, FaRegCalendarAlt, FaUserAlt, FaRegHeart, FaUserGraduate } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import "static/assets/styles/components/Teachers/TeachersZone/TeachersMenu.scss"
export default function TeachersMenu() {
    return (
        <div className="teachers-menu shadow">
            <Link to="/myzone/teacher/profile">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaChalkboardTeacher />
                        </IconContext.Provider>
                    </div>

                    <small>
                        Portafolio
                    </small>
                </div>
            </Link>
            <Link to="/myzone/calendar">
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
            </Link>
            <Link to="/myzone/classes">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaUserGraduate />
                        </IconContext.Provider>
                    </div>
                    <small>
                        Mis clases
                                                            </small>
                </div>
            </Link>
            <Link to="/myzone/messages">
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
            </Link>
            <Link to="/myzone/calendar">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaRegHeart />
                        </IconContext.Provider>
                    </div>

                    <small>
                        Favoritos
                                        </small>
                </div>
            </Link>
            <Link to="/myzone/teacher">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle bg-white teacher active">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaUserGraduate />
                        </IconContext.Provider>
                    </div>
                    <small className="">
                        Alumno
                    </small>
                </div>
            </Link>
        </div>

    )
}
