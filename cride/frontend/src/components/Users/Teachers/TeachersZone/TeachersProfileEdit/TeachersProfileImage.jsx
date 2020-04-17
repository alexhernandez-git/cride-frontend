import React, { useRef, useState, useEffect, useContext } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { AppContext } from "src/context/AppContext"
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
const TeachersProfileImage = () => {
    const appContext = useContext(AppContext);
    const cropper = useRef(null);
    const inputFile = useRef(null);
    const [cropResult, setCropResult] = useState(appContext.userProfile.user.profile.picture);
    const [src, setSrc] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        inputFile.current.value = ""
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleUploadImage = (e) => {
        e.preventDefault()
        handleShow()

        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        console.log(reader);

        reader.onload = () => {
            setSrc(reader.result);

        };
        reader.readAsDataURL(files[0]);
    }
    const cropImage = () => {

        if (typeof cropper.current.getCroppedCanvas() === "undefined") {
            return;
        }
        setCropResult(cropper.current.getCroppedCanvas().toDataURL());
        appContext.uploadProfileImage(cropper.current.getCroppedCanvas().toDataURL())
        handleClose()
    }
    return (
        <AppContext.Consumer>
            {appContext => (
                <>
                    <div className="bg-white shadow p-3 rounded my-2">
                        <span className="d-none d-md-block">Imagen de perfil</span>
                        <Row className="image-avatar-upload">
                            <Col lg={{ span: 4 }} className="text-center d-lg-flex justify-content-end align-items-center">
                                <span className="h5 m-0 font-weight-normal">Imagen</span>
                            </Col>
                            <Col lg={{ offset: 1, span: 6 }}>
                                <Row>
                                    <Col lg={4} className="d-flex justify-content-center align-content-center align-items-center">
                                        <label
                                            htmlFor="avatar-upload"
                                            className="cursor-pointer"
                                            style={{
                                                width: '100px'
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "100%",
                                                    padding: "5px"
                                                }}
                                                src={cropResult}
                                                alt=""
                                                className="my-3 border rounded-circle"
                                            />
                                        </label>

                                    </Col>
                                    <Col lg={6} className="d-flex justify-content-center align-content-start align-items-center flex-column">
                                        <label htmlFor="avatar-upload" className="bg-gradient-green p-2 rounded-pill text-white cursor-pointer w-100 text-center">Subir imagen</label>
                                        <input type="file" id="avatar-upload" className="d-none" ref={inputFile} placeholder="Imagen" onChange={handleUploadImage} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton className="border-0">
                            </Modal.Header>
                            <Modal.Body className="p-0">

                                <Cropper
                                    ref={cropper}
                                    src={src}
                                    style={{ height: 400, width: '100%' }}
                                    // Cropper.js options
                                    viewMode={1}
                                    aspectRatio={1}
                                    guides={false}

                                />

                            </Modal.Body>
                            <Modal.Footer className="border-0">
                                <Button className="btn-gradient-green bg-gradient-green border-0" onClick={cropImage}>
                                    Subir
                    </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </>
            )
            }
        </AppContext.Consumer >
    );
}

export default TeachersProfileImage;
