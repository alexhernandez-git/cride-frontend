import React from 'react'
import "static/assets/styles/components/Users/UsersZone/ZoneSidebar.scss"
import UsersMenu from "src/components/Users/UsersZone/UsersMenu"
export default function ZoneSidebar() {
    return (
        <>
            <div className="users-zone-sidebar shadow">
                <UsersMenu />
            </div>
        </>
    )
}
