import "./CardBerry.css";
import React from "react";
import { CHERRY_BERRY } from "../../assets/images/constants";
import BerryFlavor from "../berry-flavor/BerryFlavor";



function CardBerry({ berryData, infoBerryHandler }) {
    return(
        <>
            {berryData &&
                berryData.map((item) => {
                    return(
                        <>
                            <div
                                className="card"
                                key={item.id}
                                onClick={() => infoBerryHandler(item)}>

                                <h1>{item.id}</h1>
                                <img
                                    src={CHERRY_BERRY}
                                    alt="photo-of-berry"/>
                                <h2>{item.item.name}</h2>
                            </div>
                        </>
                        )
                })
            }



        </>
    )
}

export default CardBerry;