import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Layout from '../components/Layout/Layout'

const App = props => {
    console.log(props);

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;