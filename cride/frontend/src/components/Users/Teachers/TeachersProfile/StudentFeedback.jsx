import React, { useContext, useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "static/assets/styles/components/Users/Teachers/TeachersProfile/StudentFeedback.scss"
import FeedbackBars from "./StudentFeedback/FeedbackBars"
import StudentReview from './StudentFeedback/StudentReview';
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import StarRating from 'src/components/Layout/StarRatings'
export default function TeacherPunctuation() {
    const teacherContext = useContext(TeachersProfileContext);
    const [mean, setMean] = useState(false);
    const [percentages, setPercentages] = useState([])
    useEffect(() => {
        if (teacherContext.teacherState.teacher.ratings.length > 0) {
            let oneStars = 0, twoStars = 0, threeStars = 0, fourStars = 0, fiveStars = 0;
            teacherContext.teacherState.teacher.ratings.map((rating) => {
                if (rating.rating <= 1) {
                    oneStars++
                } else if (rating.rating <= 2) {
                    twoStars++
                } else if (rating.rating <= 3) {
                    threeStars++
                } else if (rating.rating <= 4) {
                    fourStars++
                } else if (rating.rating <= 5) {
                    fiveStars++
                }
            })
            console.log([oneStars, twoStars, threeStars, fourStars, fiveStars]);

            const newArray = [fiveStars, fourStars, threeStars, twoStars, oneStars].map((percentage) => {

                return percentage * 100 / teacherContext.teacherState.teacher.ratings.length
            })
            setPercentages(newArray);



        }

    }, [teacherContext.teacherState.teacher.ratings.length])
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="students-feedback shadow w-100 p-4 rounded mb-3">
                    <div className="mb-3">
                        <span className="d-block h3 font-weight-normal text-primary">Student feedback</span>
                        <div className="row mt-3">
                            <div className="col-12 col-lg-3 general-feedback d-flex justify-content-center align-items-center flex-column">

                                <span className="h1">{teacherContext.teacherState.teacher.rating}</span>
                                <div>
                                    <IconContext.Provider
                                        value={{
                                            className: "global-class-name text-warning",
                                            size: '20px'
                                        }}>
                                        <div className="punctuation">
                                            <StarRating rating={teacherContext.teacherState.teacher.rating} />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <span>Teacher Rating</span>
                            </div>
                            <div className="col-12 col-lg-9 specific-feedback">
                                {percentages.length > 0 ?
                                    <>
                                        {percentages.map((percentage, index) => (
                                            <>
                                                <FeedbackBars type={5 - index} percentage={percentage} />
                                            </>
                                        ))}
                                    </>
                                    :
                                    ''
                                }


                            </div>
                        </div>
                    </div>
                    <div className="students-reviews">
                        <span className="d-block h3 font-weight-normal text-primary pb-2">Reviews</span>
                        {teacherContext.teacherState.teacher.ratings.map(rating => (
                            <StudentReview rating={rating} />
                        ))}

                    </div>
                </div >
            )
            }
        </TeachersProfileContext.Consumer >
    )
}
