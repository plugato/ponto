import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MapsContext from './context/maps/context';
import GlobalContext from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// <React.StrictMode>
root.render(
  <GlobalContext>
    <App />
  </GlobalContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
