import React from 'react';
import "../../../static/assets/styles/components/Layout/FilterBar.scss"
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
const FilterBar = () => {
    return (
        <div className="filter-bar shadow">
            <div className="container pt-3 pb-3">
                <div className="text-dark ml-3 font-weight-light">
                    <span className="h5 font-weight-normal">652</span> resultados para <span className="h5 font-weight-normal">react</span>
                </div>
                <div className="mt-3 ml-3 div-dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="" className="btn purple" id="dropdown-basic">
                            Valoraciones{' '}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="border-0 shadow">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="" className="btn yellow" id="dropdown-basic">
                            Duracion{' '}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="border-0 shadow">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div >
    );
}

export default FilterBar;
