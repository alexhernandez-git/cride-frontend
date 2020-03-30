

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
        default:
            return state;
    }
}