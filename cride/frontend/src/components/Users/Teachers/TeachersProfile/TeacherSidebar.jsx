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
                            <span className="d-block h3 mb-3 text-break font-weight-normal">{teacherContext.teacherState.user.name} {teacherContext.teacherState.user.surname}</span>

                            <div className="punctuation d-lg-flex justify-content-between align-items-center">
                                <div>
                                    <StarRating rating={teacherContext.teacherState.user.teacher.rating} />
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
                                        Math.round(teacherContext.teacherState.user.teacher.ratings.length)
                                    }{' '}
                                    Valoraciones
                                </small>
                            </div>
                        </div>

                    </div>
                    <div className="div-img aspect-ratio-box">
                        <img className="aspect-ratio-box-inside" src={`https://source.unsplash.com/random/1`} alt="" />
                    </div>

                    <div className="p-3 mb-2">
                        <a className="btn btn-block btn-green text-white" onClick={teacherContext.handleShow}>Solicitar clase</a>
                        <div className="buttons mt-3 text-center border-bottom pb-3">

                            <a className="btn btn-block btn-outline-green" href={"mailto:" + teacherContext.teacherState.user.email}>Enviar email</a>
                        </div>

                        <div className="call-to-action pt-3 pl-3 pr-3" onClick={teacherContext.handleShow}>
                            <small className="d-block pb-2 border-bottom mb-2">Las clases tienen una duración de 60 minutos</small>

                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2 cursor-pointer">
                                <span className="font-weight-bold">1 clase</span>
                                <span className="text-primary">{teacherContext.teacherState.user.teacher.class_price.value}€</span>
                            </div>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2 cursor-pointer">
                                <span className="font-weight-bold">5 clases</span>
                                <span className="text-primary">{Math.round(teacherContext.teacherState.user.teacher.class_price.value - 2).toFixed(2) - 0.01}€/clase</span>
                            </div>
                            <div className="d-flex justify-content-between pb-2 border-bottom mb-2 cursor-pointer">
                                <span className="font-weight-bold">10 clases</span>
                                <span className="text-primary">{Math.round(teacherContext.teacherState.user.teacher.class_price.value - 4).toFixed(2) - 0.01}€/clase</span>
                            </div>
                        </div>
                        <div className="classes-acquired mt-3 text-center">
                            <div className="cursor-pointer" onClick={teacherContext.handleShow}>

                                <AcquiredClasses />
                            </div>

                        </div>

                        <div className="d-block d-md-none">
                            <div className="skills mt-4">
                                <span className="h4">Skills</span>
                                {teacherContext.teacherState.user.teacher.skills.map(skill => (

                                    <div className="mt-2 mb-2" key={skill.id}>
                                        <span>{skill.skillValue}</span>
                                        <div className="progress">
                                            <div className="progress-bar bg-gradient-green" role="progressbar" style={{ width: `${skill.levelValue}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer >

    );
}

export default TeachersSidebar;
