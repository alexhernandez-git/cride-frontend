import React from 'react';
import "../../../static/assets/styles/components/Layout/WelcomeLayout.scss"
import Blackboard from "./Blackboard"
import Form from "react-bootstrap/Form"
const WelcomeLayout = () => {

    return (
        <>
            <div className="div-welcome bg-gradient-green shadow pt-5 pb-5" >

                <div className="container">

                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <span className="mt-3 text-light h4 font-weight-light text-shadow">Bienvenido a <h2 className="h2 mb-4">ClassLine Academy</h2></span>
                            <Form.Control type="email" placeholder="¿Que estas buscando?" />
                        </div>
                        <div className="col-md-6">
                            <Blackboard />
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-danger shadow text-white">
                <div className="container">
                    <div className="row h4 text-center font-weight-light">
                        <div className="col-md-4 d-flex justify-content-center align-items-center p-2">Elije a tu profesor online</div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center p-2">Haz una clase online tu solo o con compañeros</div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center p-2">Y aprende de los mejores</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomeLayout;
