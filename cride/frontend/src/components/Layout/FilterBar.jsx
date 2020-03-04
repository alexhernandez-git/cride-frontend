import React, { useState } from 'react';
import "../../../static/assets/styles/components/Layout/FilterBar.scss"
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { Checkbox } from 'react-bootstrap';

const FilterBar = () => {

    const [state, setState] = useState({
        isOpen: false,
    })

    function handleToggle() {
        const filterBox = document.querySelector('.filter-bar')
        const hiddenContent = document.querySelector('.hidden-content')

        if (state.isOpen == false) {
            filterBox.classList = 'filter-bar shadow toggle-size'
            filterBox.style.animation = 'openFilters linear .2s'

            hiddenContent.style.display = 'block'
            hiddenContent.style.animation = 'showFilters linear .2s'

            var x = window.matchMedia("(min-width: 768px)")
            if (x.matches) { // If media query matches
                filterBox.style.height = "340px";
            } else {
                filterBox.style.height = "750px";
            }
            setState({ isOpen: true })

        }
        else {
            filterBox.classList = 'filter-bar shadow'

            filterBox.style.animation = 'closeFilters linear .2s'
            filterBox.style.height = '112px'
            hiddenContent.style.display = 'none'


            setState({ isOpen: false })
            console.log(state);

        }


    }

    return (
        <div className="filter-bar shadow">
            <div className="container pt-3 pb-3">
                <div className="text-dark font-weight-light">
                    <span className="h5 font-weight-normal">652</span> resultados para <span className="h5 font-weight-normal">react</span>
                </div>
                <div className="mt-3 d-md-flex justify-content-between">
                    <div className="div-dropdown">

                        <Dropdown>
                            <Dropdown.Toggle variant="" className="btn purple d-none d-md-block" id="dropdown-basic">
                                Valoraciones{' '}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="border-0 shadow">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="" className="btn yellow d-none d-md-block" id="dropdown-basic">
                                Duracion{' '}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="border-0 shadow">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div className="div-dropdown">

                        <Dropdown className="all-filters">

                            <Dropdown.Toggle
                                variant=""
                                className={`btn`}
                                id="dropdown-all-filters"
                                onClick={() => handleToggle()}
                            >
                                {state.isOpen == false ? 'Todos los filtros' : 'Cerrar'}

                            </Dropdown.Toggle>



                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="" className="btn d-none d-md-block" id="dropdown-basic">
                                Ordenar{' '}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="border-0 shadow">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="mt-3 hidden-content border-top pt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <p>Nivel</p>


                            {[`Todos los niveles`, `Principiante`, `Intermedio`, `Experto`].map((type, key) => (
                                <div key={`custom-checkbox ${key}`} className="mb-3">
                                    <Form.Check
                                        custom
                                        type={`checkbox`}
                                        id={key}
                                        label={key}
                                        label={type}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4">
                            <p>Nivel</p>


                            {[`Todos los niveles`, `Principiante`, `Intermedio`, `Experto`].map((type, key) => (
                                <div key={`custom-checkbox ${key}`} className="mb-3">
                                    <Form.Check
                                        custom
                                        type={`checkbox`}
                                        id={key}
                                        label={key}
                                        label={type}
                                    />
                                </div>
                            ))}
                        </div> <div className="col-md-4">
                            <p>Nivel</p>


                            {[`Todos los niveles`, `Principiante`, `Intermedio`, `Experto`].map((type, key) => (
                                <div key={`custom-checkbox ${key}`} className="mb-3">
                                    <Form.Check
                                        custom
                                        type={`checkbox`}
                                        id={key}
                                        label={key}
                                        label={type}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default FilterBar;
