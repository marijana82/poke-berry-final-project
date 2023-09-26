import "./Category.css";
import React from "react";
import InputFilter from "../../input-filter/InputFilter";


function Category({handleChange}) {
    return(
        <>
            <div>
                <h2 className="sidebar-title">Category</h2>
            </div>

            <div>
                <label className="sidebar-label-container"
                >All
                    <input
                        type="radio"
                        onChange={handleChange}
                        value=""
                        name="test"
                    />
                    <span className="checkmark"></span>
                </label>
                {/*Flavors, Firmness, Size*/}

                <InputFilter
                    handleChange={handleChange}
                    value="size"
                    title="size"
                    name="test"
                />

                <InputFilter
                    handleChange={handleChange}
                    value="smoothness"
                    title="smoothness"
                    name="test"
                />


                <InputFilter
                    handleChange={handleChange}
                    value="growth_time"
                    title="growth time"
                    name="test"
                />

            </div>

        </>
    )
}

export default Category;