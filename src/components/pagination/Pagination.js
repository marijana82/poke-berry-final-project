import "./Pagination.css";
import React from "react";
import {AiFillHeart} from "react-icons/ai";
import ButtonFavorite from "../card/button-favorite/ButtonFavorite";

function Pagination({page, totalPages, favoritesLength, chosenFavorites}) {

    console.log(chosenFavorites);

    return(

        <>
            <div className="page-counter-container">
                <p>Page <b>{page} </b> of {totalPages}</p>
                <p>You have {favoritesLength} chosen pokemon in your favorites list:</p>
                <div className="favorites-message-container">
                    { chosenFavorites &&
                        chosenFavorites.map((favorite) => {

                            return(
                                <ul>
                                    <li>{favorite.name}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>


        </>
    );
}

export default Pagination;