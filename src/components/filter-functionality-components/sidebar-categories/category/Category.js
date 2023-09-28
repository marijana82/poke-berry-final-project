import "./Category.css";
import React from "react";
import InputFilter from "../../input-filter/InputFilter";
import berrySize from "../berry-size/BerrySize";


function Category() {
    return(
        <>
            <div>
                <h2 className="sidebar-title">Category</h2>
            </div>

            <div>
                <label className="sidebar-label-container"
                >Berry flavor:
                    <input
                        type="radio"
                        //onChange={handleFlavorChange}
                        value=""
                        name="test"
                    />
                    <span className="checkmark"></span>
                </label>
                {/*Flavors, Firmness, Size*/}

                <InputFilter
                    //handleChange={handleChange}
                    value="size"
                    title="size"
                    name="test"
                />

                <InputFilter
                    //handleChange={handleChange}
                    value="smoothness"
                    title="smoothness"
                    name="test"
                />


                <InputFilter
                    //handleChange={handleChange}
                    value="3"
                    title="growth time"
                    name="test"
                />

            </div>

        </>
    )
}

export default Category;