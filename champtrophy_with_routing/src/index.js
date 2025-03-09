import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//This is the startup file in a reactjs application. Same like main() method in Java.
//When the app is started this is the 1st file to be executed.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App boardName="BCCI" location="Mumbai"/>
  </React.StrictMode>
);

//Displaying the players component as a tag
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
