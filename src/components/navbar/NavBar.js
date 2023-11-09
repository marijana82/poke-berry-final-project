import "./NavBar.css";
import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";
import Button from "../button/Button";

function NavBar() {

    const { isAuthenticated, logoutFunction } = useContext(LoginContext);


    return(
        <nav className="outer-container-navigation">
            <div className="inner-container-navigation">
                <ul className="nav-container">


                    { isAuthenticated

                        ?

                        <>
                            <li>
                                <NavLink
                                    to="/pokemon-list-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Pokemon
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/berry-list-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Berries
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/search-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Search Poke
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/search-page-berry"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Search Berry
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/filter-advanced-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Filter Berry
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/game-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Play
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/favorites-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Favorites
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/profile-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Profile
                                </NavLink>
                            </li>

                            <li>
                                <Button
                                    type="button"
                                    styling="logout-button"
                                    clickHandler={logoutFunction}
                                >Sign Out
                                </Button>
                            </li>

                        </>


                        :


                        <>
                            <li>
                                <NavLink
                                    to="/landing-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Landing
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Home
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                    to="/game-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Play
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >About
                                </NavLink>
                            </li>


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
                        </>
                    }


                </ul>
            </div>
        </nav>
    );
}

export default NavBar;