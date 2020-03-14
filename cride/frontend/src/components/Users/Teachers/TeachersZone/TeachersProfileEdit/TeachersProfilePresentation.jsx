import React, { useRef, useState, useEffect } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
const TeachersProfilePresentation = () => {
    const inputFileVideo = useRef(null);
    const [srcVideo, setSrcVideo] = useState();
    const handleUploadVideo = (e) => {
        e.preventDefault()

        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();

        reader.onload = () => {
            setSrcVideo(reader.result);
        };
        reader.readAsDataURL(files[0]);

    }

    return (
        <div className="bg-white shadow p-3 rounded my-2">
            <span className="d-none d-md-block">Presentación</span>
            <Row>

                <Col lg={{ span: 4 }} className="mb-3 text-center d-lg-flex justify-content-end align-items-center">
                    <span className="h5 m-0 font-weight-normal">Presentación</span>

                </Col>


                <Col lg={{ offset: 1, span: 6 }}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Haz que tus alumnos te conozcan" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="video-upload">

                <Col lg={{ span: 4 }} className="text-center d-lg-flex justify-content-end align-items-center">
                    <span className="h5 m-0 font-weight-normal">Video de presentación</span>
                </Col>
                <Col lg={{ offset: 1, span: 6 }}>
                    {srcVideo != null ?
                        <video
                            controls
                            style={{
                                width: "100%",
                                padding: "5px"
                            }}
                            src={srcVideo}
                            alt=""
                            className="my-3 border rounded"
                        /> :
                        <label
                            htmlFor="video-upload"
                            className="cursor-pointer w-100"
                            style={{

                            }}
                        >
                            <video

                                poster={'../../../../../../static/assets/img/video-icon.png'}
                                style={{
                                    width: "100%",
                                    padding: "5px"
                                }}
                                alt=""
                                className="my-3 border rounded"
                            />
                        </label>
                    }

                    <label htmlFor="video-upload" className="bg-gradient-green p-2 rounded text-white cursor-pointer w-100 text-center">Subir video</label>
                    <input type="file" id="video-upload" className="d-none" ref={inputFileVideo} placeholder="Imagen" onChange={handleUploadVideo} />

                </Col>
            </Row>



        </div >
    );
}

export default TeachersProfilePresentation;
