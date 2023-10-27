import "./Header.css";
import React from "react";
import {POKEMON_SPRITES_CHARMANDER} from "../../assets/images/constants";
import {Link, useNavigate} from "react-router-dom";


function Header({ message, description, children }) {

    //const navigate = useNavigate();

    return(
        <header className="header-outer-container">
            <div className="header-inner-conainer">
                <div className="header-content-container">
                    <h1>{message}</h1>
                    <p className="header-description">{description}</p>
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Header;