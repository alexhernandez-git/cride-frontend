import React from 'react'
import "static/assets/styles/components/Users/Teachers/TeachersZone/TeachersMenu.scss"
import "static/assets/styles/components/Users/Teachers/TeachersZone/TeachersZone.scss"
import TeachersMenu from "src/components/Users/Teachers/TeachersZone/TeachersMenu"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"
import "static/assets/styles/components/Layout/ZoneSidebar.scss"

export default function TeachersZone() {
    return (
        <>
            <div className="zone-sidebar shadow">

                <TeachersMenu />

            </div>
            <div className="content-teachers-zone">

                <ScrollToTop />
                <Route exact path="/myzone/teacher/profile" component={() => <h1>Profesor</h1>} />

            </div>
        </>
    )
}
