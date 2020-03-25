
export const temporaryClassReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TEMPORARY_CLASS':
            return [...state, action.classData]
        case 'UPDATE_TEMPORARY_CLASS':
            console.log('State: ', state);
            console.log('action.classData: ', action.classData);

            const index = state.findIndex(event => event.id === action.classData.id);

            state[index].description = action.classData.description
            state[index].students = action.classData.students
            console.log('State[index]: ', state[index]);
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