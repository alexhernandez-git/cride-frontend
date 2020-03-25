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
    requestDateChangeReducer,
} from './reducers/requestDateChangeReducer'
export const TeachersProfileProvider = ({ children }) => {
    // Your classes
    const [myPendingClassState, dispatchMyPendingClass] = useReducer(myClassReducer, []);

    // Temporary classes
    const [temporaryClassState, dispatchTemporaryClass] = useReducer(temporaryClassReducer, []);

    // State de lecciones restantes
    const [classesLeftState, dispatchClassesLeft] = useReducer(classesLeftReducer, 0);

    // Reducer de classes assigned left
    const [classesAssignedLeft, dispatchClassesAssignedLeft] = useReducer(classesAssignedLeftReducer, []);

    // State buisness hours
    const [businessHours, setBusinessHours] = useState([ // specify an array instead

        {
            daysOfWeek: [0],
            startTime: '08:00',
            endTime: '18:00'
        },
        {
            daysOfWeek: [1],
            startTime: '08:00',
            endTime: '18:00'
        },
        {
            daysOfWeek: [2],
            startTime: '10:00',
            endTime: '16:00'
        },
        {
            daysOfWeek: [3],
            startTime: '10:00',
            endTime: '16:00'
        },
        {
            daysOfWeek: [4],
            startTime: '10:00',
            endTime: '16:00'
        },
        {
            daysOfWeek: [5],
            startTime: '10:00',
            endTime: '16:00'
        },
        {
            daysOfWeek: [6],
            startTime: '13:00',
            endTime: '16:00'
        },

    ])
    // State of selected classes
    const [selectedClasses, setSelectedClasses] = useState(0);

    //State de show modal scheduleClass
    const [showScheduleClass, setShowScheduleClass] = useState(false);


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
        if (key <= 1) {
            if (selectedClasses > 0) {
                setKey(parseInt(key) + 1)

            }
        }
    }
    const handlePrevious = () => {


        if (selectedClasses > 0) {
            setKey(parseInt(key) - 1)

        }
    }
    const handleClose = () => {
        if (key > 0) {
            if (confirm('¿Estas seguro?, si sales perderas todos los cambios.')) {
                handleHideDetailsClassForm()
                setKey(0)
                setShowScheduleClass(false)
            }
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
        console.log('Classes left: ', classesAssignedLeft.length);

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
    }
    const handleHideDetailsClassForm = () => {
        setInviteStudentsState(false)
        setIsEdit(false)
        setShowDetailsClassForm(false)
        resetStudents()
    }
    const [isEdit, setIsEdit] = useState(false)
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
    const [studentState, dispatchStudents] = useReducer(studentsReducer, initialStudents, init);

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
        classData.students = studentState.students
        resetStudents()
        console.log('Class Data: ', classData);

        dispatchTemporaryClass({
            type: 'UPDATE_TEMPORARY_CLASS',
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
    const [requestDateChangeState, dispatchRequestDateChange] = useReducer(requestDateChangeReducer, {})
    const addRequestDateChange = (classData) => {
        dispatchRequestDateChange({ type: 'ADD_REQUEST_DATE_CHANGE', classData })
    }
    return (
        <TeachersProfileContext.Provider value={{
            myPendingClassState,
            dispatchMyPendingClass,
            classesLeftState,
            dispatchClassesLeft,
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
            addRequestDateChange
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}