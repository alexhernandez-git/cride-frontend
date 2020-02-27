import React, {
    Component,
    useState,
    useEffect
} from 'react';
import "../../static/assets/styles/components/CarouselCards.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLayout from './CardLayout'
function CarouselCards() {
    // const [suggestions, setSuggestions] = useState([])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
    //         setSuggestions(data)
    //     })
    // })
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>

            <h3 className="text-dark text-center mt-5">Profesores</h3>
            <div className="container mt-4 rounded h1">
                <Slider {...settings}>
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                    <CardLayout />
                </Slider>

            </div>
        </>
    );
}

export default CarouselCards;
