import "./CardBerry.css";
import React from "react";
import {POKEMON_SPRITES_CHARMANDER} from "../../assets/images/constants";


function CardBerry() {
    return(
        <>
            <div className="card">
                <h1>1</h1>
                <img src={POKEMON_SPRITES_CHARMANDER} alt="photo-of-pokemon"/>
                <h2>Charmander</h2>
            </div>


        </>
    )
}

export default CardBerry;