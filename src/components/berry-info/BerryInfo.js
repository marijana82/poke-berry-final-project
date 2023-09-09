import "./BerryInfo.css";
import React from "react";
import {CHERRY_BERRY} from "../../assets/images/constants";

function BerryInfo({ dataToClick }) {

    console.log(dataToClick);


    return(
        <>
            <h1>Cherry Berry</h1>
            <img src={CHERRY_BERRY} alt="pokeberry-image"/>
            <div className="berry-flavors">
                <div className="group">
                    <h2>spicy</h2>
                </div>
                <div className="group">
                    <h2>dry</h2>
                </div>
                <div className="group">
                    <h2>sweet</h2>
                </div>
                <div className="group">
                    <h2>bitter</h2>
                </div>
                <div className="group">
                    <h2>sour</h2>
                </div>
            </div>
            <div className="stats">
                <h3>Firmness: soft</h3>
                <h3>Natural gift type: fire</h3>
                <h3>Size: 20</h3>
                <h3>Smoothness: 25</h3>
            </div>


        </>
    )
}

export default BerryInfo;