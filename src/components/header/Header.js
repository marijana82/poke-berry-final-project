import "./Header.css";
import React from "react";
import {POKEMON_SPRITES_CHARMANDER} from "../../assets/images/constants";
import {Link} from "react-router-dom";


function Header({ message, description }) {
    return(
        <header className="header-outer-container">
            <div className="header-inner-conainer">
                <div className="header-content-container">
                    <Link to="/">
                        <img src={POKEMON_SPRITES_CHARMANDER} alt="logo" className="logo"/>
                    </Link>

                    <h1>{message}</h1>
                    <h2 className="header-description">{description}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;