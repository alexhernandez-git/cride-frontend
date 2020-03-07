import React, { useEffect, useRef } from 'react';
import "static/assets/styles/components/Teachers/TeachersProfile/TeacherLessonsLeft.scss"

import { TeachersProfileContext } from "src/context/TeachersProfileContext"
const TeachersLessonsLeft = () => {
    const professorsLessonsLeft = useRef(null);
    useEffect(() => {

        const handleScroll = () => {
            let scroll = document.body.getBoundingClientRect().y

            if (scroll < '-750') {

                professorsLessonsLeft.current.classList.add('lessons-fixed')

            } else {
                professorsLessonsLeft.current.classList.remove('lessons-fixed')

            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    return (
        <TeachersProfileContext.Consumer>
            {context => (
                <div ref={professorsLessonsLeft} className="teacher-lessons-left shadow rounded bg-gradient-green text-white font-weight-light">
                    <span>Clases adquiridas</span>{' '}
                    <span className="">{context.lessonsLeft}</span>
                </div>
            )}
        </TeachersProfileContext.Consumer>
    );
}

export default TeachersLessonsLeft;
