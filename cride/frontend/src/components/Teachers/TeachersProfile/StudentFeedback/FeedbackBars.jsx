import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "../../../../../static/assets/styles/components/Teachers/TeachersProfile/StudentFeedback/FeedbackBars.scss"
export default function FeedbackBar(props) {
    const [type, setType] = useState(props.type)
    const [percentage, setPercentage] = useState(props.percentage)
    console.log(percentage);
    function renderStars(type) {
        switch (type) {
            case 5:
                return (
                    <div className="punctuation d-flex">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                    </div>
                );
            case 4:
                return (
                    <div className="punctuation d-flex">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-gray-light" />
                    </div>
                );
            case 3:
                return (
                    <div className="punctuation d-flex">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-gray-light" />
                        <FaStar className="text-gray-light" />
                    </div>
                );
            case 2:
                return (
                    <div className="punctuation d-flex">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-gray-light" />
                        <FaStar className="text-gray-light" />
                        <FaStar className="text-gray-light" />
                    </div>
                );
            case 1:
                return (
                    <div className="punctuation d-flex">
                        <FaStar className="text-warning" />
                        <FaStar className="text-gray-light" />
                        <FaStar className="text-gray-light" />
                        <FaStar className="text-gray-light" />
                        <FaStar className="text-gray-light" />
                    </div>
                );
        }
    }
    return (
        <div>
            <div className="grid">

                <div className="progress align-self-center">
                    <div
                        className="progress-bar bg-gradient-green"
                        role="progressbar"
                        style={{ width: percentage + '%' }}
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <IconContext.Provider
                    value={{
                        size: '20px'
                    }}>
                    {renderStars(type)}
                </IconContext.Provider>

                <span className="text-right">{percentage}%</span>
            </div>
        </div>
    )
}
