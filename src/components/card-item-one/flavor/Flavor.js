import "./Flavor.css";
import React, {useEffect, useState} from "react";
import axios from "axios";



function Flavor({flavorUrl}) {

    const [flavorData, setFlavorData] = useState(null);
    const [filteredBerries, setFilteredBerries] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

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
    }



    return(
        <>
            <div>
                {flavorData &&
                    <div>
                        <h3>{flavorData.name} berry is {flavorData.contest_type.name}!</h3>
                        <div className="button-group-container">
                            <button onClick={() => berryFilter(10)}>10</button>
                            <button onClick={() => berryFilter(15)}>15</button>
                            <button onClick={() => berryFilter(20)}>20</button>
                            <button onClick={() => berryFilter(25)}>25</button>
                            <button onClick={() => berryFilter(30)}>30</button>
                        </div>


                        <h3>All {flavorData.name} berries in one list: </h3>


                        {
                            flavorData &&
                            flavorData.berries &&
                            filteredBerries

                            ?

                            filteredBerries.map((pokemon, index) => (
                                <li key={index}>
                                    <p>{pokemon.berry.name}</p>
                                    <p>{pokemon.potency}</p>
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