import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Img from 'static/assets/img/imagen.png'
const TeachersProfileImage = () => {
    const cropper = useRef(null);
    const [cropResult, setCropResult] = useState();

    const cropImage = () => {
        if (typeof cropper.getCroppedCanvas() === "undefined") {
            return;
        }
        this.setState({
            cropResult: cropper.getCroppedCanvas().toDataURL()
        });
    }
    return (
        <Cropper
            ref={cropper}
            src={Img}
            style={{ height: 400, width: '100%' }}
            // Cropper.js options
            aspectRatio={16 / 9}
            guides={false}
            crop={_crop} />
    );
}

export default TeachersProfileImage;
