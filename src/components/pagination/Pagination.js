import "./Pagination.css";
import React from "react";



function Pagination({page, totalPages, favoritePokemon}) {
    return(
        <>
            <div className="page-counter-container">
                <p>Page <b>{page} </b> of {totalPages}</p>
                <p>Total of favorites chosen: {favoritePokemon}</p>

            </div>

        </>
    )
}

export default Pagination;