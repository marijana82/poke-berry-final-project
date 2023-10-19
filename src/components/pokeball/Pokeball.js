import "./Pokeball.css";
import React from "react";

function Pokeball({ballMessage}) {
    return(

            <div className="poke-ball-container">
                <h3>{ballMessage}</h3>
            </div>

    )
}

export default Pokeball;