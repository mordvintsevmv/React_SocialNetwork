import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, addMessage, editCurrentPost, editCurrentMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={addPost} addMessage={addMessage} editCurrentPost={editCurrentPost} editCurrentMessage={editCurrentMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
