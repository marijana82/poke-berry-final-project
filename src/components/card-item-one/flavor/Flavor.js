import "./Flavor.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../button/Button";



function Flavor({flavorUrl}) {

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


   /* const handlePotencyChange = (event) => {
        setSelectedPotency(event.target.value);
        console.log(event.target.value);
    }*/





    return(
        <>
            <div>
                {flavorData &&
                    <div>
                        <h3>{flavorData.name} berry is {flavorData.contest_type.name}!</h3>
                        <div className="button-group-container">

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

                           {/* <div className="radio-group-container">
                                <form>
                                    <fieldset>
                                        <legend>choose berry potency</legend>
                                <input
                                    type="radio"
                                    name="potency"
                                    id="potency-10"
                                    value="10"
                                    checked={selectedPotency === 10}
                                    onChange={() => berryFilter(10)}
                                    //onChange={handlePotencyChange}
                                />
                                <label htmlFor="potency-10">potency 10</label>

                                <input
                                    type="radio"
                                    name="potency"
                                    id="potency-20"
                                    value="20"
                                    checked={selectedPotency === 20}
                                    onChange={() => berryFilter(20)}
                                    //onChange={handlePotencyChange}
                                />
                                <label htmlFor="potency-20">potency 20</label>


                                    </fieldset>

                                </form>

                                <p>chosen potency: {selectedPotency}</p>

                            </div>
*/}

                        </div>


                        <h3>All {flavorData.name} berries in one list: </h3>

                        {
                            flavorData &&
                            flavorData.berries &&
                            filteredBerries.length > 0

                            ?

                            filteredBerries.map((berry, index) => (
                                <li key={index}>
                                    <p>{berry.berry.name}</p>
                                    <p>{berry.potency}</p>
                                </li>
                            ))

                            :

                            <p>{errorMessage}</p>


                            /*flavorData.berries.map((berry, index) => {
                                return(
                                    <>
                                        <li key={index}>
                                            <p>{berry.berry.name}</p>
                                            <p>{berry.potency}</p>
                                        </li>

                                    </>

                                )
                            })*/
                        }

                    </div>


                }
            </div>
        </>
    )
}

export default Flavor;