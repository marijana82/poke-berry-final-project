import "./Select.css";
import React from "react";


function Select({labelText, stateValue, stateSetter}) {

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
                value={stateValue}
                onChange={(event) => {stateSetter(event.target.value)}}
            >
                <option value="Berries">Berries in general</option>
                <option value="Pokemon">Pokemon in general</option>
                <option value="Both">Both pokemon and berries</option>
                <option value="None">I have no interest in Pokemon or berries</option>
                <option value="Say hi">Just want to say hi!</option>
                <option value="Other">I want to send a feedback</option>
            </select>


            </label>
        </div>
    )
}


export default Select;