

export const userReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                isAuthenticated: true,
                loading: false,
                user: action.payload.user,
                invitations: action.payload.invitations,
                friends: action.payload.friends,
                classes: action.payload.classes,
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
        case 'ADD_LENGUAGE':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        lenguages: [...state.user.teacher.lenguages, action.payload]
                    }
                }
            }
        case 'DELETE_LENGUAGE':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        lenguages: state.user.teacher.lenguages.filter(lang => lang.id !== action.payload.id)
                    }
                }
            }
        case 'ADD_SKILL':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        skills: [...state.user.teacher.skills, action.payload]
                    }
                }
            }
        case 'DELETE_SKILL':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        skills: state.user.teacher.skills.filter(skill => skill.id !== action.payload.id)
                    }
                }
            }
        case 'ADD_WORK':
            const arrayWorksAdd = [...state.user.teacher.workExperience, action.payload]
            const worksAddSorted = arrayWorksAdd.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        workExperience: worksAddSorted
                    }
                }
            }
        case 'DELETE_WORK':
            const arrayWorksDelete = state.user.teacher.workExperience.filter(work => work.id !== action.payload.id)
            const worksDeleteSorted = arrayWorksDelete.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        workExperience: worksDeleteSorted
                    }
                }
            }
        case 'EDIT_WORK':
            const workIndex = state.user.teacher.workExperience.findIndex((work => work.id == action.payload.id));
            const arrayWorks = state.user.teacher.workExperience
            arrayWorks[workIndex].title = action.payload.title
            arrayWorks[workIndex].company = action.payload.company
            arrayWorks[workIndex].currentWorking = action.payload.currentWorking
            arrayWorks[workIndex].startDate = action.payload.startDate
            arrayWorks[workIndex].endDate = action.payload.endDate
            arrayWorks[workIndex].description = action.payload.description
            const worksEditSorted = arrayWorks.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        workExperience: worksEditSorted
                    }
                }
            }
        case 'ADD_STUDY':
            const arrayStudiesAdd = [...state.user.teacher.academicExperience, action.payload]
            const studysAddSorted = arrayStudiesAdd.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        academicExperience: studysAddSorted
                    }
                }
            }
        case 'DELETE_STUDY':
            const arrayStudiesDelete = state.user.teacher.academicExperience.filter(study => study.id !== action.payload.id)
            const studysDeleteSorted = arrayStudiesDelete.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        academicExperience: studysDeleteSorted
                    }
                }
            }
        case 'EDIT_STUDY':
            const studyIndex = state.user.teacher.academicExperience.findIndex((study => study.id == action.payload.id));
            const arrayStudies = state.user.teacher.academicExperience
            arrayStudies[studyIndex].title = action.payload.title
            arrayStudies[studyIndex].company = action.payload.company
            arrayStudies[studyIndex].currentWorking = action.payload.currentWorking
            arrayStudies[studyIndex].startDate = action.payload.startDate
            arrayStudies[studyIndex].endDate = action.payload.endDate
            arrayStudies[studyIndex].description = action.payload.description
            const studiesEditSorted = arrayStudies.sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)))
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        academicExperience: studiesEditSorted
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
        case 'SET_PRICE':
            return {
                ...state,
                user: {
                    ...state.user,
                    teacher: {
                        ...state.user.teacher,
                        classPrice: action.payload
                    }
                }
            }
        case 'CANCEL_CLASS':
            return {
                ...state,
                classes: state.classes.filter(classData => classData.id != action.payload.id)
            }
        case 'DISCARD_INVITATION':

            return {
                ...state,
                invitations: state.invitations.filter(invitation => invitation.code != action.payload)
            }

        case 'ACCEPT_INVITATION':

            return {
                ...state,
                classes: [...state.classes, action.payload.classData],
                invitations: state.invitations.filter(invitation => invitation.code != action.payload.invitation)
            }
        default:
            return state;
    }
}