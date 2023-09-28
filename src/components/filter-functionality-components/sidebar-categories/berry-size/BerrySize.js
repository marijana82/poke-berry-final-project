import "./BerrySize.css";
import React from "react";
import InputFilter from "../../input-filter/InputFilter";



function BerrySize() {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title size-title">Size</h2>

                <label className="sidebar-label-container"
                >All
                    <input
                        type="radio"
                        //onChange={handleChange}
                        value=""
                        name="test2"
                    />
                    <span className="checkmark"></span>
                </label>

                <InputFilter
                    //handleChange={handleChange}
                    value="cheri"
                    title="small"
                    name="test2"
                />

                <InputFilter
                    //handleChange={handleChange}
                    value="60"
                    title="medium"
                    name="test2"
                />

                <InputFilter
                    //handleChange={handleChange}
                    value="80"
                    title="large"
                    name="test2"
                />


            </div>
        </>
    )
}

export default BerrySize;