

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
            console.log(action);

        case 'CANCEL_CLASS':
            console.log(action);

        default:
            return state;
    }
}