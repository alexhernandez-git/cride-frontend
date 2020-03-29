import React, { useEffect, useRef } from 'react';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherLessonsLeft.scss"

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
const AcquiredClasses = () => {
    const acquiredClasses = useRef(null);
    useEffect(() => {

        const handleScroll = () => {
            let scroll = document.body.getBoundingClientRect().y

            if (scroll < '-750') {

                acquiredClasses.current.classList.add('lessons-fixed')

            } else {
                acquiredClasses.current.classList.remove('lessons-fixed')

            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    return (
        <TeachersProfileContext.Consumer>

            {teacherContext => (

                < div ref={acquiredClasses} className="teacher-lessons-left shadow rounded bg-gradient-green text-white font-weight-light rounded-pill">
                    {
                        console.log(teacherContext)
                    }
                    <span>Clases adquiridas</span>{' '}
                    <span className="">{teacherContext.teacherProfile.teacher.myPendingClasses.length + teacherContext.teacherProfile.teacher.eventClassesLeft.length}</span>
                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default AcquiredClasses;
