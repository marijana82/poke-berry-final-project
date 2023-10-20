import "./FormInput.css";
import React from "react";


function FormInput({ idAttribute, labelText, inputType, placeholder, nameAttribute, stateValue, stateSetter}) {
    return(
        <div className="input-label-container">
            <label
                htmlFor={idAttribute}
            >{labelText}
                <input
                    type={inputType}
                    placeholder={placeholder}
                    name={nameAttribute}
                    id={idAttribute}
                    value={stateValue}
                    onChange={(e) => stateSetter(e.target.value.toLowerCase())}
                />
            </label>
        </div>
    )
}

export default FormInput;