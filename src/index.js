import React from 'react';
//dependancies 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
//service workers
import * as serviceWorker from './serviceWorker';
//css files
import './cssFiles/index.css';
import 'semantic-ui-css/semantic.min.css';
//components
import store from './redux/store'
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







