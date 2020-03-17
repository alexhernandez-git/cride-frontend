import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import { Col, Row } from 'react-bootstrap';
import Prices from "static/data/prices"
const TeachersProfilePricing = () => {
    const [price, setPrice] = useState(Prices[0])
    const [isEditing, setIsEditing] = useState(false)
    useEffect(() => {

        return () => {
            setIsEditing(true)
        };
    }, [price]);
    const handleSave = () => {
        setIsEditing(false)
    }
    return (
        <>
            <Row>
                <Col md={4}>
                    <span className="">Ponle precio a tu clase</span>
                    <div className="d-flex justify-content-between mt-2">

                        <Select
                            value={price}
                            options={Prices}
                            onChange={setPrice}
                            className="w-100 mr-2"
                            searchable={false}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    text: 'orangered',
                                    primary25: '#45948930',
                                    primary50: '#45948952',
                                    primary: '#459489',
                                },
                            })}
                        />
                        {isEditing ?
                            <span className="btn btn-green text-white float-right" onClick={handleSave}>Guardar</span>

                            :
                            <span className="btn btn-green-disabled rounded-pill text-white float-right">Guardar</span>


                        }

                    </div>
                </Col>
            </Row>


        </>
    );
}

export default TeachersProfilePricing;
