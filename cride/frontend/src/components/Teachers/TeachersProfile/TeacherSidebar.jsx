import React, { useContext } from 'react';
import ProgressBar from "react-bootstrap/ProgressBar"
import { MdWork, MdHome, MdEmail, MdLocalPhone } from "react-icons/md";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button"
import { FaRegStar, FaStar } from 'react-icons/fa';
import TeachersLessonsLeft from "./TeacherLessonsLeft"
import { TeachersProfileContext } from "../../../context/TeachersProfileContext"

const TeachersSidebar = () => {
    const professorContext = useContext(TeachersProfileContext);
    const handleRequestClasses = () => {

        let result = prompt('Adquirir clases, ¿Cuantas quieres adquirir?')

        if (result)
            professorContext.addLessonsLeft(result)

    }
    return (
        <TeachersProfileContext.Consumer>
            {context => (
                <div>
                    <div className="main-info-profile p-4 shadow">
                        <div className="d-inline justify-content-between">
                            <span className="d-block h3 mb-3 text-break font-weight-normal">Alex Hernandez</span>

                            <div className="punctuation d-lg-flex justify-content-between">
                                <div>

                                    <IconContext.Provider
                                        value={{
                                            className: "global-class-name text-warning",
                                            size: '20px'
                                        }}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                    </IconContext.Provider>
                                </div>
                                <small className="font-weight-light ml-1 d-block text-primary">+500 valoraciones</small>
                            </div>
                        </div>

                    </div>
                    <div className="div-img w-100">
                        <img className="w-100" src={`https://source.unsplash.com/random/1`} alt="" />
                    </div>

                    <div className="p-3">
                        <div className="cursor-pointer" onClick={handleRequestClasses}>

                            <TeachersLessonsLeft />
                        </div>

                        <div className="call-to-action p-3">
                            <small className="d-block pb-2 border-bottom mb-2">Las clases tienen una duración de 60 minutos</small>
                            <span className="d-block pb-2 border-bottom mb-2">Prueba de 15 min. gratuita</span>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2">
                                <span className="font-weight-bold">1 clase</span>
                                <span className="text-primary">19€</span>
                            </div>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2">
                                <span className="font-weight-bold">5 clases</span>
                                <span className="text-primary">15€/clase</span>
                            </div>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2">
                                <span className="font-weight-bold">10 clases</span>
                                <span className="text-primary">10€/clase</span>
                            </div>
                            <div className="buttons mt-3 text-center border-bottom pb-3">
                                <a className="btn btn-block btn-green text-white" onClick={handleRequestClasses}>Solicitar clase</a>

                                <a className="btn btn-block btn-outline-green">Enviar mensaje</a>
                            </div>
                        </div>

                        <div className="d-block d-md-none">
                            <div className="skills pb-3">
                                <span className="h4">Skills</span>
                                <div className="mt-2 mb-2">
                                    <span>Adobe photoshop</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span>Photography</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span>Photography</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <span>Photography</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="languages mt-3">
                                <span className="h4">Languages</span>
                                <div className="mt-2 mb-2">
                                    <span>Adobe photoshop</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span>Photography</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span>Photography</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <span>Photography</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer >

    );
}

export default TeachersSidebar;
