import React from 'react';
import "static/assets/styles/containers/TeachersZone.scss"

import ZoneSidebar from 'src/components/Teachers/TeachersZone/ZoneSidebar'
const TeachersZone = () => {
    return (
        <>
            <div className="teachers-zone-sidebar">
                <ZoneSidebar />
            </div>
            <div className="teachers-zone">

            </div>
        </>
    );
}

export default TeachersZone;
