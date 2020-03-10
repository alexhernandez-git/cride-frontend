import React from 'react'
import "static/assets/styles/components/Teachers/TeachersZone/ZoneSidebar.scss"
import TeachersMenu from "src/components/Teachers/TeachersZone/TeachersMenu"
export default function ZoneSidebar() {
    return (
        <>
            <div className="teachers-zone-sidebar shadow">
                <TeachersMenu />
            </div>
        </>
    )
}
