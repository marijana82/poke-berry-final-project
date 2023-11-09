import "./CardFlavorsAll.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Flavor from "../card-item-one/flavor/Flavor";
import Button from "../button/Button";


function CardFlavorsAll({infoFlavorHandler}) {

    const [endpointFlavors, setEndpointFlavors] = useState(`https://pokeapi.co/api/v2/berry-flavor/`);
    const [flavors, setFlavors] = useState();
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [isClickedFlavor, setIsClickedFlavor] = useState(false);

    async function fetchAllFlavors() {

        try {
            const resultFlavors = await axios.get(endpointFlavors);
            setFlavors(resultFlavors.data.results);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchAllFlavors()
    }, [endpointFlavors]);



    const handleButtonClick = (flavor) => {
        setIsClickedFlavor(true);
        setSelectedFlavor(flavor);
    }


    return(
        <div className="button-group-container">
            { !isClickedFlavor
                ?

                    (flavors &&
                    flavors.map((flavor, index) => {

                    return(

                    <Button
                    key={index}
                    clickHandler={() => handleButtonClick(flavor)}
                    styling="filter-button-flavor"
                    >{flavor.name}
                    </Button>
                    )
            } ) )

                :

                (
                    <div>

                        {selectedFlavor &&

                            <>

                                <Flavor
                                    flavorUrl={selectedFlavor.url}
                                    infoFlavorHandler={infoFlavorHandler}
                                />

                            </>


                        }

                        <Button
                            clickHandler={() => setIsClickedFlavor(false)}
                            styling="back-to-top"
                            children="Back To Flavors Overview"
                        />




                </div>

                )
            }

        </div>
    );
}

export default CardFlavorsAll;