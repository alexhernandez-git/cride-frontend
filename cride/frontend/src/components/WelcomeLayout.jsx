import React from 'react';

const WelcomeLayout = () => {

    return (
        <div style={{
            borderTop: "20px solid",
            borderBottom: "20px solid",
            height: "400px",
        }} className="bg-dark border-danger">
            <div className="container">

                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h1 className="mt-3 text-light">Welcome</h1>
                        <input class="mt-4 form-control bg-light w-75" type="text" placeholder="Search" />
                    </div>
                    <div className="col-md-6">
                        <div style={{ height: '300px' }} className="mt-4 bg-success blackboard border border-black">

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default WelcomeLayout;
