import "./FilterInfo.css";
import React, {useState} from "react";
import FilteredItem from "../filtered-item/FilteredItem";

function FilterInfo({dataFlavor}) {

    const [isShownOnClick, setIsShownOnClick] = useState(false);
    const [isDataShown, setisDataShown] = useState(false);


    const handleDataFlavorClick = () => {
        setisDataShown(current => !current);
        setIsShownOnClick(current => !current);
        console.log("click!")
    }


    return(
        <>
            {!isDataShown && !isShownOnClick && dataFlavor

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