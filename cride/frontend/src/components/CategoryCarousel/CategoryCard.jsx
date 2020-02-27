import React, { Component, useState } from 'react';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "../../../static/assets/styles/components/CardLayout.scss"
function ProfessorCard() {
    return (
        <div className="div-card-slick">
            <Card className="card-slick">

                <Card.Img className="rounded-circle img-card" variant="top" src={`https://source.unsplash.com/random/1`} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="danger" className="text-light">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default CardLayout;