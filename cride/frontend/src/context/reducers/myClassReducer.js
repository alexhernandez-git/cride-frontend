export const ADD_MY_CLASS = 'ADD_MY_CLASS'
export const MERGE_MY_CLASS = 'MERGE_MY_CLASS'
export const SET_MY_CLASS = 'SET_MY_CLASS'

const addMyClass = (newClass, state) => {
    if (Array.isArray(newClass)) {
        return [...state, ...newClass]
    } else {
        return [...state, newClass]
    }

}

export const myClassReducer = (state, action) => {
    switch (action.type) {
        case ADD_MY_CLASS:
            return addMyClass(action.newClass, state)
        case MERGE_MY_CLASS:
            return [...state, ...action.tempClasses]
        case SET_MY_CLASS:
            return action.myClassNew
        default:
            return state;
    }
}