import React from 'react';
import Sidebar from '../components/Layout/Sidebar'
import ProfessorsFeed from '../components/Professors/ProfessorsFeed'

const Search = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5">
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
