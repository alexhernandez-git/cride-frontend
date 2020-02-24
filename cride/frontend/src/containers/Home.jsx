import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
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