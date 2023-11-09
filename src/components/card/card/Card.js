import "./Card.css";
import React, {useContext} from "react";
import {BULBASAUR} from "../../../assets/images/constants";
import {Link} from "react-router-dom";
import {LoginContext} from "../../../context/LoginContext";

function Card({playMessage, registerMessage, clickToRegister, flipToPlay, onClick}) {

    const { isAuthenticated } = useContext(LoginContext);

    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">
                <div className="back-main-card-container">

                    <div className="back-image-container">
                        <Link
                            to={"/game-page"}
                            style={{textDecoration: 'none', color: 'white'}}
                        >
                        <img
                            className="pokemon-image"
                            src={BULBASAUR}
                            alt="pokemon-image"
                        />
                        </Link>
                    </div>

                    <div className="back-content-container">
                        <Link
                            to={"/game-page"}
                            style={{textDecoration: 'none', color: 'white'}}
                        >
                            <h2 className="pokemon-name">{playMessage}</h2>
                        </Link>

                        {isAuthenticated ? "" :

                        <Link
                            to={"/registration-page"}
                            style={{color: 'yellow'}}
                        >
                            <p className="pokemon-logo">{registerMessage}</p>
                        </Link>
                        }
                    </div>

                </div>
            </div>

            <div className ="card-front">
                <div className="clickable-text">
                    <h3>{clickToRegister}</h3>
                    <p>{flipToPlay}</p>
                </div>

            </div>
        </div>
    )
}

export default Card;