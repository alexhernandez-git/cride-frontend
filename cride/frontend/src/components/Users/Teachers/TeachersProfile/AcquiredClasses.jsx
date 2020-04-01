import React, { useEffect, useRef, useContext, useState } from 'react';
import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherLessonsLeft.scss"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import { AppContext } from "src/context/AppContext"
const AcquiredClasses = () => {
    const acquiredClasses = useRef(null);
    const appContext = useContext(AppContext);
    const teacherContext = useContext(TeachersProfileContext);

    const [myPendingClasses, setMyPendingClasses] = useState(false);
    useEffect(() => {
        const result = teacherContext.teacherState.teacher.classes.filter((classEvent) => {
            if (classEvent.students.some(student => student.id == appContext.userProfile.user.id)) {
                return classEvent.accepted == false
            }
            return false;
        })
        setMyPendingClasses(result)
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
                    {console.log(teacherContext.teacherState)}
                    <span>Clases adquiridas</span>{' '}
                    <span className="">
                        {myPendingClasses && teacherContext.teacherState.teacher.eventClassesLeft ?
                            myPendingClasses.length + teacherContext.teacherState.teacher.eventClassesLeft.length
                            :
                            ''
                        }
                    </span>
                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default AcquiredClasses;
