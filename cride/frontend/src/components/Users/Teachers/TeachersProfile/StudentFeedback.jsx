import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "static/assets/styles/components/Teachers/TeachersProfile/StudentFeedback.scss"
import FeedbackBars from "./StudentFeedback/FeedbackBars"
import StudentReview from './StudentFeedback/StudentReview';
export default function TeacherPunctuation() {
    return (
        <div className="students-feedback shadow w-100 p-4 rounded mb-3">
            <div className="mb-3">
                <span className="d-block h3 font-weight-normal text-primary">Student feedback</span>
                <div className="row mt-3">
                    <div className="col-12 col-lg-3 general-feedback d-flex justify-content-center align-items-center flex-column">

                        <span className="h1">4.7</span>
                        <div>
                            <IconContext.Provider
                                value={{
                                    className: "global-class-name text-warning",
                                    size: '20px'
                                }}>
                                <div className="punctuation">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <span>Teacher Rating</span>
                    </div>
                    <div className="col-12 col-lg-9 specific-feedback">
                        <FeedbackBars type={5} percentage={75} />
                        <FeedbackBars type={4} percentage={20} />
                        <FeedbackBars type={3} percentage={5} />
                        <FeedbackBars type={2} percentage={4} />
                        <FeedbackBars type={1} percentage={1} />

                    </div>
                </div>
            </div>
            <div className="students-reviews">
                <span className="d-block h3 font-weight-normal text-primary pb-2">Reviews</span>
                <StudentReview />
                <StudentReview />
                <StudentReview />
                <StudentReview />
                <StudentReview />
                <StudentReview />
            </div>
        </div >
    )
}
