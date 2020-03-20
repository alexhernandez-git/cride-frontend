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

export const TeachersProfileProvider = ({ children }) => {
    // Your classes
    const [myPendingClassState, dispatchMyPendingClass] = useReducer(myClassReducer, []);

    // Temporary classes
    const [temporaryClassState, dispatchTemporaryClass] = useReducer(temporaryClassReducer, []);

    // State de lecciones restantes
    const [classesLeftState, dispatchClassesLeft] = useReducer(classesLeftReducer, 0);

    // State buisness hours
    const [businessHours, setBusinessHours] = useState([ // specify an array instead
        {
            daysOfWeek: [1], // Monday, Tuesday, Wednesday
            startTime: '08:00', // 8am
            endTime: '18:00' // 6pm
        },
        {
            daysOfWeek: [2], // Thursday, Friday
            startTime: '10:00', // 10am
            endTime: '16:00' // 4pm
        },
        {
            daysOfWeek: [3], // Thursday, Friday
            startTime: '10:00', // 10am
            endTime: '16:00' // 4pm
        },
        {
            daysOfWeek: [4], // Thursday, Friday
            startTime: '10:00', // 10am
            endTime: '16:00' // 4pm
        },
        {
            daysOfWeek: [5], // Thursday, Friday
            startTime: '10:00', // 10am
            endTime: '16:00' // 4pm
        },
        {
            daysOfWeek: [0], // Thursday, Friday
            startTime: '10:00', // 10am
            endTime: '16:00' // 4pm
        }
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
        }
    }, [key])
    const handleNext = () => {
        if (key <= 1) {
            if (selectedClasses > 0) {
                setKey(parseInt(key) + 1)

            }
        }
    }
    const handleClose = () => {

        setKey(0)
        setShowScheduleClass(false)
    };
    const handleShow = () => {

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

    const [classesAssignedLeft, setClassesAssignedLeft] = useState(0)

    const selectClasses = (classesSelected) => {
        setSelectedClasses(classesSelected)
        setClassesAssignedLeft(classesSelected)

    }
    // State de asignacion temporal de clases
    const addTemporaryClass = () => {
        let classesAssigned = classesAssignedLeft - 1
        setClassesAssignedLeft(classesAssigned)
    }
    const removeTemporaryClass = () => {
        let classesAssigned = classesAssignedLeft + 1
        setClassesAssignedLeft(classesAssigned)
    }
    const handleBuy = () => {
        dispatchMyPendingClass({ type: 'MERGE_MY_PENDING_CLASS', tempClasses: temporaryClassState })

        dispatchTemporaryClass({ type: 'RESET_TEMPORARY_CLASS' })

        dispatchClassesLeft({
            type: 'SET_CLASSES_LEFT',
            classesAssignedLeft: classesAssignedLeft
        })
        // setLessonsLeft(lessonsLeft + classesAssignedLeft)
        setClassesAssignedLeft(0)
        setSelectedClasses(0)
        handleClose()
    }
    const [showDetailsClassForm, setShowDetailsClassForm] = useState(false)
    const handleShowDetailsClassForm = () => {
        setShowDetailsClassForm(true)
    }
    const handleHideDetailsClassForm = () => {
        setShowDetailsClassForm(false)
    }
    const [classData, setClassData] = useState({
        id: Math.random().toString(36).substr(2),
        title: '',
        start: null,
        description: 'fewafawefawe'
    })


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
            classData,
            setClassData
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}