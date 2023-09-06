import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import CustomLoginProvider from "./context/LoginContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <React.StrictMode>

            <CustomLoginProvider>

                <App />

            </CustomLoginProvider>

        </React.StrictMode>

    </Router>



);


