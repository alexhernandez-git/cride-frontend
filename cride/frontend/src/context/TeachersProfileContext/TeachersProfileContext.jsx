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
        handleHideDetailsClassForm()
        setKey(0)
        setShowScheduleClass(false)
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
    const addTemporaryClass = () => {
        dispatchClassesAssignedLeft({ type: 'REMOVE_ASSIGNED_CLASS' })

    }
    const removeTemporaryClass = () => {
        dispatchClassesAssignedLeft({ type: 'ADD_ASSIGNED_CLASS' })

    }
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
        setIsEdit(false)
        setShowDetailsClassForm(false)
    }
    const [isEdit, setIsEdit] = useState(false)

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
            addTemporaryClass,
            removeTemporaryClass,
            handleBuy,
            showDetailsClassForm,
            handleShowDetailsClassForm,
            handleHideDetailsClassForm,
            isEdit,
            setIsEdit
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}