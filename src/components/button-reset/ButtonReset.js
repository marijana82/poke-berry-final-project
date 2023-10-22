import "./ButtonReset.css";
import React from "react";

function ButtonReset({children, resetHandler, styling}) {
    return(

                <button
                    className={styling}
                    onClick={resetHandler}
                >{children}
                </button>



    )
}

export default ButtonReset;