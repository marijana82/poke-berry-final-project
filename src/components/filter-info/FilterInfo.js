import "./FilterInfo.css";
import React, {useState} from "react";
import FilteredItem from "../filtered-item/FilteredItem";
import {Link} from "react-router-dom";

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
                <div
                    className="result-introduction-container"
                    div={handleDataFlavorClick}
                >

                        <FilteredItem
                            filteredItemUrl={dataFlavor.berry.url}
                        />

                </div>
            }

        </>
    )
}

export default FilterInfo;