import React from 'react';
import Sidebar from '../components/Layout/Sidebar'
import TeachersFeed from '../components/Teachers/TeachersFeed'
import FilterBar from "../components/Layout/FilterBar"
import Pagination from "../components/Layout/Pagination"
const Search = () => {
    return (
        <>
            <FilterBar />
            <div className="container text-info">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <TeachersFeed />
                        <TeachersFeed />
                        <TeachersFeed />
                        <TeachersFeed />
                        <TeachersFeed />
                        <TeachersFeed />
                        <TeachersFeed />
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
