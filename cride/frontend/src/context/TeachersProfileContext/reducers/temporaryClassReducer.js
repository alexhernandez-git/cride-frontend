
export const temporaryClassReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TEMPORARY_CLASS':
            console.log(action);

            return [...state, action.classData]
        case 'SET_TEMPORARY_CLASS':
            return action.classes
        case 'RESET_TEMPORARY_CLASS':
            return []
        default:
            return state;
    }
}