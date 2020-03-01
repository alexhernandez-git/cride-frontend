import React from 'react';
import Sidebar from '../components/Layout/Sidebar'
import ProfessorsFeed from '../components/Professors/ProfessorsFeed'
import FilterBar from "../components/Layout/FilterBar"
import Pagination from "../components/Layout/Pagination"
const Search = () => {
    return (
        <>
            <FilterBar />
            <div className="container">
                <div className="row  mt-5">
                    <div className="col-md-8">
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <ProfessorsFeed />
                        <div className="div-pagination mt-5">
                            <Pagination />

                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">

                        <Sidebar />
                    </div>
                </div>

            </div>

        </>
    );
}

export default Search;
