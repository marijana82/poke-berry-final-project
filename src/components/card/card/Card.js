import "./Card.css";
import React from "react";


function Card({onClick}) {

    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">BACK</div>
            <div className ="card-front">FRONT</div>
        </div>
    )
}

export default Card;