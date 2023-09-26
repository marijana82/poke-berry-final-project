import "./BerrySize.css";
import React from "react";
import InputFilter from "../../input-filter/InputFilter";



function BerrySize({handleChange}) {
    return(
        <>
            <div className="margin-left">
                <h2 className="sidebar-title size-title">Size</h2>

                <label className="sidebar-label-container"
                >All
                    <input
                        type="radio"
                        onChange={handleChange}
                        value=""
                        name="test2"
                    />
                    <span className="checkmark"></span>
                </label>

                <InputFilter
                    handleChange={handleChange}
                    value={10 && 20 && 30}
                    title="small"
                    name="test2"
                />

                <InputFilter
                    handleChange={handleChange}
                    value={40 && 50 && 60}
                    title="medium"
                    name="test2"
                />

                <InputFilter
                    handleChange={handleChange}
                    value={70 && 80 && 90}
                    title="large"
                    name="test2"
                />


            </div>
        </>
    )
}

export default BerrySize;