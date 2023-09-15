import "./NavBar.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";


function NavBar() {

    const { isAuthenticated, logoutFunction } = useContext(LoginContext);

    return(
        <nav className="outer-container">
            <div className="inner-container">
                <ul className="nav-container">

                    {isAuthenticated ?

                        <>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Home
                                </NavLink>
                            </li>
                        </>

                        :

                        <>
                            <li>
                                <NavLink
                                    to="/landing-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Landing Page
                                </NavLink>
                            </li>


                        </>



                    }


                </ul>
            </div>

        </nav>
    )
}

export default NavBar;