import React, {
    Component,
    useState,
    useEffect
} from 'react';
import "../../static/assets/styles/carousel.scss"
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
                breakpoint: 1225,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
            <div className="container mt-5">
                <h6 className="text-muted">Circulos de tu zona</h6>

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
