import "./Pagination.css";
import React from "react";
import {Link} from "react-router-dom";

function Pagination({page, totalPages, favoritesLength, chosenFavorites}) {


    return(

        <>
            <div className="page-counter-container">
                <p>Page <b>{page} </b> of {totalPages}</p>
            </div>

            <div className="favorites-counter-container">

                {favoritesLength < 8 ?

                    <h3>You have {favoritesLength} out of 8 pokemon in your favorites list:</h3>

                    :

                    <h3>click the list to visit Favorites page and delete some old pokemon:</h3>
                }


                <Link to={`/favorites-page`} style={{textDecoration: 'none'}}>
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