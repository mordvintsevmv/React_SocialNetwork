import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {store} from "./redux/reduxStore";
import {Provider} from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderAllTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} child={<App />}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderAllTree);

rerenderAllTree();

reportWebVitals();
