import "./ButtonReset.css";
import React from "react";

function ButtonReset({children, resetHandler, styling, label}) {
    return(

                <button
                    className={styling}
                    onClick={resetHandler}
                >{label}
                    {children}
                </button>



    )
}

export default ButtonReset;