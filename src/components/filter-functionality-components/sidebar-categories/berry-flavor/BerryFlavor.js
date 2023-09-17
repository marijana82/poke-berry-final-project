import "./BerryFlavor.css";
import React from "react";


function BerryFlavor() {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title flavor-title">Flavors</h2>

            <label
                className="sidebar-label-container flavor-title"
            >Sweet
                <input type="radio" value= "" name="test2"/>
                <span className="checkmark"></span>
            </label>

            <label
                className="sidebar-label-container"
            >Sour
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>
            </label>

            <label
                className="sidebar-label-container"
            >Spicy
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>
            </label>


            </div>
        </>
    )
}

export default BerryFlavor;