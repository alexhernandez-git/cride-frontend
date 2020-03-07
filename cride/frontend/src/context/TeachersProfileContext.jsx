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

    const [classesPrice, setClassesPrice] = useState(0);
    useEffect(() => {
        setClassesPrice(26)
    }, []);
    // State of selected classes
    const [selectedClasses, setSelectedClasses] = useState({});
    useEffect(() => {

        setSelectedClasses({
            selected: 1,
            totalPrice: 20,
            totalDiscount: 0,
            finalPrice: 20,
            priceByClass: 20
        })
    }, []);

    const createTotalPrice = (classesSelected) => {
        var rest = classesSelected % 5;

        let discount
        let finalPrice
        let classPrice

        if (classesSelected >= 100) {
            discount = 2.00
        } else if (classesSelected >= 50) {
            discount = 1.95
        }
        else if (classesSelected >= 25) {
            discount = 1.85
        }
        else if (classesSelected >= 15) {
            discount = 1.75
        }
        else if (classesSelected >= 10) {
            discount = 1.50
        }
        else if (classesSelected >= 5) {
            discount = 1.25
        } else {
            discount = 2.05
        }

        if (rest == 0 && classesSelected > 1) {
            finalPrice = Math.round((classesPrice * classesSelected) / discount);
            discount = Math.round((classesPrice * classesSelected) - finalPrice);

            classPrice = Math.round(finalPrice / classesSelected);

        } else {

            classPrice = classesPrice

            finalPrice = classesPrice * classesSelected;
            discount = 0

        }
        classPrice = classesSelected == 0 ? classPrice = 0 : classPrice
        let total = classesPrice * classesSelected;


        return {
            total: total,
            discount: discount,
            finalPrice: finalPrice,
            classPrice: classPrice
        }
    }
    const handleChangeSelected = (value) => {

        if (value > 0 && Number.isInteger(parseInt(value)) || value == '') {
            if (value == '') value = 0
            var valueInt = parseInt(value);


            let result = createTotalPrice(valueInt)

            setSelectedClasses({
                selected: valueInt,
                totalPrice: result.total,
                totalDiscount: result.discount,
                finalPrice: result.finalPrice,
                priceByClass: result.classPrice
            })
        }
    }
    const handleAdd = () => {
        let valueInt = selectedClasses.selected + 1
        let result = createTotalPrice(valueInt)
        setSelectedClasses({
            selected: valueInt,
            totalPrice: result.total,
            totalDiscount: result.discount,
            finalPrice: result.finalPrice,
            priceByClass: result.classPrice
        })

    }
    const handleSub = () => {
        if (selectedClasses.selected > 0) {
            let valueInt = selectedClasses.selected - 1
            let result = createTotalPrice(valueInt)
            setSelectedClasses({
                selected: valueInt,
                totalPrice: result.total,
                totalDiscount: result.discount,
                finalPrice: result.finalPrice,
                priceByClass: result.classPrice
            })
        }
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
            selectedClasses,
            handleChangeSelected,
            handleAdd,
            handleSub,
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}