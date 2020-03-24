export const ADD_CLASS = 'ADD_CLASS'
export const REMOVE_CLASS = 'REMOVE_CLASS'
export const ADD_CLASSES_LEFT = 'ADD_CLASSES_LEFT'
export const SET_CLASSES_LEFT = 'SET_CLASSES_LEFT'

const addClass = (state) => {
    let classes = state - 1
    return classes
}
const removeClass = (state) => {
    let classes = state + 1
    return classes
}

export const classesLeftReducer = (state, action) => {

    switch (action.type) {
        case ADD_CLASS:
            return addClass(state)
        case REMOVE_CLASS:
            return removeClass(state)
        case SET_CLASSES_LEFT:
            console.log('classesLeft :', action.classesAssignedLeft + state)
            return action.classesAssignedLeft + state
        default:
            return state;
    }
}