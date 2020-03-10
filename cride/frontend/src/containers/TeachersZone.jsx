import React from 'react';
import "static/assets/styles/containers/TeachersZone.scss"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"

import ZoneSidebar from 'src/components/Teachers/TeachersZone/ZoneSidebar'
import TeacherClasses from '../components/Teachers/TeachersZone/TeacherClasses';
const TeachersZone = () => {
    return (
        <div className="min-vh-100">

            <div className="teachers-zone-sidebar">
                <ZoneSidebar />
            </div>
            <div className="teachers-zone text-grey mt-3">
                <BrowserRouter>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/teacherzone/" component={TeacherClasses} />
                        <Route exact path="/teacherzone/classes" component={TeacherClasses} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default TeachersZone;
