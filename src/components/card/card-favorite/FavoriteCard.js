import "./FavoriteCard.css";
import React from "react";

function FavoriteCard({pokemonFav, key}) {
    return(
        <div className="favorite-card">
            <p>{pokemonFav}</p>

        </div>
    )
}

export default FavoriteCard;