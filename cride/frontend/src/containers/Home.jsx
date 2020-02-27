import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CarouselCards from '../components/CarouselCards'
import WelcomeLayout from '../components/WelcomeLayout'
const Home = () => {
    return (
        <div>
            <WelcomeLayout />
            <CarouselCards />
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

export default connect(null, null)(Home);