import "./Footer.css";
import React, {useEffect} from "react";


function Footer({ buttonMessage, message, description, children }) {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);


    return(
        <footer className="footer-outer-container">
            <article className="footer-inner-container">
                <div className="footer-content-container">
                    <h4 className="footer-message">{message}</h4>
                    <p className="footer-description">{description}</p>
                    <button
                        className="back-to-top"
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }}
                    >{buttonMessage}

                        {children}

                    </button>
                </div>
            </article>
        </footer>
    );
}

export default Footer;