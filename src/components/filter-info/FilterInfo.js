import "./FilterInfo.css";
import React, {useState} from "react";
import FilteredItem from "../filtered-item/FilteredItem";

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
            {!isDataShown && dataFlavor

                &&

                <div
                    className="result-introduction-container"
                    onClick={handleDataFlavorClick}
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