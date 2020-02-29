import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/App';
import "../static/assets/styles/styles.scss"
import "../static/assets/mdbreact/dist/scss/mdb-pro.scss"
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react')
);