
export const classesAssignedLeftReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_ASSIGNED_CLASS':
            return [...state, {
                id: null,
                title: '',
                start: null,
                constraint: 'businessHours',
                description: ''
            }]
        case 'REMOVE_ASSIGNED_CLASS':
            state.pop()
            return state
        case 'SET_ASSIGNED_CLASS':
            const newArray = [];
            for (let index = 0; index < action.classesSelected; index++) {
                newArray[index] = {
                    id: null,
                    title: '',
                    start: null,
                    constraint: 'businessHours',
                    description: ''
                };

            }
            return newArray
        default:
            return state;
    }
}