import "./CardFlavorsAll.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Flavor from "../card-item-one/flavor/Flavor";


function CardFlavorsAll() {

    const [endpointFlavors, setEndpointFlavors] = useState(`https://pokeapi.co/api/v2/berry-flavor/`);
    const [flavors, setFlavors] = useState();
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [isClickedFlavor, setIsClickedFlavor] = useState(false);

    async function fetchAllFlavors() {

        try {
            const resultFlavors = await axios.get(endpointFlavors);
            console.log(resultFlavors.data.results);
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
        <>
            { !isClickedFlavor
                ?

                (flavors &&
                    flavors.map((flavor, index) => {
                    return(
                        <>
                            <button
                                key={index}
                                onClick={() => handleButtonClick(flavor)}
                            ><p>{flavor.name}</p>
                            </button>
                        </>
                    )
                } ) )

                :

                (
                    <div>
                        {selectedFlavor && (
                            /*<div>
                                <p>{selectedFlavor.name}</p>
                                <p>{selectedFlavor.url}</p>
                            </div>*/

                            <Flavor
                                flavorUrl={selectedFlavor.url}
                            />
                        )}
                        <button
                            onClick={() => setIsClickedFlavor(false)}
                        >Go back
                        </button>
                </div>

                )}
        </>
    );
}

export default CardFlavorsAll;