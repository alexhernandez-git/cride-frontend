import React, { createContext, useEffect, useReducer } from 'react'
export const AppContext = createContext()
import { userReducer } from './reducers/userReducer'
import moment from 'moment'
export const AppProvider = ({ children }) => {

    const initialUser = {
        loading: true,
        error: '',
        user: {
            name: '',
            surname: '',
            email: '',
            friends: [],
            teacher: false
        }

    }
    const [userProfile, dispatchUser] = useReducer(userReducer, initialUser);

    useEffect(() => {


        dispatchUser({
            type: 'FETCH_SUCCESS', payload: {
                name: 'Alex',
                surname: 'Hernandez',
                picture: '',
                friends: [],
                teacher: {
                    rating: 4.7,
                    classPrice: 24.99,
                    presentation: 'Hola me llamo Alex Hernandez y soy programador fullstack con amplios conocimientos de HTML, CSS, JavaScript, React, PHP, Python, Django, MySQL, Postgresql, Ubuntu, etc...',
                    videoPresentation: 'https://www.youtube.com/embed/l0s6ZLkV-U0',
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
                    idioms: [
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
                    workExperience: [
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
                    academicExperience: [
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
                    businessHours: [
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
                                    id: "alex1234h",
                                    name: "DOMINGO",
                                    surname: "CAYUELA",
                                    isAdmin: true,
                                    isInvited: false,
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
                                    id: "elcapo123",
                                    name: "DOMINGO",
                                    surname: "CAYUELA",
                                    isAdmin: true,
                                    isInvited: false,
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
                                    id: "alex1234h",
                                    name: "DOMINGO",
                                    surname: "CAYUELA",
                                    isAdmin: true,
                                    isInvited: false,
                                },

                            ]
                        }
                    ],
                }

            }

        })

    }, []);

    const updateBusinessHours = (data) => {
        dispatchUser({
            type: "SET_BUSINESS_HOURS",
            payload: data
        })
        console.log(userProfile.user.teacher.businessHours);

    }

    return (
        <AppContext.Provider value={{
            userProfile,
            updateBusinessHours
        }}>
            {children}
        </AppContext.Provider>
    )
}