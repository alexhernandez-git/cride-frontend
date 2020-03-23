import React, { createContext, useState, useEffect, useReducer } from 'react'
import { init, reducer } from "./reducers/classStudentsReducer"
export const AssignClassContext = createContext()

export const AssignClassProvider = ({ children }) => {
    const [inviteStudentsState, setInviteStudentsState] = useState(false)

    const handleClickInviteStudents = () => {
        if (inviteStudentsState) {
            setInviteStudentsState(false)
        } else {
            setInviteStudentsState(true)
        }
    }
    const initialStudents = {
        users: [
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
        students: [

            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',
                isAdmin: true,
            },

        ]
    }

    const handleInviteUser = (user) => {
        if (confirm(`¿Añadir a ${user.name}?`)) {

            dispatchStudents({ type: 'INVITE_STUDENT', user })
            setInviteStudentsState(false)

        }
    }
    const handleDeleteInvited = (student) => {
        if (confirm(`¿Eliminar invitación de ${student.name}?`)) {

            dispatchStudents({ type: 'DELETE_INVITED', student })

        }
    }
    const resetStudents = () => {
        dispatchStudents({ type: 'RESET', payload: initialStudents })
    }


    const [studentState, dispatchStudents] = useReducer(reducer, initialStudents, init);


    return (
        <AssignClassContext.Provider value={{
            studentState,
            dispatchStudents,
            handleInviteUser,
            handleDeleteInvited,
            inviteStudentsState,
            setInviteStudentsState,
            handleClickInviteStudents,
            resetStudents
        }}>
            {children}
        </AssignClassContext.Provider>
    )
}