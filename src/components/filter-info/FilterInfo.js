import "./FilterInfo.css";
import React, {useState} from "react";

function FilterInfo({dataFlavor}) {

    const [isShownOnClick, setIsShownOnClick] = useState(false);
    const [isDataShown, setisDataShown] = useState(false);

    const handleClick = event => {
        console.log("the button is clicked!")
        setIsShownOnClick(current => !current);
        setisDataShown(current => !current);
    }

    const handleDataFlavorClick = () => {
        setisDataShown(current => !current);
    }

    return(
        <>
            {!isDataShown && dataFlavor &&
                <div className="main-berry-info-container" div={handleDataFlavorClick}>

                    (
                    <>
                        <p>{dataFlavor.berry.name}</p>
                        <p>{dataFlavor.berry.url}</p>
                    </>
                    )

                </div>
            }

        </>
    )
}

export default FilterInfo;