import React, { useState, useEffect, useContext } from 'react'
import { IconContext } from "react-icons";
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

import { MdPersonAdd, MdCheck } from "react-icons/md";
export default function FriendsList(props) {
    const teacherContext = useContext(TeachersProfileContext);
    console.log('classdata', props.classData)
    const { classData, user } = props
    const [isInvited, setIsInvited] = useState(false);
    const checkIsInvited = () => {
        setIsInvited(classData.invitations.some(invited => user.id == invited.id))

    }
    const handleInviteStudent = () => {
        // console.log('exists: ', students.some(student => user.id == student.id && student.is_invited))
        if (!classData.invitations.some(invited => user.id == invited.id)) {
            classData.invitations.push(user)
            checkIsInvited()
        }
        console.log(classData)
    }
    useEffect(() => {
        if (user && classData.invitations) {
            checkIsInvited()
        }
    }, [user, classData])
    return (
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
                    {isInvited ?
                        <button className="btn btn-green text-white">
                            <IconContext.Provider value={{
                                className: " text-white cursor-ponter",
                                size: '20px'
                            }}>
                                <MdCheck />
                            </IconContext.Provider>
                        </button>
                        :
                        <button className="btn btn-green text-white"
                            onClick={() => handleInviteStudent()}
                        >
                            <IconContext.Provider value={{
                                className: " text-white cursor-ponter",
                                size: '20px'
                            }}>
                                <MdPersonAdd />
                            </IconContext.Provider>
                        </button>

                    }
                </div>
            </div>
        </div>
    )
}
