import React, { createContext, useState, useEffect, useReducer } from 'react'
export const TeachersClassesContext = createContext()
import {
    classesReducer,

} from 'src/context/teachersZoneContext/reducers/classesReducer'

export const TeachersClassesProvider = ({ children }) => {
    const initialClasses = {
        classesConfirmed: [],
        classesToBeConfirmed: [],
        isFetching: false,
        hasError: false
    }


    const [classes, dispatch] = useReducer(classesReducer, initialClasses)
    useEffect(() => {

        dispatch({
            type: 'CLASSES_CONFIRMED_REQUEST',
        });
        dispatch({
            type: 'CLASSES_CONFIRMED_SUCCESS',
            payload: [
                {
                    id: Math.random().toString(36).substr(2),
                    classEvent: [
                        {
                            id: Math.random().toString(36).substr(2),
                            title: 'Clase',
                            start: new Date(),

                        }
                    ],
                    students: [
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Marcos',
                            surname: 'Sanchez',
                            isAdmin: true
                        },
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Adria',
                            surname: 'Camins',
                            isAdmin: false
                        }
                    ],
                    createdDate: new Date(),
                    confirmedDate: new Date()
                },
                {
                    id: Math.random().toString(36).substr(2),
                    classEvent: [
                        {
                            id: Math.random().toString(36).substr(2),
                            title: 'Clase',
                            start: new Date(),
                        }
                    ],
                    students: [
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Paco',
                            surname: 'Paquez',
                            isAdmin: true
                        },
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Alex',
                            surname: 'Hernandez',
                            isAdmin: false
                        }
                    ],
                    createdDate: new Date(),
                    confirmedDate: new Date()
                }
            ]

        });
        // Classes to be confirmed
        dispatch({
            type: 'CLASSES_TO_BE_CONFIRMED_REQUEST',
        });
        dispatch({
            type: 'CLASSES_TO_BE_CONFIRMED_SUCCESS',
            payload: [
                {
                    id: Math.random().toString(36).substr(2),
                    classEvent: [
                        {
                            id: Math.random().toString(36).substr(2),
                            title: 'Clase',
                            start: new Date(),
                        }
                    ],
                    students: [
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Marcos',
                            surname: 'Sanchez',
                            isAdmin: true
                        }
                    ],
                    createdDate: new Date(),
                    confirmedDate: null
                },
                {
                    id: Math.random().toString(36).substr(2),
                    classEvent: [
                        {
                            id: Math.random().toString(36).substr(2),
                            title: 'Clase',
                            start: new Date(),
                        }
                    ],
                    students: [
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Paco',
                            surname: 'Paquez',
                            isAdmin: true
                        },
                        {
                            id: Math.random().toString(36).substr(2),
                            name: 'Marcos',
                            surname: 'Sanchez',
                            isAdmin: false
                        }
                    ],
                    createdDate: new Date(),
                    confirmedDate: null
                }
            ]

        });
    }, []);


    return (
        <TeachersClassesContext.Provider value={{
            classes,
            dispatch
        }}>
            {children}
        </TeachersClassesContext.Provider>
    )
}