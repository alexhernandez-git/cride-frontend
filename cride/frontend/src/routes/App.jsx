import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Search from '../containers/Search'
import Layout from '../components/Layout/Layout'
import "../../static/assets/styles/styles.scss"
import ScrollToTop from "src/utils/ScrollToTop"
import TeachersProfile from "../containers/TeachersProfile"
import UsersZone from '../containers/UsersZone';
const App = props => {
    return (
        <BrowserRouter>
            <Layout>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/teachers" component={Search} />
                    <Route path="/teacher/:id" component={TeachersProfile} />
                    <Route path="/myzone" component={UsersZone} />
                    <Route path="/myzone/**" component={UsersZone} />
                    <Route path="/**" component={() => <h1>404 not found</h1>} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;