import "./BerryFlavor.css";
import React from "react";


function BerryFlavor() {
    return(
        <>
            <div>



            <label
                className="sidebar-label-container"
            >Size small
                <input type="radio" value= "" name="test2"/>
                <span className="checkmark"></span>
            </label>

            <label
                className="sidebar-label-container"
            >Size medium
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>
            </label>

            <label
                className="sidebar-label-container"
            >Size large
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>
            </label>


            </div>
        </>
    )
}

export default BerryFlavor;