import React, { useState, useContext } from 'react';
import 'static/assets/styles/components/Users/Teachers/TeachersProfile/TeacherPresentation.scss'
import Modal from "react-bootstrap/Modal"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"
import { FaPlay } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

const TeachersPresentation = () => {
    const teacherContext = useContext(TeachersProfileContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <>
                    <div className="teacher-presentation shadow w-100 p-4 rounded mb-3">
                        <div className="d-sm-flex justify-content-between">
                            <span className="d-block h3 font-weight-normal text-primary">Presentation</span>

                            <IconContext.Provider value={{
                                className: "play-icon text-primary",
                                style: {}
                            }}>
                                <div onClick={handleShow} className="d-flex align-items-center">
                                    <FaPlay />
                                    <span className="ml-2">Video de presentación</span>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <p>{teacherContext.teacherState.user.teacher.presentation}</p>
                    </div>
                    <Modal show={show} onHide={handleClose} size="xl" centered>
                        <Modal.Body className="p-0">
                            <div style={{ width: 'auto', height: 'auto' }}>
                                <ResponsiveEmbed aspectRatio="16by9">
                                    <iframe width="1280" height="720" src={teacherContext.teacherState.user.teacher.video_presentation} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </ResponsiveEmbed>
                            </div>
                        </Modal.Body>

                    </Modal>
                </>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default TeachersPresentation;
