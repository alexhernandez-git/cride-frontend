import React, { useContext } from 'react'
import "static/assets/styles/containers/TeachersZone.scss"
import TeachersMenu from "src/components/Users/Teachers/TeachersZone/TeachersMenu"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"
import "static/assets/styles/components/Layout/ZoneSidebar.scss"
import TeachersProfileEdit from "src/components/Users/Teachers/TeachersZone/TeachersProfileEdit/TeachersProfileEdit"
import TeachersClasses from "src/components/Users/Teachers/TeachersZone/TeachersClasses/TeachersClasses"
import TeachersCalenadar from "src/components/Users/Teachers/TeachersZone/TeachersCalendar/TeachersCalendar"
import { AppContext } from "src/context/AppContext"
export default function TeachersZone() {
    const appContext = useContext(AppContext);
    return appContext.userProfile.loading ? 'Cargando...' : (
        <div className="min-vh-100 bg-light pb-5">

            <TeachersMenu />

            <div className="content-teachers-zone">
                <ScrollToTop />
                <Route exact path="/myzone/teacher" component={TeachersProfileEdit} />
                <Route exact path="/myzone/teacher/classes" component={TeachersClasses} />
                {/* <Route exact path="/myzone/teacher/calendar" component={TeachersCalenadar} /> */}
            </div>
        </div>
    )
}
