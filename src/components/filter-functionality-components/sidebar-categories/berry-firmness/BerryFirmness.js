import "./BerryFirmness.css";
import React from "react";
import InputFilter from "../../input-filter/InputFilter";


function BerryFirmness() {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title size-title">Firmness</h2>

                <InputFilter/>
                <InputFilter/>
                <InputFilter/>
                {/*Soft, Hard, Very hard*/}


            </div>
        </>
    )
}

export default BerryFirmness;