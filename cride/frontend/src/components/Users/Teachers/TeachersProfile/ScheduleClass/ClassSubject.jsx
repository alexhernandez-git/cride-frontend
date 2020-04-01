import React, { useState, useContext, useRef } from 'react'
import Row from 'react-bootstrap/Row'

import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass.scss"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PriceCard from 'src/components/Users/Teachers/TeachersProfile/ScheduleClass/PriceCard.jsx'
export default function ClassSubject() {
    const teacherContext = useContext(TeachersProfileContext);

    const [cardContent, setCardContent] = useState([{
        //     id: 0,
        //     title: 'Entrevista',
        //     sessions: 'Sesión de 15 min.',
        //     description: 'Entrevístate con Miguel Ángel, comparte tus dudas y objetivos para asegurarte que es tu profesor ideal.',
        //     price: 0,
        //     classes: 1
        // },
        // {
        id: 1,
        title: 'Resolver dudas',
        sessions: '1 clase',
        description: `Realiza una clase con Miguel Ángel. Esta es la opción ideal para resolver una duda de cara a un exámen, una entrega, una entrevista...`,
        price: teacherContext.teacherState.teacher.classPrice,
        classes: 1
    },
    {
        id: 2,
        title: 'Puntualmente',
        sessions: 'Bono de 5 clases',
        description: `Compra el bono de 5 clases, ahorrarás y podrás realizar las clases cuando quieras. \n Tendrás 6 meses para utilizarlas.`,
        price: (teacherContext.teacherState.teacher.classPrice / 1.5).toFixed(2),
        classes: 5
    },
    {
        id: 3,
        title: 'Regularmente',
        sessions: 'Bono de 10 clases',
        description: `Podrás realizar 10 clases, tú decides la frecuencia: cada semana, cada 2 días...o de forma puntual.\nTendrás 6 meses para utilizarlas.`,
        price: (teacherContext.teacherState.teacher.classPrice / 2).toFixed(2),
        classes: 10
    },
    ]);
    const settings = {
        initialSlide: 0,
        infinite: false,
        speed: 100,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="text-center">
                    <Row>
                        <div className="container">
                            <Slider {...settings}>
                                {cardContent.map(content => (
                                    <PriceCard content={content} key={content.id} />
                                ))}
                            </Slider>
                        </div>

                    </Row>
                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    )
}
