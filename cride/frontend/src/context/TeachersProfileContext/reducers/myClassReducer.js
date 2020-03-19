const ADD_MY_PENDING_CLASSCLASS = 'ADD_MY_PENDING_CLASS'
const MERGE_MY_PENDING_CLASS = 'MERGE_MY_PENDING_CLASS'
const SET_MY_PENDING_CLASS = 'SET_MY_PENDING_CLASS'

const addMyPendingClass = (myPendingClass, state) => {
    if (Array.isArray(myPendingClass)) {
        return [...state, ...myPendingClass]
    } else {
        return [...state, myPendingClass]
    }

}

export const myClassReducer = (state, action) => {
    switch (action.type) {
        case ADD_MY_PENDING_CLASSCLASS:
            action.myPendingClass.title = 'Pendiente'
            return addMyPendingClass(action.myPendingClass, state)
        case MERGE_MY_PENDING_CLASS:
            action.tempClasses.map((tempClass) => {
                tempClass.title = 'Pendiente'
            })
            return [...state, ...action.tempClasses]
        case SET_MY_PENDING_CLASS:
            return action.myPendingClass
        default:
            return state;
    }
}