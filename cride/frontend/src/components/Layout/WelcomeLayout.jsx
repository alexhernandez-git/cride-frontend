import React, { useState, useRef, useEffect } from 'react';
import "static/assets/styles/components/Layout/WelcomeLayout.scss"
import Blackboard from "./Blackboard"
import Form from "react-bootstrap/Form"
import Slider from "react-slick";
const WelcomeLayout = () => {
    const slider = useRef()
    const [slideIndex, setSlideIndex] = useState(0)
    const [slideIndex2, setSlideIndex2] = useState(0)

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
                            <Form.Control className="mb-2" type="email" placeholder="¿Que estas buscando?" />
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
                        <div className="container text-center d-flex justify-content-around align-items-center">
                            {slideIndex == 0 ?
                                <>
                                    <span className="h4 m-0 p-2">Alumno</span>
                                    <span className="h5 m-0 p-2 font-weight-light cursor-pointer" onClick={() => slider.current.slickGoTo(1)}>Profesor</span>
                                </>
                                :
                                <>
                                    <span className="h5 m-0 p-2 font-weight-light cursor-pointer" onClick={() => slider.current.slickGoTo(0)}>Alumno</span>
                                    <span className="h4 m-0 p-2">Profesor</span>
                                </>
                            }

                        </div>
                    </div>
                    <div className="container container-info-pill">
                        <Slider {...settings} ref={slider}>
                            <div className="slick-element text-center p-4 d-sm-flex justify-content-between font-weight-normal">
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Tu eliges</span>con quien vas a aprender</div>
                                <div className="info-pill col-md-3 d-flex flex-column align-items-center justify-content-center p-2 bg-gradient-green rounded-pill shadow"><span className="font-weight-bold d-block">Ganas dinero</span>invitando a tus compañeros</div>
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
                        {slideIndex == 0 ?
                            <span className="bg-white cursor-pointer rounded-pill text-grey px-3 py-2 text-secondary shadow">Empieza a aprender</span>
                            :
                            <span className="bg-white cursor-pointer rounded-pill text-grey px-3 py-2 text-secondary shadow">Empieza a enseñar</span>

                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomeLayout;
