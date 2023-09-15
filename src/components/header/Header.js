import "./Header.css";
import React from "react";


function Header({ message, description }) {
    return(
        <header className="header-outer-container">
            <div className="header-inner-conainer">
                <article className="header-content-container">
                    <h1>{message}</h1>
                    <h2 className="header-description">{description}</h2>
                </article>
            </div>
        </header>
    )
}

export default Header;