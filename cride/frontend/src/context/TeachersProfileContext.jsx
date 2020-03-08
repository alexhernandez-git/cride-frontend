import React, { createContext, useState, useEffect } from 'react'
export const TeachersProfileContext = createContext()

export const TeachersProfileProvider = ({ children }) => {

    // State de eventos
    const [assignedClass, setAssignedClass] = useState([])
    const addAssignedClass = (newEvent) => {
        if (Array.isArray(newEvent)) {
            setAssignedClass([...assignedClass, ...newEvent])
        } else {
            setAssignedClass([...assignedClass, newEvent])

        }

    }
    // State de lecciones restantes
    const [lessonsLeft, setLessonsLeft] = useState(null)
    useEffect(() => {
        setLessonsLeft(0)
    }, []);
    const addClass = () => {
        let lessons = lessonsLeft - 1
        setLessonsLeft(lessons)
    }
    const removeClass = () => {
        let lessons = lessonsLeft + 1
        setLessonsLeft(lessons)
    }
    const addLessonsLeft = (num) => {

        let number = parseInt(num)
        let lessons = number + lessonsLeft;

        setLessonsLeft(lessons)

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
    const [selectedClasses, setSelectedClasses] = useState({});
    useEffect(() => {
        setSelectedClasses(0)
    }, []);


    const [classesAssignedLeft, setClassesAssignedLeft] = useState(0)

    const selectClasses = (classesSelected) => {
        setSelectedClasses(classesSelected)
        setClassesAssignedLeft(classesSelected)

    }
    // State de asignacion temporal de clases
    const [assignedTemporaryClass, setAssignedTemporaryClass] = useState([])
    useEffect(() => {

    }, [])
    const addAssignedTemporaryClass = (newEvent) => {

        setAssignedTemporaryClass([...assignedTemporaryClass, newEvent])
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
        addAssignedClass(assignedTemporaryClass)
        setAssignedTemporaryClass([])
        setLessonsLeft(lessonsLeft + classesAssignedLeft)
        setClassesAssignedLeft(0)
        setSelectedClasses(0)
        handleClose()
    }

    return (
        <TeachersProfileContext.Provider value={{
            assignedClass,
            setAssignedClass,
            addAssignedClass,
            lessonsLeft,
            addClass,
            removeClass,
            addLessonsLeft,
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
            classesAssignedLeft,
            assignedTemporaryClass,
            setAssignedTemporaryClass,
            addAssignedTemporaryClass,
            addTemporaryClass,
            removeTemporaryClass,
            handleBuy
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}