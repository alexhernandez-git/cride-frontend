import React, { useState, useReducer, useEffect } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { MdAddCircleOutline, MdPersonAdd, MdMessage } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

import "static/assets/styles/components/Users/Teachers/TeachersProfile/ClassStudents.scss"

import moment from 'moment'
const ClassStudents = () => {
    const [inviteStudentsState, setInviteStudentsState] = useState(false)

    const handleClickInviteStudents = () => {
        if (inviteStudentsState) {
            setInviteStudentsState(false)
        } else {
            setInviteStudentsState(true)
        }
    }

    const initialStudents = {
        users: [
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',

            },
        ],
        students: [

            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',
                isAdmin: true,
            },
            {
                id: Math.random().toString(36).substr(2),
                name: 'Alex',
                surname: 'Hernandez',
                isAdmin: false,
                isInvited: true
            },

        ]
    }

    const handleInviteUser = (user) => {
        if (confirm(`¿Añadir a ${user.name}?`)) {

            dispatchStudents({ type: 'INVITE_STUDENT', user })
            setInviteStudentsState(false)

        }
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INVITE_STUDENT':
                action.user.isAdmin = false
                action.user.isInvited = true
                return {
                    ...state,
                    students: [...state.students, action.user]
                }
            default:
                return state;
        }
    }


    const [studentState, dispatchStudents] = useReducer(reducer, initialStudents);
    // useEffect(
    //     () => {
    //         setInviteStudentsState(false)
    //     },
    //     []
    // );
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <>
                    <div className="position-relative">

                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span className="h5 m-0">Estudiantes</span>
                            <button
                                className="btn-green border text-white rounded-pill px-3 shadow"
                                style={{
                                    height: '40px'
                                }}
                                onClick={handleClickInviteStudents}
                            >
                                <IconContext.Provider value={{
                                    className: " text-white cursor-ponter",
                                    size: '25px'
                                }}>
                                    {inviteStudentsState ?
                                        <>
                                            <IoMdCloseCircleOutline /> Cerrar
                                        </>
                                        :
                                        <>
                                            <MdPersonAdd /> Invitar
                                        </>

                                    }
                                </IconContext.Provider>
                            </button>

                        </div>
                        <div
                            className={inviteStudentsState ? 'd-block shadow rounded' : 'd-none'}
                            style={{
                                cursor: 'pointer',
                                width: '100%',
                                position: 'absolute',
                                zIndex: '500'
                            }}
                        >

                            <div className="bg-gradient-green p-2 rounded-top text-white d-sm-flex justify-content-between align-items-center">
                                <div className="d-block py-1 d-sm-none"></div>
                                <div className="d-flex justify-content-center align-items-center d-sm-inline">
                                    <span className="h5 text-center mx-2 font-weight-normal">Invitar compañeros</span>

                                </div>
                                <div className="d-block py-1 d-sm-none"></div>
                                <Form.Group className="m-0">
                                    <Form.Control className="border-0" type="text" placeholder="Buscar" />
                                </Form.Group>
                            </div>
                            <div
                                className="p-2 overflow-auto bg-white rounded-bottom"
                                style={{
                                    height: '200px',
                                }}
                            >

                                {studentState.users.map(user => (
                                    <div className="my-1"  >
                                        <div className=" px-3 py-2 bg-white rounded-pill shadow">
                                            <div className="div-delegate-student d-flex justify-content-between align-items-center">
                                                <div className="d-flex justify-content-start align-items-center w-100">

                                                    <div
                                                        className="delegate-img mr-3"
                                                        style={{
                                                            overflow: 'hidden',
                                                            height: '50px',
                                                            width: '50px',
                                                            borderRadius: '50%'
                                                        }}>
                                                        <img
                                                            src={`https://source.unsplash.com/random/1`}
                                                            alt=""
                                                            style={{
                                                                height: '50px',
                                                                width: '50px'
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="h6 font-weight-normal m-0">{user.name} {user.surname}</span>
                                                    </div>
                                                </div>

                                                <button className="btn btn-green text-white"
                                                    onClick={() => handleInviteUser(user)}>
                                                    <IconContext.Provider value={{
                                                        className: " text-white cursor-ponter",
                                                        size: '20px'
                                                    }}>
                                                        <MdPersonAdd />
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                    {studentState.students.map(student => (
                        <div className="pt-1 mb-1">
                            <div className=" px-3 py-2 bg-white rounded-pill shadow">
                                <div className="div-delegate-student d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center w-100">

                                        <div
                                            className="delegate-img mr-3"
                                            style={{
                                                overflow: 'hidden',
                                                height: '50px',
                                                width: '50px',
                                                borderRadius: '50%'
                                            }}>
                                            <img
                                                src={`https://source.unsplash.com/random/1`}
                                                alt=""
                                                style={{
                                                    height: '50px',
                                                    width: '50px'
                                                }}
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="h6 font-weight-normal m-0">{student.name} {student.surname}</span>
                                            {student.isAdmin ?

                                                <span
                                                    className="badge badge-pill bg-gradient-green font-weight-normal text-white mt-2"
                                                    style={{
                                                        width: 'max-content'
                                                    }}
                                                >Delegado</span>

                                                :
                                                ''}
                                            {student.isInvited ?
                                                <span
                                                    className="badge badge-pill badge-warning font-weight-normal text-white mt-2"
                                                    style={{
                                                        width: 'max-content'
                                                    }}
                                                >Invitado</span>
                                                :
                                                ''}


                                        </div>
                                    </div>

                                    {/* <button className="btn btn-green text-white">
                                        <IconContext.Provider value={{
                                            className: " text-white cursor-ponter",
                                            size: '20px'
                                        }}>
                                            <MdMessage />
                                        </IconContext.Provider>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default ClassStudents;
