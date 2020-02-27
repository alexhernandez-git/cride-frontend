import React, { useState } from 'react';
import "../../../static/assets/styles/components/Blackboard.scss"
import { FaPlay } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
const Blackboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="mt-4 blackboard border-warning position-relative">
                <div className="letters text-light text-center d-flex justify-content-center align-items-center">
                    <span>Ver como funciona</span>
                    <IconContext.Provider value={{
                        className: "position-absolute play-icon",
                        style: {
                            left: '0',
                            right: '0',
                            top: '0',
                            bottom: '0',
                            margin: 'auto'
                        }
                    }}>
                        <div>
                            <FaPlay onClick={handleShow} />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="whiteboard position-absolute"></div>
                <div className="whiteboard w-1 position-absolute"></div>
                <div className="whiteboard w-2 position-absolute"></div>
                <div className="whiteboard w-3 position-absolute"></div>
                <div className="whiteboard w-4 position-absolute"></div>
                <div className="draft position-absolute"></div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="bg-dark">
                    <div style={{ width: 'auto', height: 'auto' }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe src="https://www.youtube.com/embed/rrNNaA24qRc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveEmbed>
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-dark">
                    <Button className="text-light" variant="success" onClick={handleClose}>
                        Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Blackboard;
