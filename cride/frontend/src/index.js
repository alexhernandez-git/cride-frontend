import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import "../static/assets/styles/styles.scss"
import Context from "./Context"
ReactDOM.render(
    <Context.Provider value={{ isAuth: false }}>
        <App />
    </Context.Provider>,
    document.getElementById('react')
);