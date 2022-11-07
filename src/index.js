import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {store} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderAllTree = (store) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderAllTree);

rerenderAllTree(store);


reportWebVitals();
