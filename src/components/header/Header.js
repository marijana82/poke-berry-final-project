import "./Header.css";
import React from "react";


function Header({ message, description, children }) {


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