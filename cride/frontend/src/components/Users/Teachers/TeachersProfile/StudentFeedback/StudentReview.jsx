import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "static/assets/styles/components/Teachers/TeachersProfile/StudentFeedback/StudentReview.scss"
const StudentReview = () => {
    return (
        <div>
            <div className="review border-top p-3">
                <div className="student-info d-none d-sm-flex">
                    <div className="div-img mr-3">
                        <img className="img-student" src={`https://source.unsplash.com/random/1`} />
                    </div>
                    <div>
                        <span className="d-block font-weight-light">6 days ago</span>
                        <span className="d-block font-weight-light text-dark">Michael Bishop</span>
                    </div>
                </div>
                <div>
                    <IconContext.Provider
                        value={{
                            className: "text-warning mb-2",
                            size: '20px'
                        }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </IconContext.Provider>
                    <div>I loved this course! It was cool to learn the class based approach as well as the functional approach!!</div>
                </div>


            </div>
        </div>
    );
}

export default StudentReview;
