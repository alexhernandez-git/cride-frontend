import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar"
import { MdWork, MdHome, MdEmail, MdLocalPhone } from "react-icons/md";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button"
import { FaRegStar, FaStar } from 'react-icons/fa';
const ProfessorsSidebar = () => {
    return (
        <>
            <div className="main-info-profile p-4 shadow">
                <div className="d-inline justify-content-between">
                    <span className="d-block h2 mb-3 text-break font-weight-normal">Alex Hernandez</span>

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
                        <small className="font-weight-light ml-1 d-block">(+500 valoraciones)</small>
                    </div>
                </div>

            </div>
            <div className="div-img w-100">
                <img className="w-100" src={`https://source.unsplash.com/random/1`} alt="" />
            </div>

            <div className="p-3">
                <div className="call-to-action p-3">
                    <small className="d-block pb-2 border-bottom mb-2">Las clases tienen una duración de 60 minutos</small>
                    <span className="d-block pb-2 border-bottom mb-2">Prueba de 15 min. gratuita</span>
                    <div className="d-flex justify-content-between pb-2 border-bottom mb-2">
                        <span className="font-weight-bold">1 clase</span>
                        <span className="text-success">19€</span>
                    </div>
                    <div className="d-flex justify-content-between pb-2 border-bottom mb-2">
                        <span className="font-weight-bold">5 clases</span>
                        <span className="text-success">15€/clase</span>
                    </div>
                    <div className="d-flex justify-content-between pb-2 border-bottom mb-2">
                        <span className="font-weight-bold">10 clases</span>
                        <span className="text-success">10€/clase</span>
                    </div>
                    <div className="buttons mt-3 text-center border-bottom pb-3">
                        <Button variant="success" className="btn-block">Solicitar clase</Button>

                        <Button variant="outline-success" className="btn-block">Enviar mensaje</Button>
                    </div>
                </div>
                <div className="info pb-3 border-bottom">
                    <div className="mb-2">
                        <IconContext.Provider value={{
                            className: "mr-2 text-success",
                            size: '20px'
                        }}>
                            <MdWork />Designer
                        </IconContext.Provider>
                    </div>
                    <div className="mt-2 mb-2">
                        <IconContext.Provider value={{
                            className: "mr-2 text-success",
                            size: '20px'
                        }}>
                            <MdHome />London, UK
                        </IconContext.Provider>
                    </div>
                    <div className="mt-2 mb-2">
                        <IconContext.Provider value={{
                            className: "mr-2 text-success",
                            size: '20px'
                        }}>
                            <MdEmail />ex@mail.com
                        </IconContext.Provider>
                    </div>
                    <div className="mt-2">
                        <IconContext.Provider value={{
                            className: "mr-2 text-success",
                            size: '20px'
                        }}>
                            <MdLocalPhone />1224435534
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="skills mt-3 pb-3">
                    <span className="h4">Skills</span>
                    <div className="mt-2 mb-2">
                        <span>Adobe photoshop</span>
                        <ProgressBar className="mt-2" striped variant="success" now={40} />
                    </div>
                    <div className="mt-2 mb-2">
                        <span>Photography</span>
                        <ProgressBar className="mt-2" striped variant="success" now={60} />
                    </div>
                    <div className="mt-2 mb-2">
                        <span>Photography</span>
                        <ProgressBar className="mt-2" striped variant="success" now={10} />
                    </div>
                    <div className="mt-2">
                        <span>Photography</span>
                        <ProgressBar className="mt-2" striped variant="success" now={100} />
                    </div>
                </div>
                <div className="languages mt-3">
                    <span className="h4">Languages</span>
                    <div className="mt-2 mb-2">
                        <span>Adobe photoshop</span>
                        <ProgressBar className="mt-2" striped variant="success" now={40} />
                    </div>
                    <div className="mt-2 mb-2">
                        <span>Photography</span>
                        <ProgressBar className="mt-2" striped variant="success" now={60} />
                    </div>
                    <div className="mt-2 mb-2">
                        <span>Photography</span>
                        <ProgressBar className="mt-2" striped variant="success" now={10} />
                    </div>
                    <div className="mt-2">
                        <span>Photography</span>
                        <ProgressBar className="mt-2" striped variant="success" now={100} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfessorsSidebar;
