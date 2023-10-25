import "./Pagination.css";
import React from "react";

function Pagination({page, totalPages, favoritePokemon, chosenFavs}) {
    return(

            <div className="page-counter-container">
                <p>Page <b>{page} </b> of {totalPages}</p>
                <p>Chosen: {favoritePokemon}</p>
                {/*<p>Your favorites:</p>
                        <ul>
                            can't map the favs because there are no objects with keys in the array
                            <li>{chosenFavs[0]}</li>
                            <li>{chosenFavs[1]}</li>
                            <li>{chosenFavs[2]}</li>
                            <li>{chosenFavs[3]}</li>
                            <li>{chosenFavs[4]}</li>
                            <li>{chosenFavs[5]}</li>
                        </ul>*/}
            </div>
    );
}

export default Pagination;