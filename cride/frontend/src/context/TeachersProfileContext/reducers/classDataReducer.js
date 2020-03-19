const ADD_MY_PENDING_CLASSCLASS = 'ADD_MY_PENDING_CLASS'


export const classDataReducer = (state, action) => {
    switch (action.type) {
        case ADD_MY_PENDING_CLASSCLASS:
            action.myPendingClass.title = 'Pendiente'
            return addMyPendingClass(action.myPendingClass, state)
        default:
            return state;
    }
}