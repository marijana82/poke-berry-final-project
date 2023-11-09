import "./FormBerryQuery.css";
import React from "react";


function FormBerryQuery({ idAttribute, labelText, inputType, placeholder, nameAttribute, stateValue, stateSetter }) {

    return(
        <div className="input-label-container">
            <label
                htmlFor={idAttribute}
            >
                <p className="label-text"
                >{labelText}
                </p>
                <input
                    type={inputType}
                    placeholder={placeholder}
                    name={nameAttribute}
                    id={idAttribute}
                    value={stateValue}
                    onChange={(e) => {
                        stateSetter(e.target.value.toLowerCase());
                    }}
                />
            </label>
        </div>
    )
}

export default FormBerryQuery;