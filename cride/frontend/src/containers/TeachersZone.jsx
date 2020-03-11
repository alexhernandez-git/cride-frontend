import React from 'react'
import "static/assets/styles/components/Teachers/TeachersZone/TeachersMenu.scss"
import "static/assets/styles/components/Teachers/TeachersZone/TeachersZone.scss"
import TeachersMenu from "src/components/Teachers/TeachersZone/TeachersMenu"
import { Route } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"

export default function TeachersZone() {
    return (
        <>
            <div>
                <TeachersMenu />

            </div>
            <div className="content-teachers-zone">

                <ScrollToTop />
                <Route exact path="/myzone/teacher/profile" component={() => <h1>Profesor</h1>} />

            </div>
        </>
    )
}
