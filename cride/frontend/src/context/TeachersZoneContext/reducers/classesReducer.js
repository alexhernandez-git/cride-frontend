

export const classesReducer = (state, action) => {
    switch (action.type) {
        case 'CLASSES_CONFIRMED_REQUEST':
            return {
                ...state,
                isFetching: true,
                hasError: false
            };
        case 'CLASSES_CONFIRMED_SUCCESS':
            return {
                ...state,
                isFetching: false,
                classesConfirmed: action.payload
            };
        case 'CLASSES_CONFIRMED_ERROR':
            return {
                ...state,
                hasError: true,
                isFetching: false
            };
        case 'CLASSES_TO_BE_CONFIRMED_REQUEST':
            return {
                ...state,
                isFetching: true,
                hasError: false
            };
        case 'CLASSES_TO_BE_CONFIRMED_SUCCESS':
            return {
                ...state,
                isFetching: false,
                classesToBeConfirmed: action.payload
            };
        case 'CLASSES_TO_BE_CONFIRMED_ERROR':
            return {
                ...state,
                hasError: true,
                isFetching: false
            };
        case 'CONFIRM_CLASS':
            action.payload.confirmedDate = new Date()
            const newArray = state.classesToBeConfirmed.filter((classElement) => {
                return classElement.id != action.payload.id
            })
            const newArrayConfirmed = [...state.classesConfirmed, action.payload]
            const newArrayConfirmedSorted = newArrayConfirmed.sort((a, b) => (b.confirmedDate - a.confirmedDate))

            return {
                ...state,
                classesConfirmed: newArrayConfirmedSorted,
                classesToBeConfirmed: newArray
            }
        case 'CANCEL_CLASS_CONFIRMED':
            const newArrayClassesConfirmed = state.classesConfirmed.filter((classElement) => {
                return classElement.id != action.payload.id
            })
            return {
                ...state,
                classesConfirmed: newArrayClassesConfirmed
            }
        case 'CANCEL_CLASS_TO_BE_CONFIRMED':
            const newArrayClassesToBeConfirmed = state.classesToBeConfirmed.filter((classElement) => {
                return classElement.id != action.payload.id
            })
            return {
                ...state,
                classesToBeConfirmed: newArrayClassesToBeConfirmed
            }
        default:
            return state;
    }
}