import React, { createContext, useState, useEffect } from 'react'
export const TeachersProfileContext = createContext()

export const TeachersProfileProvider = ({ children }) => {

    // State de eventos
    const [calendarEvents, setCalendarEvents] = useState([])
    const addCalendarEvent = (newEvent) => {
        setCalendarEvents([...calendarEvents, newEvent])
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

    const handleClose = () => setShowScheduleClass(false);
    const handleShow = () => setShowScheduleClass(true);

    const [classPrice, setClassPrice] = useState(0);
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

        setSelectedClasses({
            selected: 0,
            price: 0,
        })
    }, []);



    const selectClasses = (classesSelected) => {
        setSelectedClasses({
            selected: classesSelected.classes,
            price: classesSelected.price,
        })
    }

    const getInvitationEarnings = () => {
        return Math.round(classPrice * 0.25)
    }


    return (
        <TeachersProfileContext.Provider value={{
            calendarEvents,
            setCalendarEvents,
            addCalendarEvent,
            lessonsLeft,
            addClass,
            removeClass,
            addLessonsLeft,
            showScheduleClass,
            businessHours,
            handleClose,
            handleShow,
            classPrice,
            calcPriceClass,
            selectedClasses,
            selectClasses,
            getInvitationEarnings,
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}