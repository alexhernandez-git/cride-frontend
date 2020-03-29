

const addMyPendingClass = (myPendingClass, state) => {
    if (Array.isArray(myPendingClass)) {
        return [...state, ...myPendingClass]
    } else {
        return [...state, myPendingClass]
    }

}

export const myClassReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MY_PENDING_CLASS':
            action.myPendingClass.title = 'Pendiente'
            return addMyPendingClass(action.myPendingClass, state)
        case 'MERGE_MY_PENDING_CLASS':
            action.tempClasses.map((tempClass) => {
                tempClass.title = 'Pendiente'
            })
            return [...state, ...action.tempClasses]
        case 'UPDATE_MY_PENDING_CLASS':
            console.log('State: ', state);
            console.log('action.classData: ', action.classData);

            const index = state.findIndex(event => event.id === action.classData.id);
            console.log('State[index]: ', state[index]);

            state[index].description = action.classData.description
            state[index].students = action.classData.students
            console.log('State[index]: ', state[index]);
            return state
        case 'SET_MY_PENDING_CLASS':
            return action.myPendingClass
        case 'DELETE_MY_PENDING_CLASS':
            const index1 = state.findIndex(event => event.id === action.classData.id);
            state.splice(index1, 1)
            return state
        default:
            return state;
    }
}