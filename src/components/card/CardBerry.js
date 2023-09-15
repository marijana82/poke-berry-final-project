import "./CardBerry.css";
import React, {useState} from "react";
import { CHERRY_BERRY } from "../../assets/images/constants";
import BerryFlavor from "../berry-flavor/BerryFlavor";



function CardBerry({ berryData, infoBerryHandler }) {

    const [searchString, setSearchString] = useState("");
    const startsWith = str => word => str ? word.name.slice(0,str.length).toLowerCase() === str.toLowerCase() : true

    return(
        <>
            <div className="hover-card-container">
                <div className="card-hover">
                    <input
                        type="text"
                        onChange={e => setSearchString(e.target.value)}
                        className="filter-by-letter"
                        placeholder="first letter"
                    />

                </div>

            </div>

            {berryData &&
                berryData.filter(startsWith(searchString)).map((item) => {
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