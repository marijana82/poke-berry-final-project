import "./BerrySize.css";
import React from "react";



function BerrySize() {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title size-title">Size</h2>

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

export default BerrySize;