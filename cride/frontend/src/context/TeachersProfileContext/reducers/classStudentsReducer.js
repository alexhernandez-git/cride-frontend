export const init = (initialStudents) => {
    return initialStudents
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INVITE_STUDENT':
            action.user.isAdmin = false
            action.user.isInvited = true
            return {
                ...state,
                students: [...state.students, action.user]
            }
        case 'DELETE_INVITED':
            const newArray = state.students.filter((student) => student.id != action.student.id)
            return {
                ...state,
                students: newArray
            }
        case 'RESET':
            return init(action.payload)
        default:
            return state;
    }
}
