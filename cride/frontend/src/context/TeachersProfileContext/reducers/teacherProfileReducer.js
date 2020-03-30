
export const teacherProfileReducer = (state, action) => {
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
            if (Array.isArray(action.myClass)) {
                newArrayClasses = [...state.teacher.classes, ...action.classes]
            } else {
                newArrayClasses = [...state.teacher.classes, action.classes]
            }
            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    myPendingClasses: newArrayPendingClasses
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
            const indexPending = state.teacher.myPendingClasses.findIndex(event => event.id === action.classData.id);

            state.teacher.myPendingClasses[indexPending].description = action.classData.description
            state.teacher.myPendingClasses[indexPending].students = action.classData.students
            return state
        case 'DELETE_CLASSES':
            console.log(state.teacher);

            const index1 = state.teacher.myPendingClasses.findIndex(event => event.id === action.classData.id);
            state.teacher.myPendingClasses.splice(index1, 1)
            return state
        case 'REMOVE_DROP_CLASSES':
            let newArrayClassesLeft = state.teacher.eventClassesLeft
            newArrayClassesLeft.pop()
            return {
                ...state,
                teacher: {
                    ...state.teacher,
                    eventClassesLeft: newArrayClassesLeft
                }
            }

        case 'ADD_DROP_CLASSES':

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


        case 'SET_DROP_CLASSES':

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
        default:
            return state;
    }
}