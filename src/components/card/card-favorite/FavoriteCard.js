import "./FavoriteCard.css";
import React, {useContext} from "react";
import {CustomFavoritesContext} from "../../../context/FavoritesContext";



function FavoriteCard() {

    const {favoritePokemon, updateFavoritePokemon} = useContext(CustomFavoritesContext);



    return(
        <div
            className="favorites-message-container"
        >CLICK HERE
        </div>
    )
}

export default FavoriteCard;