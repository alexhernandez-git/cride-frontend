import React, { useState, useContext } from 'react';
import { IconContext } from "react-icons";
import { IoMdCheckmark } from 'react-icons/io';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { TeachersProfileContext } from "src/context/TeachersProfileContext/TeachersProfileContext"
import { Table } from 'react-bootstrap'
const TeachersLanguages = () => {
    const teacherContext = useContext(TeachersProfileContext);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <TeachersProfileContext.Consumer>
            {teacherContext => (
                <div className="teacher-lang shadow w-100 p-4 rounded d-none d-md-block">

                    <span className="d-block h3 font-weight-normal text-primary mb-3">Languages</span>
                    {teacherContext.teacherState.user.teacher.languages.length != 0 ?
                        <Table responsive className="botder-top border-bottom text-grey mb-0">
                            <tbody>
                                {teacherContext.teacherState.user.teacher.languages.map((lang) => (
                                    <tr key={lang.id}>
                                        <td>{lang.languageLabel}</td>
                                        <td>{lang.levelLabel}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                        :
                        ''
                    }

                </div>
            )
            }
        </TeachersProfileContext.Consumer >
    );
}

export default TeachersLanguages;
