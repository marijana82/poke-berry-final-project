import "./BerryInfo.css";
import React from "react";
import BerryItem from "../../berry-item/BerryItem";

function BerryInfo({ data }) {

    console.log(data);

    //how to set data.item.url in the state OR how to get the data out of it in another way?


    return(

        <>
            { data &&

                <>
                    <h1>{data.item.name}</h1>

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

                    <BerryItem itemUrl={data.item.url}/>



                </>

            }

            </>

    );

}

export default BerryInfo;