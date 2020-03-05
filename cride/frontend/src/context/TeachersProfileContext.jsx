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
    return (
        <TeachersProfileContext.Provider value={{
            calendarEvents,
            setCalendarEvents,
            addCalendarEvent,
            lessonsLeft,
            addClass,
            removeClass,
            addLessonsLeft
        }}>
            {children}
        </TeachersProfileContext.Provider>
    )
}