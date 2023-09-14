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
        <>
            { data &&
                <>
                    <h1>{data.item.name}</h1>

                   <BerryFlavor berryFlavor={data.flavors}/>

                    <div className="stats">
                        <h3>Firmness: {data.firmness.name}</h3>
                        <h3>Eaten by {data.natural_gift_type.name} type pokemon </h3>
                        <h3>Power: {data.natural_gift_power} hp</h3>
                        <h3>Size: {data.size} mm</h3>
                    </div>

                    <Button
                        type="button"
                        clickHandler={handleClick}
                    >SHOW ME MORE!</Button>

                    {isShownOnClick &&

                    <BerryItem itemUrl={data.item.url}/>

                    }

                    </>

                    }


                    </>

    );

}


export default BerryInfo;