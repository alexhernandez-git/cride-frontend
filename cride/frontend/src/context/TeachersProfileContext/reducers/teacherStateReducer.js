
export const teacherStateReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':

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

            const index = state.teacher.myAcceptedClasses.findIndex(event => event.id === action.classData.id);

            state.teacher.myAcceptedClasses[index].description = action.classData.description
            state.teacher.myAcceptedClasses[index].students = action.classData.students
            console.log('state: ', state);

            return state



        case 'ADD_MY_PENDING_CLASS':

            let newArrayPendingClasses = []
            if (Array.isArray(action.myPendingClass)) {
                newArrayPendingClasses = [...state.teacher.myPendingClasses, ...action.myPendingClass]
            } else {
                newArrayPendingClasses = [...state.teacher.myPendingClasses, action.myPendingClass]
            }
            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    myPendingClasses: newArrayPendingClasses
                }
            }
        case 'MERGE_MY_PENDING_CLASS':

            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    myPendingClasses: [...state.teacher.myPendingClasses, ...action.tempClasses]
                }
            }

        case 'UPDATE_MY_PENDING_CLASS':
            const indexPending = state.teacher.myPendingClasses.findIndex(event => event.id === action.classData.id);

            state.teacher.myPendingClasses[indexPending].description = action.classData.description
            state.teacher.myPendingClasses[indexPending].students = action.classData.students
            return state
        case 'SET_MY_PENDING_CLASS':
            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    myPendingClasses: action.myPendingClass
                }
            }
        case 'DELETE_MY_PENDING_CLASS':
            console.log(state.teacher);

            const index1 = state.teacher.myPendingClasses.findIndex(event => event.id === action.classData.id);
            state.teacher.myPendingClasses.splice(index1, 1)
            return state
        case 'DELETE_MY_ACCEPTED_CLASS':

            const indexAcceptedClasses = state.teacher.myAcceptedClasses.findIndex(event => event.id === action.classData.id);
            state.teacher.myAcceptedClasses.splice(indexAcceptedClasses, 1)
            return state

        case 'ADD_CLASS':
            let newArrayClassesLeft = state.teacher.eventClassesLeft
            newArrayClassesLeft.pop()
            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    eventClassesLeft: newArrayClassesLeft
                }
            }

        case 'REMOVE_CLASS':

            return {
                ...state,
                teacher: {
                    ...state.teacher,
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

            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    eventClassesLeft: [...newArray, ...state.teacher.eventClassesLeft]
                }
            }
        case 'ADD_CLASSES':

            let newArrayClasses = []
            if (Array.isArray(action.payload)) {
                newArrayClasses = [...state.teacher.classes, ...action.payload]
            } else {
                newArrayClasses = [...state.teacher.classes, action.payload]
            }
            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    classes: newArrayClasses
                }
            }
        case 'MERGE_CLASSES':

            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    classes: [...state.teacher.classes, ...action.tempClasses]
                }
            }

        case 'UPDATE_CLASSES':
            console.log(state);

            const indexClasses = state.teacher.classes.findIndex(event => event.id === action.payload.id);

            state.teacher.classes[indexClasses].description = action.payload.description
            state.teacher.classes[indexClasses].students = action.payload.students
            return state
        case 'DELETE_CLASSES':

            const indexClasses1 = state.teacher.classes.findIndex(event => event.id === action.payload.id);
            state.teacher.classes.splice(indexClasses1, 1)
            return state

        default:
            return state;
    }
}