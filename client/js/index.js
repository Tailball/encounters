//5f898eb1ec5649794c147e5c auth token for fluffy@mail.com

import React from 'react';
import reactDOM from 'react-dom';

import App from './App';


window.addEventListener('load', onLoaded);

function onLoaded() {
    const container = document.querySelector('#reactContainer');
    reactDOM.render(createApp(), container);
}

//Use this function to bootstrap things like router and redux
function createApp() {
    return (
        <App />
    );
}