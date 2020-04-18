import React from 'react'
import { FaChalkboardTeacher, FaChalkboard, FaUserGraduate, FaUserEdit } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import "static/assets/styles/components/Users/Students/StudentsZone/StudentsMenu.scss"
export default function StudentsMenu() {
    return (
        <div className="student-menu zone-sidebar shadow">
            <Link className="cursor-no-pointer">
                <div className="seccion">
                    <div className="div-icon-rol bg-gradient-green rounded-circle bg-white teacher active">

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

            <Link to="/myzone/student">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaUserEdit />
                        </IconContext.Provider>
                    </div>

                    <small>
                        Perfil
                    </small>
                </div>
            </Link>
            <Link to="/myzone/student/classes">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaChalkboard />
                        </IconContext.Provider>
                    </div>

                    <small>
                        Mis clases
                    </small>
                </div>
            </Link>
            <Link to="/myzone/student/messages">
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

                    <small>
                        Mensajes
                    </small>
                </div>
            </Link>
            <Link to="/myzone/teacher">
                <div className="seccion">
                    <div className="div-icon bg-gradient-green rounded-circle bg-white">

                        <IconContext.Provider
                            value={{
                                className: "global-class-name text-white",
                                size: '20px'
                            }}>
                            <FaChalkboardTeacher />
                        </IconContext.Provider>
                    </div>
                    <small className="">
                        Profesor
                    </small>
                </div>
            </Link>
        </div>

    )
}
