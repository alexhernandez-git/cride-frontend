import React, { useState } from 'react';
import './node_modules/static/assets/styles/components/Teachers/TeachersProfile/TeacherPresentation.scss'
import Modal from "react-bootstrap/Modal"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"
import { FaPlay } from 'react-icons/fa';
import { IconContext } from "react-icons";
const TeachersPresentation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aspernatur aperiam ducimus eligendi nihil praesentium pariatur a iste nobis optio quia fugit, explicabo nisi iusto quis perspiciatis ut asperiores culpa.</p>
            </div>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Body className="p-0">
                    <div style={{ width: 'auto', height: 'auto' }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/l0s6ZLkV-U0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default TeachersPresentation;
