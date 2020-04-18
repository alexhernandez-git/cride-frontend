import React from 'react';
import "static/assets/styles/containers/StudentsZone.scss"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"

import StudentsMenu from "src/components/Users/Students/StudentsZone/StudentsMenu"
import StudentsProfileEdit from "src/components/Users/Students/StudentsZone/StudentsProfileEdit/StudentsProfileEdit"
import StudentsClasses from "src/components/Users/Students/StudentsZone/StudentsClasses/StudentsClasses"

const StudentsZone = () => {
    return (
        <div className="min-vh-100 bg-light">

            <StudentsMenu />
            <div className="content-zone text-grey">
                <ScrollToTop />
                <Route exact path="/myzone/student" component={StudentsProfileEdit} />
                <Route exact path="/myzone/student/classes" component={StudentsClasses} />
                <Route exact path="/myzone/student/messages" component={() => `Proximamente, demomento si quieres contactar con tus profesores en tus clases tienes sus correos. Disculpe las molestias. `} />
            </div>
        </div>
    );
}

export default StudentsZone;
