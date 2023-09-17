import "./Category.css";
import React from "react";


function Category() {
    return(
        <>
            <div>
                <h2 className="sidebar-title">Category</h2>
            </div>

            <div>
                <label
                    className="sidebar-label-container"
                >All
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>
                </label>

                <label
                    className="sidebar-label-container"
                >Flavors
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>
                </label>

                <label
                    className="sidebar-label-container"
                >Firmness
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>
                </label>

                <label
                    className="sidebar-label-container"
                >Size
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>
                </label>

            </div>

        </>
    )
}

export default Category;