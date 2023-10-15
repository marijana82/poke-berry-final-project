import "./Flavor.css";
import React, {useEffect, useState} from "react";
import axios from "axios";



function Flavor({flavorUrl}) {

    const [flavorData, setFlavorData] = useState(null);

    async function fetchFlavorData() {
        try {

            const resultFlavor = await axios.get(flavorUrl);
            console.log(resultFlavor.data);
            setFlavorData(resultFlavor.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchFlavorData();
    }, []);

    return(
        <>
            <div>
                {flavorData &&
                    <div>
                        <h3>{flavorData.name} berry is {flavorData.contest_type.name}!</h3>
                        <h3>All {flavorData.name} berries in one list: </h3>

                        {
                            flavorData &&
                            flavorData.berries &&
                            flavorData.berries.map((berry) => {
                                return(
                                    <li>
                                        <p>{berry.berry.name}</p>
                                        <p>{berry.potency}</p>
                                    </li>
                                )
                            })
                        }

                    </div>


                }
            </div>
        </>
    )
}

export default Flavor;