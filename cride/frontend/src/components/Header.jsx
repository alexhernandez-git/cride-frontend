import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";
export default function Header() {
    return (
        <>
            <style type="text/css">
                {`
                .navbar-light .navbar-toggler,
                .navbar-light .navbar-toggler:focus{
                    border: none!important;
                    outline:none !important;
                }
                a.ml-md-2.m-2.btn.btn-outline-info.pr-4.pl-4.nav-link:hover {
                    color: #fff;
                }
                .form-search-parent{
                    width: 50%;
                }
                @media only screen and (min-width: 768px) {
                    .form-search-parent{
                        width: 30%;
                    }
                  }
                  @media only screen and (min-width: 1024px) {
                    .form-search-parent{
                        width: 50%;
                    }
                  }
                  
                .form-search{
                   
                    padding: 20px 20px 20px 40px!important;
                }
            `}
            </style>
            < nav className="navbar navbar-expand-lg navbar-light bg-ligth" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="mr-auto pr-4">
                    <a className="navbar-brand" href="#">Home</a>
                    <a href="" className="nav-link btn-dark border-0 mb-3 d-none d-sm-inline">Categories</a>
                </div>


                <form className="position-relative form-search-parent border-left">
                    <input className="form-control mr-sm-2 ml-md-2 border-0 w-100 align-middle form-search rounded-0" type="search" placeholder="Search" aria-label="Search" />
                    <IconContext.Provider value={{
                        className: "position-absolute",
                        style: {
                            top: '13px',
                            left: '20px',
                            color: 'rgba(0,0,0,0.5)'
                        }
                    }}>
                        <div>
                            <FaSearch />
                        </div>
                    </IconContext.Provider>
                </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link btn d-flex align-items-center justify-content-center mt-2" href="#">Teach</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-md-2 m-2 btn btn-outline-dark pr-4 pl-4" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-md-2 m-2 btn btn-dark pr-4 pl-4 text-white" href="#">Signup</a>
                        </li>

                    </ul>
                </div>
            </nav >
        </>
    )
}
