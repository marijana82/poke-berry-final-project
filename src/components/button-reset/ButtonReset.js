import "./ButtonReset.css";
import React from "react";

function ButtonReset({children, resetHandler, styling, label, type}) {
    return(
                <button
                    type={type}
                    className={styling}
                    onClick={resetHandler}
                >{label}
                    {children}
                </button>

    )
}

export default ButtonReset;