import React, { useContext } from 'react';
import ProgressBar from "react-bootstrap/ProgressBar"
import { MdWork, MdHome, MdEmail, MdLocalPhone } from "react-icons/md";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button"
import { FaRegStar, FaStar } from 'react-icons/fa';
import AcquiredClasses from "./AcquiredClasses"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherSidebar.scss"
import StarRating from 'src/components/Layout/StarRatings'
const TeachersSidebar = () => {

    const teacherContext = useContext(TeachersProfileContext);

    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div>
                    <div className="main-info-profile p-4 shadow">
                        <div className="d-inline justify-content-between">
                            <span className="d-block h3 mb-3 text-break font-weight-normal">{teacherContext.teacherState.teacher.name} {teacherContext.teacherState.teacher.surname}</span>

                            <div className="punctuation d-lg-flex justify-content-between align-items-center">
                                <div>
                                    <StarRating rating={teacherContext.teacherState.teacher.rating} />
                                    {/* <IconContext.Provider
                                        value={{
                                            className: "global-class-name text-warning",
                                            size: '20px'
                                        }}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                    </IconContext.Provider> */}
                                </div>
                                <small className="font-weight-light ml-1 d-block text-primary">
                                    {
                                        Math.round(teacherContext.teacherState.teacher.ratings.length)
                                    }{' '}
                                    Valoraciones
                                </small>
                            </div>
                        </div>

                    </div>
                    <div className="div-img aspect-ratio-box">
                        <img className="aspect-ratio-box-inside" src={`https://source.unsplash.com/random/1`} alt="" />
                    </div>

                    <div className="p-3">
                        <a className="btn btn-block btn-green text-white" onClick={teacherContext.handleShow}>Solicitar clase</a>
                        <div className="buttons mt-3 text-center border-bottom pb-3">

                            <a className="btn btn-block btn-outline-green">Enviar mensaje</a>
                        </div>

                        <div className="call-to-action pt-3 pl-3 pr-3" onClick={teacherContext.handleShow}>
                            <small className="d-block pb-2 border-bottom mb-2">Las clases tienen una duración de 60 minutos</small>

                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2 cursor-pointer">
                                <span className="font-weight-bold">1 clase</span>
                                <span className="text-primary">{teacherContext.teacherState.teacher.classPrice}€</span>
                            </div>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2 cursor-pointer">
                                <span className="font-weight-bold">5 clases</span>
                                <span className="text-primary">{(teacherContext.teacherState.teacher.classPrice / 1.5).toFixed(2)}€/clase</span>
                            </div>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2 cursor-pointer">
                                <span className="font-weight-bold">10 clases</span>
                                <span className="text-primary">{(teacherContext.teacherState.teacher.classPrice / 2).toFixed(2)}€/clase</span>
                            </div>
                        </div>
                        <div className="classes-acquired mt-3 text-center">
                            <div className="cursor-pointer" onClick={teacherContext.handleShow}>

                                <AcquiredClasses />
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
