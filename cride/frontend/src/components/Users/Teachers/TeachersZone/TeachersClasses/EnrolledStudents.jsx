import React from 'react'
import { IconContext } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
export default function EnrolledStudents(props) {
    const { id, name, surname, isAdmin } = props.student
    return (
        <div className=" border-top p-2">
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
                        <span className="h5 m-0">{name} {surname}</span>
                        {isAdmin ?

                            <span className="badge badge-pill bg-gradient-green text-white mt-2">Delegado</span>
                            :
                            ''
                        }

                    </div>
                </div>
                <button className="btn btn-green text-white d-none d-sm-block" style={{ width: '150px' }}>
                    <IconContext.Provider value={{
                        className: " text-white cursor-ponter",
                        size: '20px'
                    }}>
                        <MdMessage /> Mensage
                    </IconContext.Provider>
                </button>
            </div>
            <button className="btn btn-green w-100 text-white d-block d-sm-none mt-3">
                <IconContext.Provider value={{
                    className: " text-white cursor-ponter",
                    size: '20px'
                }}>
                    <MdMessage /> Mensage
                </IconContext.Provider>
            </button>
        </div>
    )
}
