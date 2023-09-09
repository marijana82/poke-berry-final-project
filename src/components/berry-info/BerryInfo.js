import "./BerryInfo.css";
import React from "react";
import {CHERRY_BERRY} from "../../assets/images/constants";

function BerryInfo({ data, itemData }) {

    console.log(data);


    return(

        <>
            { data && itemData &&

                <>
                    <h1>{data.item.name}</h1>
                    <img src={CHERRY_BERRY} alt="pokeberry-image"/>

                    <div className="berry-flavors">
                        {
                            data && data.flavors && data.flavors.map((flavor) => {
                                return(
                                    <>
                                        {flavor.potency > 0 &&

                                            <div className="group">
                                                <h2>{flavor.flavor.name}</h2>
                                            </div>

                                        }

                                    </>
                                )
                            })}

                    </div>
                    <div className="stats">
                        <h3>Firmness: {data.firmness.name}</h3>
                        <h3>Eaten by {data.natural_gift_type.name} type pokemon </h3>
                        <h3>Power: {data.natural_gift_power} hp</h3>
                        <h3>Size: {data.size} mm</h3>
                    </div>
                    <div className="item-section">

                        <img src={itemData.sprites.default} alt="item-image"/>
                        <p>this is {itemData.name}</p>
                        <p>it is used for {itemData.category.name}</p>
                        {
                            itemData && itemData.effect_entries.map((entry) => {
                                return(
                                    <>
                                        <p>It has {entry.effect}</p>
                                        <p>{entry.short_effect}</p>
                                    </>
                                )
                            })
                        }




                    </div>

                </>

            }


        </>
    );

}

export default BerryInfo;