

const addMyPendingClass = (myPendingClass, state) => {
    if (Array.isArray(myPendingClass)) {
        return [...state, ...myPendingClass]
    } else {
        return [...state, myPendingClass]
    }

}

export const myAcceptedClassesReducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST_ACCEPTED_CLASS':
            return state
        case 'UPDATE_MY_ACCEPTED_CLASS':
            console.log('State: ', state);
            console.log('action.classData: ', action.classData);

            const index = state.findIndex(event => event.id === action.classData.id);
            console.log('State[index]: ', state[index]);

            state[index].description = action.classData.description
            state[index].students = action.classData.students
            console.log('State[index]: ', state[index]);
            return state
        default:
            return state;
    }
}