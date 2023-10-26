import "./ButtonFavorite.css";
import React from "react";
import {AiFillHeart} from "react-icons/ai";


function ButtonFavorite({ clickHandler, label, children, styling}) {

    return(
        <button
            className={styling}
            onClick={clickHandler}
        >{label}
            {children}
        </button>
    )
}

export default ButtonFavorite;