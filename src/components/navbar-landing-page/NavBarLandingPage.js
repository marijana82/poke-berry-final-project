import "./NavBarLandingPage.css";
import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";
import Button from "../button/Button";

//to this navbar I can further integrate a <SearchBar/> , I just have to put a component between a <li></li>
//in css listnavbar is equivalent to my ul

function NavBarLandingPage() {

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
                                >Pokemon list
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/berry-list-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Berry list
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/search-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Search
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/filter-advanced-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Berry Filter
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/game-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Games
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
                                >Landing page
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Home page
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                    to="/game-page"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Games
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

export default NavBarLandingPage;