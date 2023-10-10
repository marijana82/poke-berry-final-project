import "./Pagination.css";
import React from "react";
import {Link} from "react-router-dom";



function Pagination({page, totalPages, favoritePokemon, chosenFavs}) {
    return(
        <>
            <div className="page-counter-container">
                <p>Page <b>{page} </b> of {totalPages}</p>
                <p>Total chosen: {favoritePokemon}</p>
                <Link to="/"><p>Favorites:
                    <ul>
                        <li>{chosenFavs}</li>
                    </ul>
                </p></Link>

            </div>

        </>
    )
}

export default Pagination;