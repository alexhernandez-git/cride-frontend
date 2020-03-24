
export const temporaryClassReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TEMPORARY_CLASS':
            return [...state, action.classData]
        case 'UPDATE_TEMPORARY_CLASS':
            const index = state.findIndex(event => event.id === action.event.id);
            state[index].start = action.event.start
            return state
        case 'DELETE_TEMPORARY_CLASS':
            const index1 = state.findIndex(event => event.id === action.classData.id);
            state.splice(index1, 1)
            return state
        case 'SET_TEMPORARY_CLASS':
            return action.classes
        case 'RESET_TEMPORARY_CLASS':
            return []
        default:
            return state;
    }
}