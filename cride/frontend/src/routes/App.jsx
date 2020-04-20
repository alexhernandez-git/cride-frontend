import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'src/containers/Home'
import Search from 'src/containers/Search'
import Layout from 'src/components/Layout/Layout'
import "static/assets/styles/styles.scss"
import ScrollToTop from "src/utils/ScrollToTop"
import TeachersProfile from "src/containers/TeachersProfile"
import StudentsZone from 'src/containers/StudentsZone';
import TeachersZone from 'src/containers/TeachersZone';
import Teaches from 'src/containers/Teaches';
import { AppContext } from 'src/context/AppContext'

const App = () => {
    return (

        <BrowserRouter>
            <Layout>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/teachers" component={Search} />
                    <Route path="/teacher/:id" component={TeachersProfile} />
                    <Route path="/teaches" component={Teaches} />

                    <Route path="/myzone/student" component={StudentsZone} />
                    <Route path="/myzone/student/**" component={StudentsZone} />


                    <Route path="/myzone/teacher" component={TeachersZone} />
                    <Route path="/myzone/teacher/**" component={TeachersZone} />

                    <Route path="/**" component={() => <h1>404 not found</h1>} />
                </Switch>
            </Layout>
        </BrowserRouter>


    );
}
export default App;