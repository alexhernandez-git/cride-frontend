import React, { createContext, useState, useEffect, useReducer } from 'react'
export const TeachersProfileContext = createContext()
import moment from 'moment'

import {
    temporaryClassReducer,
} from './reducers/temporaryClassReducer'
import {
    classesAssignedLeftReducer,
} from './reducers/classesAssignedLeftReducer'

import {
    teacherProfileReducer,
} from './reducers/teacherProfileReducer'

export const TeachersProfileProvider = ({ children }) => {



    //State de show modal scheduleClass
    const [showScheduleClass, setShowScheduleClass] = useState(false);


    const initialState = {
        loading: true,
        error: '',
        teacher: {
            name: '',
            surname: '',
            rating: null,
            classPrice: null,
            presentation: '',
            videoPresentation: '',
            teach: [],
            idioms: [],
            skills: [],
            workExperience: [],
            academicExperience: [],
            businessHours: [],
            reservedClasses: [],
            myAcceptedClasses: [],
            myPendingClasses: [],
            eventClassesLeft: [],
            ratings: []
        }
    }

    const [teacherProfile, dispatch] = useReducer(teacherProfileReducer, initialState)

    useEffect(() => {
        dispatch({
            type: 'FETCH_SUCCESS', payload: {
                name: 'Alex',
                surname: 'Hernandez',
                rating: 4.7,
                classPrice: 19.99,
                presentation: 'Hola me llamo Alex Hernandez y soy programador fullstack con amplios conocimientos de HTML, CSS, JavaScript, React, PHP, Python, Django, MySQL, Postgresql, Ubuntu, etc...',
                videoPresentation: 'https://www.youtube.com/embed/l0s6ZLkV-U0',
                teach: [
                    {
                        id: Math.random().toString(36).substr(2),
                        subjectValue: 'Desarrollo con Swift'
                    },
                    {
                        id: Math.random().toString(36).substr(2),
                        subjectValue: 'Desarrollo con React'
                    },
                    {
                        id: Math.random().toString(36).substr(2),
                        subjectValue: 'Desarrollo con Angular'
                    },
                ],
                idioms: [
                    {
                        id: "wcppkede79c",
                        languageValue: "hr",
                        languageLabel: "Croatian",
                        levelValue: "b1",
                        levelLabel: "B1, Usuario independiente",
                    },
                    {
                        id: "ar44m6450dl",
                        languageValue: "es",
                        languageLabel: "Spanish; Castilian",
                        levelValue: "b1",
                        levelLabel: "B1, Usuario independiente",
                    }
                ],
                skills: [
                    {
                        id: Math.random().toString(36).substr(2),
                        skillValue: 'HTML',
                        levelValue: 100
                    }
                ],
                workExperience: [
                    {
                        id: "uljz5zio2fj",
                        title: "Programador frontend",
                        company: "Microsoft",
                        currentWorking: true,
                        startDate: moment('Sun Mar 29 2020 17: 46: 56 GMT + 0200'),
                        endDate: false,
                        description: "En ese trabajo cumplía las funciónes de programador frontend",
                    },
                    {
                        id: "gx6s2r3urlv",
                        title: "Programador backend",
                        company: "Apple",
                        currentWorking: false,
                        startDate: moment('Tue Feb 12 2019 00: 00: 00 GMT + 0100'),
                        endDate: moment('Thu Jun 13 2019 00: 00: 00 GMT + 0200'),
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor inventore natus est hic earum adipisci architecto explicabo harum, fuga necessitatibus ab voluptatibus illo voluptatem ratione, exercitationem voluptate, perspiciatis velit repudiandae."
                    }
                ],
                academicExperience: [
                    {
                        id: "px41nfl2vhh",
                        title: "Grado Superior de administración de sistemas",
                        school: "CESF",
                        currentStudiesing: true,
                        startDate: moment('Wed Jan 03 2018 00:00:00 GMT+0100'),
                        endDate: false,
                        description: "En esta escuela aprendi todo lo relacionado con la administración de sistemas informaticos"
                    },
                    {
                        id: "mwcr7atzbca",
                        title: "Grado Medio de administración de sistemas",
                        school: "CESF",
                        currentStudiesing: false,
                        startDate: moment('Wed Sep 21 2016 00:00:00 GMT+0200'),
                        endDate: moment('Thu Jun 21 2018 00:00:00 GMT+0200'),
                        description: "En esta escuela aprendi todo lo relacionado con la administración de sistemas informaticos",
                    }
                ],
                businessHours: [
                    {
                        daysOfWeek: [0],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [0],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [1],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [1],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [2],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [2],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [3],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [3],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [4],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [4],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [4],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [4],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [5],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [5],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                    {
                        daysOfWeek: [6],
                        startTime: '09:00',
                        endTime: '14:00'
                    },
                    {
                        daysOfWeek: [6],
                        startTime: '16:00',
                        endTime: '19:00'
                    },
                ],
                reservedClasses: [
                    {
                        id: 'fudhnl6tja5',
                        title: 'Reservada',
                        start: Date.now() + 6.04e+8 / 2.4,
                        end: null,
                        constraint: 'businessHours',
                        description: 'Esta es una clase aceptada',
                        students: [
                            {
                                id: "fudhnl6tja5",
                                name: "DOMINGO",
                                surname: "CAYUELA",
                                isAdmin: true,
                                isInvited: false,
                            },
                            {
                                id: "opopmuiueib",
                                name: "SALVADOR",
                                surname: "POPESCU",
                                isAdmin: false,
                                isInvited: false,
                            },
                            {
                                id: "g3kr0ue1c7q",
                                name: "ALVARO",
                                surname: "MORO",
                                isAdmin: false,
                                isInvited: false,
                            },
                            {
                                id: "picuplfo8n",
                                name: "CESAR",
                                surname: "RIOJA",
                                isAdmin: false,
                                isInvited: false,
                            }
                        ]
                    },
                    {
                        id: 'fudhnl6tja5',
                        title: 'Reservada',
                        start: Date.now() + 6.04e+8 / 1.4,
                        end: null,
                        constraint: 'businessHours',
                        description: 'Esta es una clase aceptada',
                        students: [
                            {
                                id: "fudhnl6tja5",
                                name: "DOMINGO",
                                surname: "CAYUELA",
                                isAdmin: true,
                                isInvited: false,
                            },
                            {
                                id: "opopmuiueib",
                                name: "SALVADOR",
                                surname: "POPESCU",
                                isAdmin: false,
                                isInvited: false,
                            },
                            {
                                id: "g3kr0ue1c7q",
                                name: "ALVARO",
                                surname: "MORO",
                                isAdmin: false,
                                isInvited: false,
                            },
                            {
                                id: "picuplfo8n",
                                name: "CESAR",
                                surname: "RIOJA",
                                isAdmin: false,
                                isInvited: false,
                            }
                        ]
                    }
                ],
                myAcceptedClasses: [
                    {
                        id: 'fudhnl6tja5',
                        title: 'Aceptada',
                        start: Date.now() + 6.04e+8,
                        end: null,
                        constraint: 'businessHours',
                        description: 'Esta es una clase aceptada',
                        students: [
                            {
                                id: "fudhnl6tja5",
                                name: "DOMINGO",
                                surname: "CAYUELA",
                                isAdmin: true,
                                isInvited: false,
                            },
                            {
                                id: "opopmuiueib",
                                name: "SALVADOR",
                                surname: "POPESCU",
                                isAdmin: false,
                                isInvited: false,
                            },
                            {
                                id: "g3kr0ue1c7q",
                                name: "ALVARO",
                                surname: "MORO",
                                isAdmin: false,
                                isInvited: false,
                            },
                            {
                                id: "picuplfo8n",
                                name: "CESAR",
                                surname: "RIOJA",
                                isAdmin: false,
                                isInvited: false,
                            }
                        ]
                    }
                ],
                myPendingClasses: [],
                temporaryClasses: [],
                eventClassesLeft: [],
                ratings: [
                    {
                        user: {
                            name: 'Paco',
                            surname: 'De la Cruz'
                        },
                        rating: 4.7,
                        comment: 'Un buen tipo'
                    }
                ]
            }

        })

    }, []);

    setTimeout(() => {
        console.log(teacherProfile)

    }, 2000);
    // Temporary classes
    const [temporaryClasses, dispatchTemporaryClass] = useReducer(temporaryClassReducer, []);

    // Reducer de classes assigned left
    const [classesAssignedLeft, dispatchClassesAssignedLeft] = useReducer(classesAssignedLeftReducer, []);

    // State of selected classes
    const [selectedClasses, setSelectedClasses] = useState(0);


    const [key, setKey] = useState(0);
    useEffect(() => {

        if (key == 0) {
            dispatchTemporaryClass({ type: 'RESET_TEMPORARY_CLASS' })
            setSelectedClasses(0)
            dispatchClassesAssignedLeft({ type: 'SET_ASSIGNED_CLASS', classesSelected: 0 })
        }
    }, [key])
    const handleNext = () => {
        document.querySelector('.modal').scrollTop = 0

        if (key <= 1) {
            if (selectedClasses > 0) {
                setKey(parseInt(key) + 1)

            }
        }
    }
    const handlePrevious = () => {

        document.querySelector('.modal').scrollTop = 0

        if (selectedClasses > 0) {
            setKey(parseInt(key) - 1)

        }
    }
    const handleClose = () => {
        if (key > 0) {
            handleHideDetailsClassForm()
            setKey(0)
            setShowScheduleClass(false)
        } else {
            handleHideDetailsClassForm()
            setKey(0)
            setShowScheduleClass(false)
        }

    };
    const handleShow = () => {
        handleHideDetailsClassForm()
        setKey(0)
        setShowScheduleClass(true)
    };

    const calcPriceClass = (numClass) => {
        let finalPrice
        if (numClass > 5) {
            finalPrice = teacherProfile.teacher.classPrice / 1.5
        } else {
            finalPrice = teacherProfile.teacher.classPrice / 1.4
        }
        return Math.round(finalPrice)
    }

    const selectClasses = (classesSelected) => {
        setSelectedClasses(classesSelected)
        dispatchClassesAssignedLeft({ type: 'SET_ASSIGNED_CLASS', classesSelected: classesSelected })
    }
    // State de asignacion temporal de clases


    const handleBuy = () => {
        dispatch({ type: 'MERGE_MY_PENDING_CLASS', tempClasses: temporaryClasses })

        dispatchTemporaryClass({ type: 'RESET_TEMPORARY_CLASS' })

        dispatch({
            type: 'SET_CLASSES_LEFT',
            classesAssignedLeft: classesAssignedLeft.length
        })
        // setLessonsLeft(lessonsLeft + classesAssignedLeft)
        setSelectedClasses(0)
        dispatchClassesAssignedLeft({ type: 'SET_ASSIGNED_CLASS', classesSelected: 0 })

        handleClose()
    }
    const [showDetailsClassForm, setShowDetailsClassForm] = useState(false)
    const handleShowDetailsClassForm = () => {

        setShowDetailsClassForm(true)
        if (showScheduleClass) {
            document.querySelector('.modal').scrollTop = 0
        }
    }
    const handleHideDetailsClassForm = () => {
        setInviteStudentsState(false)
        setIsEdit(false)
        setShowDetailsClassForm(false)

    }
    const [isEdit, setIsEdit] = useState(false)
    const [isMyClass, setIsMyClass] = useState(false)
    const [inviteStudentsState, setInviteStudentsState] = useState(false)

    const handleClickInviteStudents = () => {
        if (inviteStudentsState) {
            setInviteStudentsState(false)
        } else {
            setInviteStudentsState(true)
        }
    }

    // const handleDeleteInvited = (student) => {
    //     if (confirm(`¿Eliminar invitación de ${student.name}?`)) {
    //         dispatchStudents({ type: 'DELETE_INVITED', student })
    //     }
    // }

    const addMyPendingClass = (classData) => {
        classData.students = studentState.students
        dispatch({
            type: 'ADD_MY_PENDING_CLASS',
            myPendingClass: classData
        })

        dispatch({
            type: 'ADD_CLASS',
        })
    }
    const addTemporaryClassEvent = (classData) => {
        classData.students = studentState.students

        dispatchClassesAssignedLeft({ type: 'REMOVE_ASSIGNED_CLASS' })
        dispatchTemporaryClass({
            type: 'ADD_TEMPORARY_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const updateTemporaryClassEvent = (classData) => {
        console.log('Class Data: ', classData);

        dispatchTemporaryClass({
            type: 'UPDATE_TEMPORARY_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const updatePendingClassEvent = (classData) => {
        console.log('Class Data: ', classData);

        dispatch({
            type: 'UPDATE_MY_PENDING_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const updateMyAcceptedClass = (classData) => {
        console.log('Class Data: ', classData);

        dispatch({
            type: 'UPDATE_MY_ACCEPTED_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const removeMyPendingClassEvent = (classData) => {
        dispatch({ type: 'REMOVE_CLASS' })
        dispatch({
            type: 'DELETE_MY_PENDING_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const removeTemporaryClassEvent = (classData) => {
        dispatchClassesAssignedLeft({ type: 'ADD_ASSIGNED_CLASS' })
        dispatchTemporaryClass({
            type: 'DELETE_TEMPORARY_CLASS',
            classData
        })
        handleHideDetailsClassForm()

    }
    const [isDateEditing, setIsDateEditing] = useState(false)
    const [editableClassData, setEditableClassData] = useState(false)
    return (
        <TeachersProfileContext.Provider value={{
            teacherProfile,
            updateMyAcceptedClass,
            addMyPendingClass,
            removeMyPendingClassEvent,
            updatePendingClassEvent,
            showScheduleClass,
            key,
            setKey,
            handleClose,
            handleShow,
            handleNext,
            handlePrevious,
            calcPriceClass,
            selectedClasses,
            selectClasses,
            temporaryClasses,
            classesAssignedLeft,
            handleBuy,
            showDetailsClassForm,
            handleShowDetailsClassForm,
            handleHideDetailsClassForm,
            isEdit,
            setIsEdit,
            isMyClass,
            setIsMyClass,
            inviteStudentsState,
            setInviteStudentsState,
            handleClickInviteStudents,
            addTemporaryClassEvent,
            updateTemporaryClassEvent,
            removeTemporaryClassEvent,
            editableClassData,
            setEditableClassData,
            isDateEditing,
            setIsDateEditing,

        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}