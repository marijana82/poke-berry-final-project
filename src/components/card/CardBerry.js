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
                                className="hover-card-container"
                                key={item.id}
                                onClick={() => infoBerryHandler(item)}
                            >

                                <div className="card-hover">
                                    <div className="image-container">
                                        <img
                                            src={CHERRY_BERRY}
                                            alt="photo-of-berry"/>
                                    </div>
                                    <div className="content">
                                        <h2>{item.item.name}</h2>
                                        <h3>{item.id}</h3>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                })
            }



        </>
    )
}

export default CardBerry;