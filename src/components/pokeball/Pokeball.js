import "./Pokeball.css";
import React from "react";

function Pokeball({ballMessage, styling, children}) {
    return(

            <div className={styling}>
                <h3>{ballMessage}</h3>
                {children}
            </div>

    )
}

export default Pokeball;