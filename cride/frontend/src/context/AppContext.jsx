import React, { createContext, useEffect, useReducer } from 'react'
export const AppContext = createContext()
import { userReducer } from './reducers/userReducer'
import moment from 'moment'
export const AppProvider = ({ children }) => {

    const initialUser = {
        loading: true,
        isAuthenicated: false,
        error: '',
        user: {
            profile: false,
            name: '',
            surname: '',
            email: '',
            teacher: false,
            cupons: []
        },
        invitations: []
    }
    const [userProfile, dispatchUser] = useReducer(userReducer, initialUser);

    useEffect(() => {


        dispatchUser({
            type: 'FETCH_SUCCESS', payload: {
                user: {
                    id: 'alex1234h',
                    name: 'Alex',
                    surname: 'Hernandez',
                    profile: {
                        picture: '../../../static/assets/img/profile-blank.png',
                        classes_buyed: 5
                    },
                    teacher: {
                        rating: 4.7,
                        class_price: {
                            label: "24.99$ por clase",
                            value: 24.99,
                            type: "usd"
                        },
                        presentation: 'Hola me llamo Alex Hernandez y soy programador fullstack con amplios conocimientos de HTML, CSS, JavaScript, React, PHP, Python, Django, MySQL, Postgresql, Ubuntu, etc...',
                        video_presentation: 'https://www.youtube.com/embed/l0s6ZLkV-U0',
                        teach: [
                            {
                                id: Math.random().toString(36).substr(2),
                                subjectValue: 'Desarrollo con Swift'
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                subjectValue: 'Desarrollo con React'
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                subjectValue: 'Desarrollo con Angular'
                            },
                        ],
                        lenguages: [
                            {
                                id: "wcppkede79c",
                                languageValue: "hr",
                                languageLabel: "Croatian",
                                levelValue: "b1",
                                levelLabel: "B1, Usuario independiente",
                            },
                            {
                                id: "ar44m6450dl",
                                languageValue: "es",
                                languageLabel: "Spanish; Castilian",
                                levelValue: "b1",
                                levelLabel: "B1, Usuario independiente",
                            }
                        ],
                        skills: [
                            {
                                id: Math.random().toString(36).substr(2),
                                skillValue: 'HTML',
                                levelValue: 100
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                skillValue: 'CSS',
                                levelValue: 95
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                skillValue: 'JavaScript',
                                levelValue: 70
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                skillValue: 'PHP',
                                levelValue: 95
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                skillValue: 'MySQL',
                                levelValue: 32
                            }
                        ],
                        work_experience: [
                            {
                                id: "uljz5zio2fj",
                                title: "Programador frontend",
                                company: "Microsoft",
                                currentWorking: true,
                                startDate: new Date(),
                                endDate: false,
                                description: "En ese trabajo cumplía las funciónes de programador frontend",
                            },
                            {
                                id: "gx6s2r3urlv",
                                title: "Programador backend",
                                company: "Apple",
                                currentWorking: false,
                                startDate: new Date(),
                                endDate: new Date(),
                                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor inventore natus est hic earum adipisci architecto explicabo harum, fuga necessitatibus ab voluptatibus illo voluptatem ratione, exercitationem voluptate, perspiciatis velit repudiandae."
                            }
                        ],
                        academic_experience: [
                            {
                                id: "px41nfl2vhh",
                                title: "Grado Superior de administración de sistemas",
                                school: "CESF",
                                currentStudiesing: true,
                                startDate: moment('Wed Jan 03 2018 00:00:00 GMT+0100'),
                                endDate: false,
                                description: "En esta escuela aprendi todo lo relacionado con la administración de sistemas informaticos"
                            },
                            {
                                id: "mwcr7atzbca",
                                title: "Grado Medio de administración de sistemas",
                                school: "CESF",
                                currentStudiesing: false,
                                startDate: moment('Wed Sep 21 2016 00:00:00 GMT+0200'),
                                endDate: moment('Thu Jun 21 2018 00:00:00 GMT+0200'),
                                description: "En esta escuela aprendi todo lo relacionado con la administración de sistemas informaticos",
                            }
                        ],
                        ratings: [
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 4.3,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 1,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 1,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 1,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 1,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 1,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 1,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 3.7,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 5,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },
                            {
                                id: Math.random().toString(36).substr(2),
                                user: {
                                    name: 'Paco',
                                    surname: 'De la Cruz'
                                },
                                rating: 5,
                                comment: 'Un buen tipo',
                                date: new Date()
                            },

                        ],
                        business_hours: [
                        ],
                        classes: [
                            {
                                id: 'fudhnl6tja5',
                                title: null,
                                start: Date.now() + 6.04e+8 / 3,
                                end: null,
                                constraint: 'businessHours',
                                description: 'Esta es una clase aceptada',
                                accepted: true,
                                students: [
                                    {
                                        user: {
                                            id: "alex1234h",
                                            name: "DOMINGO",
                                            surname: "CAYUELA",
                                        },
                                        isAdmin: true,

                                    },

                                ]
                            },
                            {
                                id: 'fudhnl6tja5',
                                title: null,
                                start: Date.now() + 6.04e+8 / 2.4,
                                end: null,
                                constraint: 'businessHours',
                                description: 'Esta es una clase aceptada',
                                accepted: false,
                                students: [
                                    {
                                        user: {
                                            id: "alex1234h",
                                            name: "DOMINGO",
                                            surname: "CAYUELA",

                                        },
                                        isAdmin: true,
                                    },

                                ]
                            },
                            {
                                id: 'fudhnl6tja5',
                                title: null,
                                start: Date.now() + 6.04e+8 / 2.2,
                                end: null,
                                constraint: 'businessHours',
                                description: 'Esta es una clase no aceptada',
                                accepted: false,
                                students: [
                                    {
                                        user: {
                                            id: "alex1234h",
                                            name: "DOMINGO",
                                            surname: "CAYUELA",
                                        },

                                        isAdmin: true,
                                    },

                                ]
                            }
                        ],
                    },
                },

                classes: [
                    {
                        id: 'fudhnfewal6tja5',
                        title: 'Clase',
                        start: new Date(Date.now() + 6.04e+8 / 3).toString(),
                        end: null,
                        constraint: 'businessHours',
                        description: 'Esta es una clase aceptada',
                        accepted: true,
                        teacher: {
                            name: 'Alex',
                            surname: 'Hernandez',
                            email: 'alex@gmail.com',
                            profile: {
                                picture: '../../../static/assets/img/profile-blank.png',
                            },
                        },
                        owner: {
                            id: "nueia81qrmp",
                            name: "Alex",
                            surname: "Hernandez"
                        },
                        students: [
                            {
                                user: {
                                    id: "alex1234h",
                                    name: "DOMINGO",
                                    surname: "CAYUELA",
                                    profile: {
                                        picture: '../../../static/assets/img/profile-blank.png',
                                    },
                                },
                                isAdmin: true,

                            },

                        ]
                    },
                    {
                        id: 'fudhfewanl6tja5',
                        title: 'Clase',
                        start: new Date(Date.now() + 6.04e+8 / 2.4).toString(),
                        end: null,
                        constraint: 'businessHours',
                        description: 'Esta es una clase aceptada',
                        accepted: false,

                        teacher: {
                            name: 'Alex',
                            surname: 'Hernandez',
                            email: 'alex@gmail.com',
                            profile: {
                                picture: '../../../static/assets/img/profile-blank.png',
                            },
                        },
                        owner: {
                            id: "nueia81qrmp",
                            name: "Alex",
                            surname: "Hernandez"
                        },
                        students: [
                            {
                                user: {
                                    id: "alex1234h",
                                    name: "DOMINGO",
                                    surname: "CAYUELA",
                                    profile: {
                                        picture: '../../../static/assets/img/profile-blank.png',
                                    },

                                },
                                isAdmin: true,
                            },

                        ]
                    },
                    {
                        id: 'fudhnawfel6tja5',
                        title: 'Clase',
                        start: new Date(Date.now() + 6.04e+8 / 2.2).toString(),
                        end: null,
                        constraint: 'businessHours',
                        description: 'Esta es una clase no aceptada',
                        accepted: false,
                        teacher: {
                            id: "alex1234h",
                            name: 'Alex',
                            surname: 'Hernandez',
                            email: 'alex@gmail.com',
                            profile: {
                                picture: '../../../static/assets/img/profile-blank.png',
                            },
                        },
                        owner: {
                            id: "nueia81qrmp",
                            name: "Alex",
                            surname: "Hernandez"
                        },
                        students: [
                            {
                                user: {
                                    id: "alex1234h",
                                    name: "DOMINGO",
                                    surname: "CAYUELA",
                                    profile: {
                                        picture: '../../../static/assets/img/profile-blank.png',
                                    },
                                },

                                isAdmin: true,
                            },

                        ]
                    }
                ],
                invitations: [
                    {
                        code: Math.random().toString(36).substr(2),
                        class: {
                            id: Math.random().toString(36).substr(2),
                            start: new Date(Date.now() + 6.04e+8 / 2.4).toString(),
                            title: 'Clase',
                            end: null,
                            constraint: 'businessHours',
                            description: 'Esta es una clase aceptada',
                            teacher: {
                                id: Math.random().toString(36).substr(2),
                                name: 'Alex',
                                surname: 'Hernandez',
                                email: 'alex@gmail.com',
                                profile: {
                                    picture: '../../../static/assets/img/profile-blank.png',
                                },
                            },
                            owner: {
                                id: "nueia81qrmp",
                                name: "Alex",
                                surname: "Hernandez"
                            },
                            students: [
                                {
                                    user: {
                                        id: "alex1234h",
                                        name: "DOMINGO",
                                        surname: "CAYUELA",
                                    },
                                    isAdmin: true,

                                },

                            ]
                        },

                        accepted: true,

                    },
                    {
                        code: Math.random().toString(36).substr(2),
                        class: {
                            id: 'fudhfewanl6tja5',
                            start: new Date(Date.now() + 6.04e+8 / 2.4).toString(),
                            title: 'Clase',
                            end: null,
                            constraint: 'businessHours',
                            description: 'Esta es una clase aceptada',
                            teacher: {
                                id: Math.random().toString(36).substr(2),
                                name: 'Alex',
                                surname: 'Hernandez',
                                email: 'alex@gmail.com',
                                profile: {
                                    picture: '../../../static/assets/img/profile-blank.png',
                                },
                            },
                            owner: {
                                id: "nueia81qrmp",
                                name: "Alex",
                                surname: "Hernandez"
                            },
                            students: [
                                {
                                    user: {
                                        id: "alex1234h",
                                        name: "DOMINGO",
                                        surname: "CAYUELA",
                                    },
                                    isAdmin: true,

                                },

                            ]
                        },

                        accepted: true,

                    },
                    {
                        code: Math.random().toString(36).substr(2),
                        class: {
                            id: 'fudhfewanl6tja5',

                            start: new Date(Date.now() + 6.04e+8 / 2.4).toString(),
                            title: 'Clase',
                            end: null,
                            constraint: 'businessHours',
                            description: 'Esta es una clase aceptada',
                            teacher: {
                                name: 'Alex',
                                surname: 'Hernandez',
                                email: 'alex@gmail.com',
                                profile: {
                                    picture: '../../../static/assets/img/profile-blank.png',
                                },
                            },
                            owner: {
                                id: "nueia81qrmp",
                                name: "Alex",
                                surname: "Hernandez"
                            },
                            students: [
                                {
                                    user: {
                                        id: "alex1234h",
                                        name: "DOMINGO",
                                        surname: "CAYUELA",
                                    },
                                    isAdmin: true,

                                },

                            ]
                        },

                        accepted: true,

                    },
                ],

            }

        })

    }, []);

    const updateBusinessHours = (data) => {
        dispatchUser({
            type: "SET_BUSINESS_HOURS",
            payload: data
        })
    }
    const uploadProfileImage = (data) => {
        console.log(data);

        dispatchUser({
            type: "UPLOAD_PROFILE_IMAGE",
            payload: data
        })
    }
    const saveMainInformation = (data) => {
        dispatchUser({
            type: "SAVE_MAIN_INFORMATION",
            payload: data
        })
    }
    const uploadVideoPresentation = (data) => {
        dispatchUser({
            type: "UPLOAD_VIDEO_PRESENTATION",
            payload: data
        })
    }
    const savePresentation = (data) => {
        dispatchUser({
            type: "SAVE_PRESENTATION",
            payload: data
        })
    }
    const saveTeach = (data) => {
        dispatchUser({
            type: "SAVE_TEACH",
            payload: data
        })
    }
    const addLenguage = data => {
        dispatchUser({
            type: "ADD_LENGUAGE",
            payload: data
        })
    }
    const deleteLenguage = data => {
        dispatchUser({
            type: "DELETE_LENGUAGE",
            payload: data
        })
    }
    const addSkill = data => {
        dispatchUser({
            type: "ADD_SKILL",
            payload: data
        })
    }
    const deleteSkill = data => {
        dispatchUser({
            type: "DELETE_SKILL",
            payload: data
        })
    }
    const addWork = data => {
        dispatchUser({
            type: "ADD_WORK",
            payload: data
        })
    }
    const deleteWork = data => {
        dispatchUser({
            type: "DELETE_WORK",
            payload: data
        })
    }
    const editWork = data => {
        dispatchUser({
            type: "EDIT_WORK",
            payload: data
        })
    }
    const addStudy = data => {
        dispatchUser({
            type: "ADD_STUDY",
            payload: data
        })
    }
    const deleteStudy = data => {
        dispatchUser({
            type: "DELETE_STUDY",
            payload: data
        })
    }
    const editStudy = data => {
        dispatchUser({
            type: "EDIT_STUDY",
            payload: data
        })
    }
    const setPrice = data => {
        dispatchUser({
            type: "SET_PRICE",
            payload: data
        })
    }
    const cancelClass = data => {
        dispatchUser({
            type: "CANCEL_CLASS",
            payload: data
        })
    }
    const discardInvitation = data => {
        dispatchUser({
            type: "DISCARD_INVITATION",
            payload: data
        })
    }
    const acceptInvitation = (classData, invitation) => {
        dispatchUser({
            type: "ACCEPT_INVITATION",
            payload: {
                classData: classData,
                invitation: invitation
            }
        })
    }
    return (
        <AppContext.Provider value={{
            userProfile,
            updateBusinessHours,
            uploadProfileImage,
            saveMainInformation,
            uploadVideoPresentation,
            savePresentation,
            saveTeach,
            addLenguage,
            deleteLenguage,
            addSkill,
            deleteSkill,
            addWork,
            deleteWork,
            editWork,
            addStudy,
            deleteStudy,
            editStudy,
            setPrice,
            cancelClass,
            discardInvitation,
            acceptInvitation
        }}>
            {children}
        </AppContext.Provider>
    )
}