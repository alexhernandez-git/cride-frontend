import React, { useState } from 'react';
import Select from 'react-select'
import { Col, Row } from 'react-bootstrap';
import Prices from "static/data/prices"
const TeachersProfilePricing = () => {
    const [price, setPrice] = useState(Prices[0])
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
                        <button className="btn btn-green text-white float-right">Guardar</button>

                    </div>
                </Col>
            </Row>


        </>
    );
}

export default TeachersProfilePricing;
