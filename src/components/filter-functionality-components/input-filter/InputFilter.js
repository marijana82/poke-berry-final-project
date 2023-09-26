import "./InputFilter.css";
import React from "react";


function InputFilter({ handleChange, value, title, name }) {
    return(
        <>
            <label
                className="sidebar-label-container"
            >{title}
                <input
                    type="radio"
                    name={name}
                    onChange={handleChange}
                    value={value}
                />
                <span className="checkmark"></span>

            </label>
        </>
    )
}


export default InputFilter;