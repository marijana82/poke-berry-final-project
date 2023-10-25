import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import CustomLoginProvider from "./context/LoginContext";
import CustomFavoritesContext from "./context/FavoritesContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <React.StrictMode>
            <CustomLoginProvider>
                <CustomFavoritesContext>

                <App />

            </CustomFavoritesContext>
            </CustomLoginProvider>
        </React.StrictMode>
    </Router>



);


