import React from 'react'
import { MdMessage } from 'react-icons/md';
import { IconContext } from "react-icons";
export default function EnrolledStudents(props) {
    const { name, surname, email } = props.student.user
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
                            {props.student.isAdmin ?

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
                    <a href={"mailto:" + email}>

                        <button
                            className="btn btn-green text-white d-flex px-2"
                        >
                            <IconContext.Provider value={{
                                className: " text-white cursor-ponter",
                                size: '20px'
                            }}>
                                <MdMessage />
                            </IconContext.Provider>
                        </button>
                    </a>

                </div>
            </div>
        </div >
    )
}
