import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import "../static/assets/styles/styles.scss"
import { AppContext } from "./context/AppContext"
ReactDOM.render(
    <AppContext.Provider value={{ isAuth: false }}>
        <App />
    </AppContext.Provider>,
    document.getElementById('react')
);