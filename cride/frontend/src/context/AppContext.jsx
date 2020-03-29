import React, { createContext, useState } from 'react'
export const AppContext = createContext()
import { userReducer } from './reducers/userReducer'
export const AppProvider = ({ children }) => {

    const initialUser = {
        loading: true,
        error: '',
        user: {
            name: '',
            surname: '',
            email: '',
            friends: [],
            teacher: false
        }

    }
    const [user, dispatch] = useReducer(userReducer, initialUser);
    useEffect(() => {
        dispatch({
            type: 'FETCH_SUCCESS', payload: {
                loading: true,
                error: '',
                user: {
                    name: 'Alex',
                    surname: 'Hernandez',
                    email: 'ah20456@gmail.com',
                    friends: [
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
                    teacher: false
                }

            }
        })

    }, []);
    return (
        <AppContext.Provider value={{
            user,
        }}>
            {children}
        </AppContext.Provider>
    )
}