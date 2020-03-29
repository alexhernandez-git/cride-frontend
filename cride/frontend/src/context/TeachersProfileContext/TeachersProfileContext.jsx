import React, { createContext, useState, useEffect, useReducer } from 'react'
export const TeachersProfileContext = createContext()
import {
    classesLeftReducer
} from './reducers/classesLeftReducer'
import {
    myClassReducer,
} from './reducers/myClassReducer'
import {
    temporaryClassReducer,
} from './reducers/temporaryClassReducer'
import {
    classesAssignedLeftReducer,
} from './reducers/classesAssignedLeftReducer'
import { init, studentsReducer } from "./reducers/classStudentsReducer"
import {
    myAcceptedClassesReducer,
} from './reducers/myAcceptedClasses'
import {
    reservedClassesReducer,
} from './reducers/reservedClassesReducer'
export const TeachersProfileProvider = ({ children }) => {
    const [reservedClasses, dispatchReservedClass] = useReducer(reservedClassesReducer, [
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
    ])

    const [myAcceptedClasses, dispatchMyAcceptedClass] = useReducer(myAcceptedClassesReducer, [{
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
    }])
    // Your classes
    const [myPendingClassState, dispatchMyPendingClass] = useReducer(myClassReducer, []);

    // Temporary classes
    const [temporaryClassState, dispatchTemporaryClass] = useReducer(temporaryClassReducer, []);

    // State de lecciones restantes
    const [classesLeftState, dispatchClassesLeft] = useReducer(classesLeftReducer, []);

    // Reducer de classes assigned left
    const [classesAssignedLeft, dispatchClassesAssignedLeft] = useReducer(classesAssignedLeftReducer, []);

    // State buisness hours
    const [businessHours, setBusinessHours] = useState([ // specify an array instead

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
        // {
        //     daysOfWeek: [6],
        //     startTime: '09:00',
        //     endTime: '14:00'
        // },
        // {
        //     daysOfWeek: [6],
        //     startTime: '16:00',
        //     endTime: '19:00'
        // },

    ])
    // State of selected classes
    const [selectedClasses, setSelectedClasses] = useState(0);

    //State de show modal scheduleClass
    const [showScheduleClass, setShowScheduleClass] = useState(false);

    const [studentState, dispatchStudents] = useReducer(studentsReducer, initialStudents, init);


    const [key, setKey] = useState(0);
    useEffect(() => {

        if (key == 0) {
            dispatchTemporaryClass({ type: 'RESET_TEMPORARY_CLASS' })
            setSelectedClasses(0)
            dispatchClassesAssignedLeft({ type: 'SET_ASSIGNED_CLASS', classesSelected: 0 })
            resetStudents()
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

    const [classPrice, setClassPrice] = useState(20);

    const calcPriceClass = (numClass) => {
        let finalPrice
        if (numClass > 5) {
            finalPrice = classPrice / 1.5
        } else {
            finalPrice = classPrice / 1.4
        }
        return Math.round(finalPrice)
    }

    const selectClasses = (classesSelected) => {
        setSelectedClasses(classesSelected)
        dispatchClassesAssignedLeft({ type: 'SET_ASSIGNED_CLASS', classesSelected: classesSelected })
    }
    // State de asignacion temporal de clases


    const handleBuy = () => {
        dispatchMyPendingClass({ type: 'MERGE_MY_PENDING_CLASS', tempClasses: temporaryClassState })

        dispatchTemporaryClass({ type: 'RESET_TEMPORARY_CLASS' })

        dispatchClassesLeft({
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
        resetStudents()

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
    const initialStudents = {
        users: [
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
        ],
        students: [

            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',
                isAdmin: true,
            },

        ]
    }

    const handleInviteUser = (user) => {

        dispatchStudents({ type: 'INVITE_STUDENT', user })

    }
    const handleDeleteInvited = (student) => {
        if (confirm(`¿Eliminar invitación de ${student.name}?`)) {
            dispatchStudents({ type: 'DELETE_INVITED', student })
        }
    }
    const resetStudents = () => {
        dispatchStudents({ type: 'RESET', payload: initialStudents })
    }
    const addMyPendingClass = (classData) => {
        classData.students = studentState.students
        dispatchMyPendingClass({
            type: 'ADD_MY_PENDING_CLASS',
            myPendingClass: classData
        })

        dispatchClassesLeft({
            type: 'ADD_CLASS',
        })
    }
    const addTemporaryClassEvent = (classData) => {
        classData.students = studentState.students
        resetStudents()

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

        dispatchMyPendingClass({
            type: 'UPDATE_MY_PENDING_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const updateMyAcceptedClass = (classData) => {
        resetStudents()
        console.log('Class Data: ', classData);

        dispatchMyAcceptedClass({
            type: 'UPDATE_MY_ACCEPTED_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const removeMyPendingClassEvent = (classData) => {
        dispatchClassesLeft({ type: 'REMOVE_CLASS' })
        resetStudents()
        dispatchMyPendingClass({
            type: 'DELETE_MY_PENDING_CLASS',
            classData
        })
        handleHideDetailsClassForm()
    }
    const removeTemporaryClassEvent = (classData) => {
        dispatchClassesAssignedLeft({ type: 'ADD_ASSIGNED_CLASS' })
        resetStudents()
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
            reservedClasses,
            myAcceptedClasses,
            updateMyAcceptedClass,
            myPendingClassState,
            dispatchMyPendingClass,
            addMyPendingClass,
            removeMyPendingClassEvent,
            classesLeftState,
            dispatchClassesLeft,
            updatePendingClassEvent,
            showScheduleClass,
            businessHours,
            key,
            setKey,
            handleClose,
            handleShow,
            handleNext,
            handlePrevious,
            classPrice,
            calcPriceClass,
            selectedClasses,
            selectClasses,
            temporaryClassState,
            dispatchTemporaryClass,
            classesAssignedLeft,
            handleBuy,
            showDetailsClassForm,
            handleShowDetailsClassForm,
            handleHideDetailsClassForm,
            isEdit,
            setIsEdit,
            isMyClass,
            setIsMyClass,
            studentState,
            dispatchStudents,
            handleInviteUser,
            handleDeleteInvited,
            inviteStudentsState,
            setInviteStudentsState,
            handleClickInviteStudents,
            resetStudents,
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