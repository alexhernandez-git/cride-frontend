import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { AppProvider } from 'src/context/AppContext'
import "../static/assets/styles/styles.scss"
ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('react')
);