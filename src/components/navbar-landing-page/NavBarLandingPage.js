import "./NavBarLandingPage.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLandingPage() {
    return(
        <nav className="outer-container-navigation">
            <div className="inner-container-navigation">
                <ul className="navigation-content">

                    <NavLink
                        to="/registration-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Register
                    </NavLink>

                    <NavLink
                        to="/login-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Login
                    </NavLink>


                </ul>
            </div>
        </nav>
    )
}

export default NavBarLandingPage;