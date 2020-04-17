
export const teacherStateReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':

            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                teacher: state.user.teacher,
                error: 'Algo ha ido mal'
            }
        case 'UPDATE_MY_ACCEPTED_CLASS':

            const index = state.user.teacher.myAcceptedClasses.findIndex(event => event.id === action.classData.id);

            state.user.teacher.myAcceptedClasses[index].description = action.classData.description
            state.user.teacher.myAcceptedClasses[index].students = action.classData.students
            console.log('state: ', state);

            return state



        case 'ADD_MY_PENDING_CLASS':

            let newArrayPendingClasses = []
            if (Array.isArray(action.myPendingClass)) {
                newArrayPendingClasses = [...state.user.teacher.myPendingClasses, ...action.myPendingClass]
            } else {
                newArrayPendingClasses = [...state.user.teacher.myPendingClasses, action.myPendingClass]
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        myPendingClasses: newArrayPendingClasses
                    }
                }
            }
        case 'MERGE_MY_PENDING_CLASS':

            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        myPendingClasses: [...state.user.teacher.myPendingClasses, ...action.tempClasses]
                    }
                }
            }

        case 'UPDATE_MY_PENDING_CLASS':
            const indexPending = state.user.teacher.myPendingClasses.findIndex(event => event.id === action.classData.id);

            state.user.teacher.myPendingClasses[indexPending].description = action.classData.description
            state.user.teacher.myPendingClasses[indexPending].students = action.classData.students
            return state
        case 'SET_MY_PENDING_CLASS':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        myPendingClasses: action.myPendingClass
                    }
                }
            }
        case 'DELETE_MY_PENDING_CLASS':
            console.log(state.user.teacher);

            const index1 = state.user.teacher.myPendingClasses.findIndex(event => event.id === action.classData.id);
            state.user.teacher.myPendingClasses.splice(index1, 1)
            return state
        case 'DELETE_MY_ACCEPTED_CLASS':

            const indexAcceptedClasses = state.user.teacher.myAcceptedClasses.findIndex(event => event.id === action.classData.id);
            state.user.teacher.myAcceptedClasses.splice(indexAcceptedClasses, 1)
            return state

        case 'ADD_CLASS':
            let newArrayClassesLeft = state.user.teacher.eventClassesLeft
            newArrayClassesLeft.pop()
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        eventClassesLeft: newArrayClassesLeft
                    }
                }
            }

        case 'REMOVE_CLASS':

            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        eventClassesLeft: [...state.user.teacher.eventClassesLeft, {
                            id: null,
                            title: '',
                            start: null,
                            constraint: 'businessHours',
                            description: ''
                        }
                        ]
                    }
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
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        eventClassesLeft: [...newArray, ...state.user.teacher.eventClassesLeft]
                    }
                }
            }
        case 'ADD_CLASSES':

            let newArrayClasses = []
            if (Array.isArray(action.payload)) {
                newArrayClasses = [...state.user.teacher.classes, ...action.payload]
            } else {
                newArrayClasses = [...state.user.teacher.classes, action.payload]
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        classes: newArrayClasses
                    }
                }
            }
        case 'MERGE_CLASSES':

            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        classes: [...state.user.teacher.classes, ...action.tempClasses]
                    }
                }
            }

        case 'UPDATE_CLASSES':
            console.log(state);

            const indexClasses = state.user.teacher.classes.findIndex(event => event.id === action.payload.id);

            state.user.teacher.classes[indexClasses].description = action.payload.description
            state.user.teacher.classes[indexClasses].students = action.payload.students
            return state
        case 'DELETE_CLASSES':

            const indexClasses1 = state.user.teacher.classes.findIndex(event => event.id === action.payload.id);
            state.user.teacher.classes.splice(indexClasses1, 1)
            return state


        default:
            return state;
    }
}