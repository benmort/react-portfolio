import React from 'react';
import ReactDOM from "react-dom/client";
import TagManager from 'react-gtm-module'
import App from './app/App';
import './index.css';

const tagManagerArgs = {
    gtmId: 'GTM-N4XQ6R83'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
