import "./BerryFlavor.css";
import React from "react";


function BerryFlavor({berryFlavor}) {
    return (
        <>
            <div className="berry-flavors">
                {berryFlavor && berryFlavor.map((flavor) => {
                    return(
                        <>
                            {flavor.potency > 0 &&

                                <div className="group">
                                    <h2>{flavor.flavor.name}</h2>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

        </>
    );
}

export default BerryFlavor;