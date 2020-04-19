import React, { useRef, useEffect, useContext } from 'react';
import { Form } from 'react-bootstrap'
import { IconContext } from "react-icons";

import { MdPersonAdd, MdCancel } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ClassStudents.scss"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import { AppContext } from "src/context/AppContext"
import FriendsList from './FriendsList';

const ClassStudents = (props) => {
    const teacherContext = useContext(TeachersProfileContext);
    const appContext = useContext(AppContext);

    const invitationStudent = useRef()
    const handleWindowClick = (e) => {

        if (e.target.closest("#invitaitonDiv") != invitationStudent.current && e.target.parentElement.parentElement !== null) {
            teacherContext.setInviteStudentsState(false)
        }


    }
    useEffect(() => {
        const handleClick = () => {

            if (teacherContext.inviteStudentsState) {
                window.onclick = handleWindowClick
            }
        }
        window.addEventListener("mousedown", handleClick);

        return () => {
            window.removeEventListener("mousedown", handleClick);
        };
    })
    useEffect(() => {

        return () => {
            teacherContext.setInviteStudentsState(false)

        }
    }, [])


    return (
        <AppContext.Consumer>
            {appContext => (
                <TeachersProfileContext.Consumer>
                    {teacherContext => (
                        <>
                            <div className="position-relative">

                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <span className="h5 m-0">Estudiantes</span>
                                    {console.log(props.isAdmin)}
                                    {props.isAdmin ?
                                        <button
                                            className="btn-green border text-white rounded-pill px-3 shadow"
                                            style={{
                                                height: '40px'
                                            }}
                                            onClick={teacherContext.handleClickInviteStudents}
                                        >
                                            <IconContext.Provider value={{
                                                className: " text-white cursor-ponter",
                                                size: '25px'
                                            }}>
                                                {teacherContext.inviteStudentsState ?
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
                                        :
                                        ''
                                    }

                                </div>

                            </div>
                            <div
                                className={teacherContext.inviteStudentsState ? 'd-block shadow rounded p-0 mt-4 mb-3' : 'd-none'}
                                style={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    zIndex: '500'
                                }}
                                ref={invitationStudent}
                                id="invitaitonDiv"
                            >
                                <div className="bg-gradient-green p-2 rounded-top text-white d-sm-flex justify-content-between align-items-center">
                                    <div className="d-block py-1 d-sm-none"></div>
                                    <div className="d-flex justify-content-center align-items-center d-sm-inline">

                                        <span className="h5 text-center mx-2 font-weight-normal">Amigos</span>
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
                                    {appContext.userProfile.friends.map(user => (
                                        <FriendsList user={user} classData={props.classData} />
                                    ))}

                                </div>
                            </div>
                            {props.classData.students ?
                                <>
                                    {
                                        props.classData.students.map(student => (
                                            <div className="my-1">
                                                {console.log(student)}
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
                                                                <span className="h6 font-weight-normal m-0">{student.user.name} {student.user.surname}</span>
                                                                {student.isAdmin ?
                                                                    <span
                                                                        className="badge badge-pill bg-gradient-green font-weight-normal text-white mt-2"
                                                                        style={{
                                                                            width: 'max-content'
                                                                        }}
                                                                    >Delegado</span>

                                                                    :
                                                                    ''}


                                                            </div>
                                                        </div>
                                                        {student.isInvited ?
                                                            <button
                                                                className="btn btn-green text-white d-flex px-2"
                                                                onClick={() => { teacherContext.handleDeleteInvited(student) }}
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
                                        ))

                                    }
                                </>
                                :
                                ''
                            }
                        </>
                    )
                    }
                </TeachersProfileContext.Consumer >
            )
            }
        </AppContext.Consumer >

    );
}

export default ClassStudents;
