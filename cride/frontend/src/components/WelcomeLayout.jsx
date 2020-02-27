import React from 'react';
import "../../static/assets/styles/components/WelcomeLayout.scss"
import Blackboard from "./Blackboard"
const WelcomeLayout = () => {

    return (
        <div className="div-welcome bg-dark border-danger">
            <div className="container">

                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h1 className="mt-3 text-light">Welcome</h1>
                        <input className="mt-4 form-control bg-light w-100" type="text" placeholder="Search" />
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
