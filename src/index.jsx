import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";
import "./App.css"
import imageData from "./components/DataComponent"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClass imageData={imageData} />   
    <App imageData={imageData} />
  </React.StrictMode>
);
