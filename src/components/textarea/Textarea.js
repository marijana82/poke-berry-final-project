import "./Textarea.css";
import React from "react";


function Textarea({labelText, placeholder, stateValue, stateSetter}) {

    return(
        <div className="input-label-container">

            <label htmlFor="feedback">
                <p className="label-text"
                >{labelText}
                </p>

                <textarea
                    id="feedback"
                    name="feedback"
                    placeholder={placeholder}
                    rows="15"
                    value={stateValue}
                    onChange={(event) => {
                        stateSetter(event.target.value)
                    }}
                />

            </label>


        </div>
    )
}


export default Textarea;