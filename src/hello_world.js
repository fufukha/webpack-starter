import React from 'react';
import { render } from 'react-dom';
import FormContainer from './components/smart/FormContainer';

function helloWorld() {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hello World';
    return h1;
}

function component() {
    const element = document.createElement('div');
    element.id = 'app'
    return element;
}


document.body.appendChild(helloWorld());
document.body.appendChild(component());

render(
    <FormContainer />, document.getElementById('app')
);
