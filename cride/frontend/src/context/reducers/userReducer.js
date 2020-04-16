

export const userReducer = (state, action) => {

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
                user: state.user,
                error: 'Algo ha ido mal'
            }
        case 'SET_BUSINESS_HOURS':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        businessHours: action.payload
                    }
                }
            }
        default:
            return state;
    }
}