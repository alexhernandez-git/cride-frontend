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
            type: 'CLASSES_REQUEST',
        });
        dispatch({
            type: 'CLASSES_CONFIRMED_SUCCESS',
            payload: [
                {
                    id: Math.random().toString(36).substr(2),
                    title: 'Clase',
                    start: new Date().toString(),
                    description: 'Quiero aprender programación en C#',
                    students: [
                        {
                            user: {
                                id: Math.random().toString(36).substr(2),
                                name: 'Marcos',
                                surname: 'Sanchez',
                                email: 'alex@gmail.com',
                            },
                            isAdmin: true
                        },
                        {
                            user: {
                                id: Math.random().toString(36).substr(2),
                                name: 'Adria',
                                surname: 'Camins',
                                email: 'adria@gmail.com',
                            },
                            isAdmin: false
                        }
                    ],
                    createdDate: new Date(),
                    confirmedDate: new Date()

                }
            ]
        });
        dispatch({
            type: 'CLASSES_TO_BE_CONFIRMED_SUCCESS',
            payload: [
                {
                    id: Math.random().toString(36).substr(2),
                    title: 'Clase',
                    start: new Date().toString(),
                    description: 'Quiero aprender programación en C#',
                    students: [
                        {
                            user: {
                                id: Math.random().toString(36).substr(2),
                                name: 'Marcos',
                                surname: 'Sanchez',
                                email: 'alex@gmail.com',
                            },

                            isAdmin: true
                        },
                        {
                            user: {
                                id: Math.random().toString(36).substr(2),
                                name: 'Adria',
                                surname: 'Camins',
                                email: 'adria@gmail.com',
                            },
                            isAdmin: false
                        }
                    ],
                    createdDate: new Date(),
                    confirmedDate: new Date()

                }
            ]
        });
    }, []);

    const confirmClass = data => {
        dispatch({
            type: 'CONFIRM_CLASS',
            payload: data
        })
    }
    const cancelClass = data => {
        dispatch({
            type: 'CANCEL_CLASS_CONFIRMED',
            payload: data
        })
    }
    const discardClass = data => {
        dispatch({
            type: 'CANCEL_CLASS_TO_BE_CONFIRMED',
            payload: data
        })
    }

    return (
        <TeachersClassesContext.Provider value={{
            classes,
            dispatch,
            confirmClass,
            cancelClass,
            discardClass
        }}>
            {children}
        </TeachersClassesContext.Provider>
    )
}