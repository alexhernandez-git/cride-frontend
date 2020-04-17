import React, { useContext, useEffect } from 'react';

import "static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherCalendar.scss"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/ScheduleHour.scss"
import { IconContext } from "react-icons";

import { IoIosArrowBack } from "react-icons/io";
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
// import ClassModal from 'src/components/Users/Teachers/TeachersProfile/ClassModal';
export default function ScheduleHour() {
    const teacherContext = useContext(TeachersProfileContext);
    useEffect(() => {
        console.log(teacherContext.selectedClasses);

        if (teacherContext.selectedClasses == 1) {
            console.log(1);
            console.log(teacherContext.selectedClasses * teacherContext.teacherState.user.teacher.classPrice)
        } else if (teacherContext.selectedClasses == 5) {
            console.log(5);
            console.log('final-price: ', teacherContext.selectedClasses * (teacherContext.teacherState.user.teacher.classPrice / 1.5).toFixed(2))
        } else {
            console.log(10);
            console.log('final-price: ', teacherContext.selectedClasses * (teacherContext.teacherState.user.teacher.classPrice / 2).toFixed(2))
        }

    })
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="w-100 rounded">
                    <div className={teacherContext.showDetailsClassForm ? 'd-none' : 'd-block'}>
                        <div className="d-sm-flex justify-content-start align-items-center my-4">
                            <button
                                className="btn-outline-cancel bg-white rounded-pill mr-2 pr-3 pl-2 btn-sm-block"
                                style={{
                                    height: '40px'
                                }}
                                onClick={teacherContext.handlePrevious}
                            >
                                <IconContext.Provider value={{
                                    className: "cursor-ponter",
                                    size: '25px'
                                }}>
                                    <IoIosArrowBack /> Atras
                            </IconContext.Provider>

                            </button>


                        </div>
                        <div className="d-flex justify-content-center">

                            <a
                                className="btn btn-green text-white"
                                onClick={teacherContext.handleBuy}
                            >
                                Adquirir
                </a>
                        </div>
                    </div>
                </div>
            )}
        </TeachersProfileContext.Consumer>
    )
}
