import "./ButtonReset.css";
import React from "react";

function ButtonReset({children, resetHandler}) {
    return(

            <div
                className="reset-button-container"
            >
                <button
                    className="reset-button"
                    onClick={resetHandler}
                >{children}
                </button>
            </div>


    )
}

export default ButtonReset;