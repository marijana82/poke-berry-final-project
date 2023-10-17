import "./BerryInfo.css";
import React, {useState} from "react";
import BerryItem from "../berry-item/BerryItem";
import BerryFlavor from "../berry-flavor/BerryFlavor";



function BerryInfo({ data }) {
    console.log(data);

    const handleClick = event => {
        console.log("the button is clicked!")
    }


    return(
        <>

        { (data) ?
            <div className="main-berry-info-container" onClick={handleClick}>


                <>
                        <h1 className="berry-name">{data.item.name}</h1>

                    <BerryFlavor berryFlavor={data.flavors}/>

                    <BerryItem itemUrl={data.item.url}/>

                    {/*<Button
                        type="button"
                        clickHandler={() => setIsShownOnClick(true)}
                        styling="button-favorite"
                    >SHOW ME MORE!
                    </Button>*/}


                        <div className="base-stat">
                            <h3>Berry {data.name} is {data.firmness.name}.</h3>
                            <h3>It is favorite food of {data.natural_gift_type.name} pokemon. </h3>
                            <h3>It takes {data.growth_time} weeks to grow.</h3>
                            <h3>Its power is {data.natural_gift_power} hp.</h3>
                            <h3>It has the size of {data.size} mm.</h3>
                        </div>


                    </>

                    </div>

            :

            <p>empty container</p>
        }



        </>

    );

}


export default BerryInfo;