import "./Flavor.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../button/Button";
import FilteredItem from "../../filtered-item/FilteredItem";

function Flavor({flavorUrl, infoFlavorHandler}) {

    const [flavorData, setFlavorData] = useState(null);
    const [filteredBerries, setFilteredBerries] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [potencyArray, setPotencyArray] = useState ([10, 15, 20, 25, 30]);
    const [selectedPotency, setSelectedPotency] = useState(10);

    async function fetchFlavorData() {
        try {
            const resultFlavor = await axios.get(flavorUrl);
            console.log(resultFlavor.data);
            setFlavorData(resultFlavor.data);

            if(resultFlavor.data.berries) {
                setFilteredBerries(resultFlavor.data.berries);
            } else {
                setErrorMessage("Cannot filter berries");
            }

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchFlavorData();
    }, [flavorUrl]);


    //filter function/variable
    const berryFilter = (potency) => {
        let filteredPotency = flavorData.berries.filter(berry => berry.potency === potency);
        setFilteredBerries(filteredPotency);
        setSelectedPotency(potency);
    }


    return(
        <>
            <div>
                {flavorData &&
                    <div className="left-content-container-flavors">

                        <span className="title-button-container">

                            <div className="title-container">

                            <div className="filtered-berry-title">
                                <h3>{flavorData.name} berry is {flavorData.contest_type.name}!</h3>
                            </div>

                            <div className="filtered-berry-title">
                                <h3>{filteredBerries.length} {flavorData.name} berries with potency {selectedPotency} </h3>
                            </div>

                                <div className="filtered-berry-title">
                                <h3>click below on potency button or berry name to see more info! </h3>
                            </div>

                        </div>


                        <div className="filter-button-group-container">

                            {potencyArray.map((potency) => {
                                return(
                                    <Button
                                        key={potency}
                                        clickHandler={() => berryFilter(potency)}
                                        styling="potency-filter-button"
                                        type="button"
                                    >{potency}
                                    </Button>
                                )
                            })}

                        </div>
                        </span>

                        <span className="filtered-berries-container">
                            <div className="filtered-berry-cards-container">

                        {
                            flavorData &&
                            flavorData.berries &&
                            filteredBerries.length > 0

                            ?
                                filteredBerries.map((berry, index) => (

                                    <>

                                        <div
                                            onClick={() => infoFlavorHandler(berry)}
                                            role="button"
                                            key={index}
                                            className="berry-button-flavor"
                                        >
                                            <>
                                                <p>{berry.berry.name}</p>
                                                <p>{berry.potency}</p>
                                            </>
                                        </div>


                                    </>

                                    ))
                            :

                            <p>{errorMessage}</p>
                        }
                            </div>

                    </span>
                    </div>
                }
            </div>
        </>
    )
}

export default Flavor;