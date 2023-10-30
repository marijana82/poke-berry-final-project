import "./Pagination.css";
import React from "react";
import {AiFillHeart} from "react-icons/ai";
import ButtonFavorite from "../card/button-favorite/ButtonFavorite";
import {Link} from "react-router-dom";

function Pagination({page, totalPages, favoritesLength, chosenFavorites}) {

    console.log(chosenFavorites);

    return(

        <>
            <div className="page-counter-container">
                <p>Page <b>{page} </b> of {totalPages}</p>
                <p>You have {favoritesLength} chosen pokemon in your favorites list:</p>

                <Link to={`/profile-page`} style={{textDecoration: 'none'}}>
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
                </Link>
            </div>


        </>
    );
}

export default Pagination;