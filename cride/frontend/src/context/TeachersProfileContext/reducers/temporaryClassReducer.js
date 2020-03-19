
export const temporaryClassReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TEMPORARY_CLASS':
            action.newClass.title = 'Clase'
            return [...state, action.newClass]
        case 'SET_TEMPORARY_CLASS':
            return action.classes
        case 'RESET_TEMPORARY_CLASS':
            return []
        default:
            return state;
    }
}