import React from 'react';
import "static/assets/styles/containers/TeachersZone.scss"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"

import ZoneSidebar from 'src/components/Teachers/TeachersZone/ZoneSidebar'
import TeachersClasses from 'src/components/Teachers/TeachersZone/TeachersClasses';
import TeachersCalendar from 'src/components/Teachers/TeachersZone/TeachersCalendar';
import TeachersMessages from 'src/components/Teachers/TeachersZone/TeachersMessages';
const TeachersZone = () => {
    return (
        <div className="min-vh-100 bg-light">

            <div className="teachers-zone-sidebar">
                <ZoneSidebar />
            </div>
            <div className="teachers-zone text-grey">
                <ScrollToTop />
                <Route exact path="/teacherzone/calendar" component={TeachersCalendar} />
                <Route exact path="/teacherzone/" component={TeachersClasses} />
                <Route exact path="/teacherzone/classes" component={TeachersClasses} />
                <Route exact path="/teacherzone/messages" component={TeachersMessages} />
            </div>
        </div>
    );
}

export default TeachersZone;
