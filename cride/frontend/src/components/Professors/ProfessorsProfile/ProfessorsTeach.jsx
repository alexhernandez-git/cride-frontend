import React, { useState } from 'react';
import "../../../../static/assets/styles/components/Professors/ProfessorsProfile/ProfessorsTeach.scss"
import { IconContext } from "react-icons";
import { IoMdCheckmark } from 'react-icons/io';

const ProfessorsTeach = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="professors-teach shadow w-100 p-4 rounded mb-3">

            <span className="d-block h3 font-weight-normal text-primary">¿What teacher teach?</span>
            <div className="row pr-4 pl-4">
                <div className="col-md-6 text-break">
                    <div className="subject p-2 position-relative">

                        <IconContext.Provider value={{
                            className: "mr-2 text-primary position-absolute",
                            size: '20px',

                        }}>
                            <IoMdCheckmark style={{ top: '9px', left: '-12px' }} />fewaafweewaf
                        </IconContext.Provider>
                    </div>


                </div>
                <div className="col-md-6">
                    <div className="subject p-2 position-relative">

                        <IconContext.Provider value={{
                            className: "mr-2 text-primary position-absolute",
                            size: '20px',

                        }}>
                            <IoMdCheckmark style={{ top: '9px', left: '-12px' }} />fewaafweewaf
                        </IconContext.Provider>
                    </div>

                </div>
            </div>


        </div >
    );
}

export default ProfessorsTeach;

{/* <Table striped hover size="lg" className="text-break">
    <thead>
        <tr>
            <th>Subject</th>
            <th className="text-right">Ability</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HTfewfawefaewawefaweawfeawfaweewfafaewfwaeMLfewaafweefewaafweawfeawewefafewaewffaewafweaweewafawe</td>
            <td className="text-right">
                <Punctuation />
            </td>
        </tr>
        <tr>
            <td>HTfewfawefaewawefaweawfeawfaweewfafaewfwaeMLfewaafweefewaafweawfeawewefafewaewffaewafweaweewafawe</td>
            <td className="text-right">
                <Punctuation />
            </td>
        </tr>
        <tr>
            <td>HTfewfawefaewawefaweawfeawfaweewfafaewfwaeMLfewaafweefewaafweawfeawewefafewaewffaewafweaweewafawe</td>
            <td className="text-right">
                <Punctuation />
            </td>
        </tr>
    </tbody>
</Table> */}