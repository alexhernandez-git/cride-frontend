import React, { Component, useState } from 'react';

function CardLayout(props) {
    console.log(props);

    return (
        <>
            <div className="out border-0">
                <div className="card bg-light">
                    <img className="rounded-circle" alt={"users here"} src={`https://source.unsplash.com/random/1`} height={56} width={56} />
                    <div className="card-body">
                        <h5 className="card-title">fewwaeffwea</h5>
                        <small className="card-text text-muted">In your contacts</small>
                        <br />
                        <button className="mt-2 btn btn-sm follow btn-danger">View circle</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default CardLayout;
