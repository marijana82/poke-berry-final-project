import "./Card.css";
import React from "react";
import {POKEMON_DREAM_WORLD} from "../../../assets/images/constants";
import {Link} from "react-router-dom";



function Card({playMessage, registerMessage, clickToRegister, flipToPlay, onClick}) {

    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">
                <div className="back-main-card-container">
                    <div className="back-image-container">
                        <img
                            className="pokemon-image"
                            src={POKEMON_DREAM_WORLD}
                            alt="pokemon-image"
                        />
                    </div>

                    <div className="back-content-container">
                        <Link
                            to={"/game-page"}
                            style={{textDecoration: 'none', color: 'white'}}
                        >
                            <h2 className="pokemon-name">{playMessage}</h2>
                        </Link>

                        <Link
                            to={"/registration-page"}
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <p className="pokemon-logo">{registerMessage}</p>
                        </Link>

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