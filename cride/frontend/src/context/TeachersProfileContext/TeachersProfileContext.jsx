import React, { createContext, useState, useEffect, useReducer } from 'react'
export const TeachersProfileContext = createContext()
import {
    classesLeftReducer,
    ADD_CLASS,
    REMOVE_CLASS,
    SET_CLASSES_LEFT
} from './reducers/classesLeftReducer'
import {
    myClassReducer,
    ADD_MY_CLASS,
    MERGE_MY_CLASS,
    SET_MY_CLASS,
} from './reducers/myClassReducer'

export const TeachersProfileProvider = ({ children }) => {
    // Your classes
    const [myClassState, dispatchMyClass] = useReducer(myClassReducer, []);
    const addMyClass = (newClass) => {
        dispatchMyClass({ type: ADD_MY_CLASS, newClass: newClass })
    }
    const setMyClass = (myClassNew) => {
        dispatchMyClass({ type: SET_MY_CLASS, myClassNew: myClassNew })
    }
    // Temporary classes
    const [temporaryClass, setTemporaryClass] = useState({
        classes: [],
    })
    // State de lecciones restantes
    const [classesLeftState, dispatchClassesLeft] = useReducer(classesLeftReducer, 0);

    const addClass = () => {
        dispatchClassesLeft({ type: ADD_CLASS })
    }
    const removeClass = () => {
        dispatchClassesLeft({ type: REMOVE_CLASS })

    }
    // State buisness hours
    const [businessHours, setBusinessHours] = useState()
    useEffect(() => {
        setBusinessHours([ // specify an array instead
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
    }, []);
    //State de show modal scheduleClass
    const [showScheduleClass, setShowScheduleClass] = useState(false);
    const [key, setKey] = useState(0);
    useEffect(() => {
        if (key == 0) {
            setTemporaryClass({
                classes: []
            })
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
    useEffect(() => {
        setClassPrice(20)
    }, []);
    const calcPriceClass = (numClass) => {
        let finalPrice
        if (numClass > 5) {
            finalPrice = classPrice / 1.5
        } else {
            finalPrice = classPrice / 1.4
        }
        return Math.round(finalPrice)
    }
    // State of selected classes
    const [selectedClasses, setSelectedClasses] = useState();
    useEffect(() => {
        setSelectedClasses(0)
    }, []);


    const [classesAssignedLeft, setClassesAssignedLeft] = useState(0)

    const selectClasses = (classesSelected) => {
        setSelectedClasses(classesSelected)
        setClassesAssignedLeft(classesSelected)

    }
    // State de asignacion temporal de clases
    const addMyTemporaryClass = (newEvent) => {
        setTemporaryClass({
            classes: [...temporaryClass.classes, newEvent]
        })
    }
    const addTemporaryClass = () => {
        let classesAssigned = classesAssignedLeft - 1
        setClassesAssignedLeft(classesAssigned)
    }
    const removeTemporaryClass = () => {
        let classesAssigned = classesAssignedLeft + 1
        setClassesAssignedLeft(classesAssigned)
    }
    const handleBuy = () => {
        console.log('temporaryClass ', temporaryClass.classes);

        dispatchMyClass({ type: MERGE_MY_CLASS, tempClasses: temporaryClass.classes })

        setTemporaryClass({
            classes: []
        })
        dispatchClassesLeft({
            type: SET_CLASSES_LEFT,
            classesAssignedLeft: classesAssignedLeft
        })
        // setLessonsLeft(lessonsLeft + classesAssignedLeft)
        setClassesAssignedLeft(0)
        setSelectedClasses(0)
        handleClose()
    }

    return (
        <TeachersProfileContext.Provider value={{
            myClassState,
            addMyClass,
            setMyClass,
            classesLeftState,
            addClass,
            removeClass,
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
            temporaryClass,
            setTemporaryClass,
            classesAssignedLeft,
            addMyTemporaryClass,
            addTemporaryClass,
            removeTemporaryClass,
            handleBuy
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}