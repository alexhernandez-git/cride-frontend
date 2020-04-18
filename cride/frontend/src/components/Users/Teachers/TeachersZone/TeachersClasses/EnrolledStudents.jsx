import React from 'react'
import { IconContext } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
export default function EnrolledStudents(props) {
    const { id, name, surname, isAdmin, email } = props.student
    return (
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
                            <span className="h6 font-weight-normal m-0">{name} {surname}</span>
                            {isAdmin ?

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
                    <div>{email}</div>
                    {/* <button
                        className="btn btn-green text-white d-flex px-2"
                    >
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
    )
}
