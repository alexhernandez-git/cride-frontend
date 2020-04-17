

export const userReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                isAuthenticated: true,
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
        case 'UPLOAD_PROFILE_IMAGE':
            return {
                ...state,
                user: {
                    ...state.user,
                    profile: {
                        ...state.user.profile,
                        picture: ''
                    }
                }
            }
        case 'SAVE_MAIN_INFORMATION':
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    surname: action.payload.surname
                }
            }
        case 'UPLOAD_VIDEO_PRESENTATION':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        videoPresentation: ''
                    }
                }
            }
        case 'SAVE_PRESENTATION':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        presentation: action.payload
                    }
                }
            }
        case 'SAVE_TEACH':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        teach: action.payload
                    }
                }
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