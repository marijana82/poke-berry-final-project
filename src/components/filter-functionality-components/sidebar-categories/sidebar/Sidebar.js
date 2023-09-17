import "./Sidebar.css";
import React from "react";
import {FiHeart} from "react-icons/fi";
import Category from "../category/Category";
import BerryFirmness from "../berry-firmness/BerryFirmness";
import BerryFlavor from "../berry-flavor/BerryFlavor";
import BerrySize from "../berry-size/BerrySize";


function Sidebar() {
    return(
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><FiHeart/></h1>
                </div>

                <Category/>
                <BerryFirmness/>
                <BerryFlavor/>
                <BerrySize/>

            </section>
            Sidebar
        </>
    )
}

export default Sidebar;
