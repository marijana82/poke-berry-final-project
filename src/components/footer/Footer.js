import "./Footer.css";
import React from "react";


function Footer({ message, description }) {
    return(
        <footer className="footer-outer-container">
            <article className="footer-inner-container">
                <div className="footer-content-container">
                    <h4 className="footer-message">{message}</h4>
                    <p className="footer-description">{description}</p>
                </div>
            </article>
        </footer>
    );
}

export default Footer;