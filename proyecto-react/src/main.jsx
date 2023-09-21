import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Boton = ({parametro}) => {
    return(
        <button>{parametro}</button>
    )
}


root.render(
    <React.Fragment>
       <App/>
    </React.Fragment>
);

