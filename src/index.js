import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {store} from "./redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderAllTree = (state) => {
    debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(() =>{
    rerenderAllTree(store.getState());
});

rerenderAllTree(store.getState());


reportWebVitals();
