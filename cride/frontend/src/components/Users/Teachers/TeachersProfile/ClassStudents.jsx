import React, { useRef, useEffect, useContext } from 'react';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { FaRegCalendarAlt, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { MdAddCircleOutline, MdPersonAdd, MdMessage, MdCancel } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import { AssignClassContext } from "src/context/TeachersProfileContext/AssignClassContext"
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ClassStudents.scss"

import moment from 'moment'
const ClassStudents = () => {
    const assignClassContext = useContext(AssignClassContext)

    const invitationStudent = useRef()
    const handleWindowClick = (e) => {
        console.log();


        if (e.target.closest("#invitaitonDiv") != invitationStudent.current) {
            assignClassContext.setInviteStudentsState(false)
        }


    }
    const handleClick = () => {
        if (assignClassContext.inviteStudentsState) {
            window.onclick = handleWindowClick
        }
    }
    useEffect(() => {
    }, [window.onclick = handleClick])
    useEffect(() => {

        return () => {
            assignClassContext.resetStudents()
            assignClassContext.setInviteStudentsState(false)
            console.log('entra');

        }
    }, [])

    return (
        <AssignClassContext.Consumer>
            {assignClassContext => (
                <>
                    <div className="position-relative">

                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span className="h5 m-0">Estudiantes</span>
                            <button
                                className="btn-green border text-white rounded-pill px-3 shadow"
                                style={{
                                    height: '40px'
                                }}
                                onClick={assignClassContext.handleClickInviteStudents}
                            >
                                <IconContext.Provider value={{
                                    className: " text-white cursor-ponter",
                                    size: '25px'
                                }}>
                                    {assignClassContext.inviteStudentsState ?
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
                            className={assignClassContext.inviteStudentsState ? 'd-block shadow rounded col-12 col-xl-6 p-0' : 'd-none'}
                            style={{
                                cursor: 'pointer',
                                width: '100%',
                                position: 'absolute',
                                right: '0',
                                zIndex: '500'
                            }}
                            ref={invitationStudent}
                            id="invitaitonDiv"
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
                                    height: '400px',
                                }}
                            >

                                {assignClassContext.studentState.users.map(user => (
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
                                                    onClick={() => assignClassContext.handleInviteUser(user)}>
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
                    {assignClassContext.studentState.students.map(student => (
                        <div className="my-1">
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
                                    {student.isInvited ?
                                        <button
                                            className="btn btn-green text-white d-flex px-2"
                                            onClick={() => { handleDeleteInvited(student) }}
                                        >
                                            <IconContext.Provider value={{
                                                className: " text-white cursor-ponter",
                                                size: '20px'
                                            }}>
                                                <MdCancel />
                                            </IconContext.Provider>
                                        </button>
                                        :
                                        ''}

                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )
            }
        </AssignClassContext.Consumer >
    );
}

export default ClassStudents;
