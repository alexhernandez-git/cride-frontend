import React from 'react'
import "static/assets/styles/components/Users/Teachers/TeachersZone/TeachersMenu.scss"
import "static/assets/styles/containers/TeachersZone.scss"
import TeachersMenu from "src/components/Users/Teachers/TeachersZone/TeachersMenu"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"
import "static/assets/styles/components/Layout/ZoneSidebar.scss"
import TeachersProfileEdit from "src/components/Users/Teachers/TeachersZone/TeachersProfileEdit/TeachersProfileEdit"
export default function TeachersZone() {
    return (
        <div className="min-vh-100 bg-light pb-5">

            <TeachersMenu />

            <div className="content-teachers-zone">

                <ScrollToTop />
                <Route exact path="/myzone/teacher" component={TeachersProfileEdit} />

            </div>
        </div>
    )
}
