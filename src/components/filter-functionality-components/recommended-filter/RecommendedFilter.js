import "./RecommendedFilter.css";
import "..//button-filter/ButtonFilter.css";
import React from "react";


function RecommendedFilter() {
    return(
        <>
            <div className="recommended-flex">
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-buttons-container">
                    <button className="button-filter">All berries</button>
                    <button className="button-filter">Soft</button>
                    <button className="button-filter">Hard</button>
                    <button className="button-filter">Spicy</button>
                    <button className="button-filter">Sweet</button>
                </div>
            </div>
        </>
    )
}

export default RecommendedFilter;