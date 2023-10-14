import "./ButtonReset.css";
import React from "react";

function ButtonReset({children, resetHandler}) {
    return(

                <button
                    className="reset-button-tab"
                    onClick={resetHandler}
                >{children}
                </button>



    )
}

export default ButtonReset;