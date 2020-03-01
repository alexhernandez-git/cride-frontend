import React from 'react';
import "../../../static/assets/styles/components/Layout/WelcomeLayout.scss"
import Blackboard from "./Blackboard"
import Form from "react-bootstrap/Form"
const WelcomeLayout = () => {

    return (
        <div className="div-welcome border-secondary bg-secondary box-shadow" >

            <div className="container">

                <div className="row mt-3">
                    <div className="col-md-6 align-self-center">
                        <span className="mt-3 text-light h4">Bienvenido a <h2 className="h2 mb-4">OneToMany Academy</h2></span>
                        <Form.Control type="email" placeholder="¿Que estas buscando?" />
                    </div>
                    <div className="col-md-6">
                        <Blackboard />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default WelcomeLayout;
