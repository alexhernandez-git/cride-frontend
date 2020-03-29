export const init = (initialStudents) => {
    return initialStudents
}

export const studentsReducer = (state, action) => {
    switch (action.type) {
        case 'INVITE_STUDENT':
            // action.user.isAdmin = false
            // action.user.isInvited = true
            // return {
            //     ...state,
            //     students: [...state.students, action.user]
            // }
            return state
        case 'DELETE_INVITED':
            // const newArray = state.students.filter((student) => student.id != action.student.id)
            // return {
            //     ...state,
            //     students: newArray
            // }
            return state
        case 'RESET':
            return init(action.payload)
        default:
            return state;
    }
}
