import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderAllTree} from "./render";
import state, {editCurrentPost} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderAllTree(state);

reportWebVitals();
