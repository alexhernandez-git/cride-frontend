const addMyPendingClass = (myPendingClass, state) => {
    if (Array.isArray(myPendingClass)) {
        return [...state, ...myPendingClass]
    } else {
        return [...state, myPendingClass]
    }

}
export const teacherProfileReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            console.log(action.payload);

            return {
                loading: false,
                teacher: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                teacher: state.teacher,
                error: 'Algo ha ido mal'
            }
        case 'UPDATE_MY_ACCEPTED_CLASS':
            console.log('State: ', state.teacher.myAcceptedClasses);
            console.log('action.classData: ', action.teacher.classData);

            const index = state.teacher.myAcceptedClasses.findIndex(event => event.id === action.classData.id);
            console.log('State[index]: ', state.teacher.myAcceptedClasses[index]);

            state.teacher.myAcceptedClasses[index].description = action.classData.description
            state.teacher.myAcceptedClasses[index].students = action.classData.students
            console.log('State[index]: ', state.teacher.myAcceptedClasses[index]);
            return state
        case 'ADD_MY_PENDING_CLASS':
            action.myPendingClass.title = 'Pendiente'
            return addMyPendingClass(action.myPendingClass, state.teacher.myPendingClass)
        case 'MERGE_MY_PENDING_CLASS':
            action.tempClasses.map((tempClass) => {
                tempClass.title = 'Pendiente'
            })
            return {
                ...state,
                teacher: {
                    myPendingClass: [...state.teacher.myPendingClass, ...action.tempClasses]
                }
            }
        case 'UPDATE_MY_PENDING_CLASS':
            console.log('State: ', state.teacher.myPendingClass);
            console.log('action.classData: ', action.classData);

            const indexPending = state.teacher.myPendingClass.findIndexPending(event => event.id === action.classData.id);
            console.log('State[indexPending]: ', state.teacher.myPendingClass[indexPending]);

            state.teacher.myPendingClass[indexPending].description = action.classData.description
            state.teacher.myPendingClass[indexPending].students = action.classData.students
            console.log('State[indexPending]: ', state.teacher.myPendingClass[indexPending]);
            return state
        case 'SET_MY_PENDING_CLASS':
            return {
                ...state,
                teacher: {
                    myPendingClass: action.myPendingClass
                }
            }
        case 'DELETE_MY_PENDING_CLASS':
            const index1 = state.teacher.myPendingClass.findIndex(event => event.id === action.classData.id);
            state.teacher.myPendingClass.splice(index1, 1)
            return state

        case 'ADD_CLASS':
            state.teacher.eventClassesLeft.pop()
            return state

        case 'REMOVE_CLASS':

            return {
                ...state,
                teacher: {
                    eventClassesLeft: [...state.teacher.eventClassesLeft, {
                        id: null,
                        title: '',
                        start: null,
                        constraint: 'businessHours',
                        description: ''
                    }
                    ]
                }

            }


        case 'SET_CLASSES_LEFT':

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

            return {
                ...state,
                teacher: {
                    eventClassesLeft: [...newArray, ...state.teacher.eventClassesLeft]
                }
            }
        default:
            return state;
    }
}