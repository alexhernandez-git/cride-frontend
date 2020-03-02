import React, { useState, useEffect } from 'react';
import WelcomeLayout from '../components/Layout/WelcomeLayout'
import ProfessorsCarousel from '../components/Professors/ProfessorsCarousel'
import MainCategories from '../components/Categories/MainCategories';
import "../../static/assets/styles/containers/Home.scss"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="text-grey" >
            <WelcomeLayout />
            <ProfessorsCarousel />
            <div className="banner-home mt-5 border-danger bg-danger box-shadow">
                <h4 className="h2">Nunca pares de aprender</h4>
                <p>Y aprende como nunca lo has hecho</p>
                <Link to="/profesores">
                    <Button variant="outline-light">Empezar ahora</Button>
                </Link>
            </div>
            <MainCategories />
            <div className="banner-instructor">
                <div className="banner-instructor-grid container">
                    <div className="position-relative">
                        <img src="https://i.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg" alt="" />

                    </div>
                    <div className="banner-instructor-text">
                        <h4 className="h2">Conviertete en instructor</h4>
                        <p>Y enseña como nunca lo has hecho</p>
                        <Button variant="outline-info">Empezar ahora</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         mylist: state.mylist,
//         trends: state.trends,
//         originals: state.originals
//     }
// }

export default Home;