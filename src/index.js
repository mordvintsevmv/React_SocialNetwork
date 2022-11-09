import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {store} from "./redux/reduxStore";
import {StoreContext} from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderAllTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderAllTree);

rerenderAllTree();

reportWebVitals();
