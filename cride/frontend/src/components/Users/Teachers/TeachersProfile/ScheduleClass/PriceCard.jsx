import React, { useState, useContext, useEffect, useRef } from 'react'
import Card, { CardFooter } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "static/assets/styles/components/Users/Teachers/TeachersProfile/ScheduleClass/PriceCard.scss"
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"

export default function PriceCard(props) {
    const teacherContext = useContext(TeachersProfileContext);
    const [discount, setDiscount] = useState(0);
    const { id, title, sessions, description, price, classes } = props.content
    useEffect(() => {
        if (classes > 1) {
            setDiscount(parseFloat(teacherContext.teacherProfile.teacher.classPrice * classes - price * classes).toFixed(2))
        }
    }, []);
    const handleSelectClasses = () => {
        teacherContext.setKey(1)
        teacherContext.selectClasses(classes)
    }
    return (
        <div className="price-card d-flex justify-content-between p-3 pb-5">
            <Card
                className="text-grey border-0 shadow"
                style={{ height: '500px' }}
            >
                <Card.Img className="rounded-circle img-card mt-4" variant="top" src={`https://source.unsplash.com/random/10`} />

                <Card.Body>
                    <span className="d-block h4 mb-0">{title}</span>
                    <span className="d-block text-secondary">{sessions}</span>
                    <Card.Text>
                        <small>{description}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-top-0">
                    <span className="d-block h5 text-secondary">{price}{typeof price == 'number' ? '€' : ''}{classes > 1 ? '/classe' : ''}</span>
                    {discount > 0 ?
                        <span>
                            <small className="d-block font-weight-light">
                                Te ahorras</small>
                            <span className="h5 font-weight-light">{discount}€</span>
                        </span>
                        : ''}
                    <a
                        className="btn btn-green btn-block text-white mt-3"
                        onClick={handleSelectClasses}
                    >Seleccionar</a>

                </Card.Footer>
            </Card>
        </div >
    )
}
