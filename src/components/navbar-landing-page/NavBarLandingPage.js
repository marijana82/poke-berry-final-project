import "./NavBarLandingPage.css";
import React from "react";
import { NavLink } from "react-router-dom";

//to this navbar I can further integrate a <SearchBar/> , I just have to put a component between a <li></li>
//in css listnavbar is equivalent to my ul

function NavBarLandingPage() {
    return(
        <nav className="outer-container-navigation">
            <div className="inner-container-navigation">
                <ul>
                    <li>
                        <NavLink
                            to="/registration-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Register
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Login
                        </NavLink>
                    </li>

                    <li>HERE CAN COME A SMALL SEARCH BAR</li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBarLandingPage;