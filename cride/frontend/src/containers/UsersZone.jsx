import React from 'react';
import "static/assets/styles/containers/UsersZone.scss"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"

import ZoneSidebar from 'src/components/Users/UsersZone/ZoneSidebar'
import UsersClasses from 'src/components/Users/UsersZone/UsersClasses';
import UsersCalendar from 'src/components/Users/UsersZone/UsersCalendar';
import UsersMessages from 'src/components/Users/UsersZone/UsersMessages';
import TeachersZone from 'src/components/Teachers/TeachersZone/TeachersZone';
const UsersZone = () => {
    return (
        <div className="min-vh-100 bg-light">

            <div className="users-zone-sidebar">
                <ZoneSidebar />
            </div>
            <div className="users-zone text-grey">
                <ScrollToTop />
                <Route exact path="/student/" component={UsersClasses} />
            </div>
        </div>
    );
}

export default UsersZone;
