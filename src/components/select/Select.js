import "./Select.css";
import React from "react";


function Select({labelText}) {

    return(
        <div className="input-label-container">

            <label
                htmlFor="survey"
            >
                <p className="label-text"
                >{labelText}
                </p>

            <select
                id="survey"
                name="survey"
            >
                <option value="Berries">Berries</option>
                <option value="Pokemon">Pokemon</option>
                <option value="Both">Both</option>
                <option value="Other">Other...</option>
            </select>


            </label>
        </div>
    )
}


export default Select;