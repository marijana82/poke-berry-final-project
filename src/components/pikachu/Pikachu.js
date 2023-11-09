import "./Pikachu.css";
import React from "react";

function Pikachu({ stylingSmile, stylingNose, stylingPikachu }) {
    return(
        <div className={stylingPikachu}>
            <div className={stylingNose}></div>
            <div className={stylingSmile}></div>
        </div>
    )
}

export default Pikachu;