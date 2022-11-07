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
                <App state={store.getState()} addPost={store.addPost.bind(store)} editCurrentPost={store.editCurrentPost.bind(store)} addMessage={store.addMessage.bind(store)} editCurrentMessage={store.editCurrentMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderAllTree);

rerenderAllTree(store);


reportWebVitals();
