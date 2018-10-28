import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TodoList from './js/TodoList';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    <Provider store = {store}>
        <TodoList />
    </Provider>
);


// ReactDOM.render(<SiderDemo />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
