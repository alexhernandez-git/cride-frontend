import React from 'react';
import "static/assets/styles/containers/StudentsZone.scss"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"

import StudentsMenu from "src/components/Users/Students/StudentsZone/StudentsMenu"
import StudentsClasses from "src/components/Users/Students/StudentsZone/StudentsClasses"

const StudentsZone = () => {
    return (
        <div className="min-vh-100 bg-light">

            <StudentsMenu />
            <div className="users-zone text-grey">
                <ScrollToTop />
                <Route exact path="/student/" component={StudentsClasses} />
            </div>
        </div>
    );
}

export default StudentsZone;
