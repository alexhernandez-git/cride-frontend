import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Search from '../containers/Search'
import Layout from '../components/Layout/Layout'
import "../../static/assets/styles/styles.scss"
import ScrollToTop from "../utils/ScrollToTop"
import TeachersProfile from "../containers/TeachersProfile"
const App = props => {
    console.log(props);

    return (
        <BrowserRouter>
            <Layout>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profesores" component={Search} />
                    <Route path="/profesores/:id" component={TeachersProfile} />
                    <Route path="**" component={<h1>404 not found</h1>} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;