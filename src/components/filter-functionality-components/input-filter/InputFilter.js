import "./InputFilter.css";
import React from "react";


function InputFilter({ handleFlavorChange, value, title, name }) {
    return(
        <>
            <label
                className="sidebar-label-container"
            >{title}
                <input
                    type="radio"
                    name={name}
                    onChange={handleFlavorChange}
                    value={value}
                />
                <span className="checkmark"></span>

            </label>
        </>
    )
}


export default InputFilter;