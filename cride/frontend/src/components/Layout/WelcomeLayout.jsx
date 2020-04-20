import React, { useState, useRef, useEffect } from 'react';
import "static/assets/styles/components/Layout/WelcomeLayout.scss"
import Blackboard from "./Blackboard"
import Form from "react-bootstrap/Form"
import Slider from "react-slick";
import { Link, Redirect } from "react-router-dom"
import { IconContext } from "react-icons";
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
const WelcomeLayout = () => {
    const slider = useRef()
    const [slideIndex, setSlideIndex] = useState(0)
    const [search, setSearch] = useState('');
    const [send, setSend] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setSend(true)
    }

    const settings = {
        initialSlide: 0,
        infinite: false,
        speed: 1000,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideIndex(next),
        afterChange: current => setSlideIndex(current)
    }
    return (
        <>
            <div
                className="div-welcome bg-gradient-green shadow"

            >

                <div className="container">

                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <span className="mt-3 text-light h4 font-weight-light text-shadow">Bienvenido a <h2 className="h2 mb-4">ClassLine Academy</h2></span>
                            <Form onSubmit={handleSubmit}>
                                <Form.Control
                                    className="mb-2"
                                    type="text"
                                    placeholder="¿Que estas buscando?"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {send > 0 &&
                                    <Redirect to={{
                                        pathname: '/teachers/' + search,
                                    }} />
                                }
                            </Form>

                            <span className="mt-3 text-light h4 font-weight-light text-shadow">Clases virtuales efectivas</span>

                        </div>
                        <div className="col-md-6">
                            <Blackboard />
                        </div>
                    </div>
                </div>
            </div >
            <div className="shadow text-white">
                <div className="w-100">


                    <div className="row bg-danger p-1 shadow">
                        <div className="container text-center d-flex justify-content-center align-items-center">
                            {slideIndex == 0 ?
                                <>
                                    <span>
                                        <IconContext.Provider value={{ color: "grey", className: "h3 mr-2 mb-0 cursor-pointer" }}>
                                            <IoIosArrowDropleft />
                                        </IconContext.Provider>
                                    </span>
                                    <span className="h4 m-0 p-2 cursor-pointer">Alumno</span>
                                    <span className="h4 m-0 p-2 cursor-pointer font-weight-lighter">Profesor</span>
                                    <span>
                                        <IconContext.Provider value={{ color: "white", className: "h3 ml-2 mb-0 cursor-pointer" }}>
                                            <IoIosArrowDropright onClick={() => { slider.current.slickGoTo(1) }} />
                                        </IconContext.Provider>
                                    </span>
                                </>
                                :
                                <>
                                    <span>
                                        <IconContext.Provider value={{ color: "white", className: "h3 mr-2 mb-0 cursor-pointer" }}>
                                            <IoIosArrowDropleft onClick={() => { slider.current.slickGoTo(0) }} />
                                        </IconContext.Provider>
                                    </span>
                                    <span className="h4 m-0 p-2 cursor-pointer font-weight-lighter">Alumno</span>

                                    <span className="h4 m-0 p-2 cursor-pointer">Profesor</span>
                                    <span>
                                        <IconContext.Provider value={{ color: "grey", className: "h3 ml-2 mb-0 cursor-pointer" }}>
                                            <IoIosArrowDropright />
                                        </IconContext.Provider>
                                    </span>
                                </>
                            }

                        </div>
                    </div>
                    <div className="container container-info-pill">
                        <Slider {...settings} ref={slider}>
                            <div className="slick-element text-center p-4 d-sm-flex justify-content-between font-weight-normal">
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Tu eliges</span>con quien vas a aprender</div>
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Ganas vales</span>invitando a tus compañeros</div>
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Pagas menos</span>si has sido invitado</div>

                            </div>


                            <div className="slick-element text-center p-4 d-sm-flex justify-content-between font-weight-normal">
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Tu eliges</span>tus horas disponibles</div>
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Ganas dinero</span>impartiendo clases</div>
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Se un referente</span>para tus alumnos</div>

                            </div>


                        </Slider>
                    </div>
                    <div className="d-flex justify-content-center bg-gradient-green p-3">
                        <Link to="/teachers" className="bg-white cursor-pointer rounded-pill text-grey px-3 py-2 m-0 h5 font-weight-normal text-secondary shadow mr-2">Busca a tu profesor</Link>
                        <Link to="/myzone/teacher" className="bg-white cursor-pointer rounded-pill text-grey h5 m-0 font-weight-normal px-3 py-2 text-secondary shadow ml-2">Empieza a enseñar</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomeLayout;
