import "./BerryFlavor.css";
import React from "react";
import InputFilter from "../../input-filter/InputFilter";


function BerryFlavor() {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title flavor-title">Flavors</h2>

                <label className="sidebar-label-container"
                >All
                    <input
                        type="radio"
                        //onChange={handleChange}
                        value=" "
                        name="test"
                    />
                    <span className="checkmark"></span>
                </label>

                <InputFilter
                    //onChange={handleChange}
                    value={1}
                    title="slow grow"
                    name="test3"
                />

                <InputFilter
                    //onChange={handleChange}
                    value={3}
                    title="medium grow"
                    name="test3"
                />

                <InputFilter
                    //onChange={handleChange}
                    value={4}
                    title="fast grow"
                    name="test3"
                />

                {/*Sweet, sour, spicy*/}



            </div>
        </>
    )
}

export default BerryFlavor;