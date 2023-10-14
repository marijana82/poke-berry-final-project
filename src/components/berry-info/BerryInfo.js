import "./BerryInfo.css";
import React, {useState} from "react";
import BerryItem from "../berry-item/BerryItem";
import Button from "../button/Button";
import BerryFlavor from "../berry-flavor/BerryFlavor";


function BerryInfo({ data }) {
    console.log(data);

    const [isShownOnClick, setIsShownOnClick] = useState(false);

    const handleClick = event => {
        console.log("the button is clicked!")
        setIsShownOnClick(current => !current);
    }

    return(
        <div className="main-berry-info-container">
            { (!data) ? <h2>Click on the berry to get more info</h2> :
                <>
                    <h1 className="berry-name">{data.item.name}</h1>

                   <BerryFlavor
                       berryFlavor={data.flavors}
                   />

                    <div className="base-stat">
                        <h3>Berry {data.name} is {data.firmness.name}.</h3>
                        <h3>It is favorite food of {data.natural_gift_type.name} pokemon. </h3>
                        <h3>It takes {data.growth_time} weeks to grow.</h3>
                        <h3>Its power is {data.natural_gift_power} hp.</h3>
                        <h3>It has the size of {data.size} mm.</h3>
                    </div>

                    <Button
                        type="button"
                        clickHandler={handleClick}
                        styling="button-favorite"
                    >SHOW ME MORE!
                    </Button>

                    {isShownOnClick &&

                    <BerryItem
                        itemUrl={data.item.url}
                    />

                    }

                    </>

                    }


                    </div>

    );

}


export default BerryInfo;