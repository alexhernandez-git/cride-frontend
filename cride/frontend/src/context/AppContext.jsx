import React, { createContext, useState } from 'react'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // const [classAcquired, setClassAcquired] = useState([])
    // const addClass = element => {
    //     setClassAcquired([...classAcquired, element])
    // }
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}