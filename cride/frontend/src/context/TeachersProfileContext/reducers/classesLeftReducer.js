export const ADD_CLASS = 'ADD_CLASS'
export const REMOVE_CLASS = 'REMOVE_CLASS'
export const ADD_CLASSES_LEFT = 'ADD_CLASSES_LEFT'
export const SET_CLASSES_LEFT = 'SET_CLASSES_LEFT'


export const classesLeftReducer = (state, action) => {

    switch (action.type) {
        case ADD_CLASS:
            state.pop()
            return state
        case REMOVE_CLASS:

            return [...state, {
                id: null,
                title: '',
                start: null,
                constraint: 'businessHours',
                description: ''
            }]
        case SET_CLASSES_LEFT:

            const newArray = [];
            for (let index = 0; index < action.classesAssignedLeft; index++) {
                newArray[index] = {
                    id: null,
                    title: '',
                    start: null,
                    constraint: 'businessHours',
                    description: ''
                };

            }
            console.log('New array with state: ', [...newArray, ...state]);

            return [...newArray, ...state]
        default:
            return state;
    }
}