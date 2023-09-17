import "./BerryFirmness.css";
import React from "react";


function BerryFirmness() {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title size-title">Firmness</h2>

                <label
                    className="sidebar-label-container flavor-title"
                >Soft
                    <input type="radio" value= "" name="test2"/>
                    <span className="checkmark"></span>
                </label>

                <label
                    className="sidebar-label-container"
                >Hard
                    <input type="radio" name="test2"/>
                    <span className="checkmark"></span>
                </label>

                <label
                    className="sidebar-label-container"
                >Very hard
                    <input type="radio" name="test2"/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </>
    )
}

export default BerryFirmness;