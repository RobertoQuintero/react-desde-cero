import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));
const root = document.getElementById('root')
  // elemento = React.createElement(componente,propiedades,hijos)
  // elemento = React.createElement('h1',{claseName: 'saludo'},'hola mundo')
// ReactDOM.render(elemento,root)
ReactDOM.render(<App /> ,root)





