import "./FilteredItem.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import BerryNaturalGift from "../berry-natural-gift/BerryNaturalGift";
import ButtonReset from "../button-reset/ButtonReset";


function FilteredItem({filteredItemUrl}) {

    const [berryData, setBerryData] = useState(null);
    const [isShownOnClick, setIsShownOnClick] = useState(false);

    async function fetchFilteredItemData () {
         try {
             const naturalGiftType = await axios.get(filteredItemUrl);
             console.log(naturalGiftType.data);
             setBerryData(naturalGiftType.data);

         } catch (e) {
             console.error(e);
         }
    }

    useEffect(() => {
        fetchFilteredItemData();
    }, [filteredItemUrl]);



    return(
        <>

            {berryData &&
                berryData.name &&
                berryData.natural_gift_type.name &&
                berryData.natural_gift_type.url &&

                <>

                    <h2>{berryData.name} is type {berryData.natural_gift_type.name} berry</h2>


                    <BerryNaturalGift
                        naturalGiftUrl={berryData.natural_gift_type.url}
                    />

                </>

            }

            </>
    )
}

export default FilteredItem;