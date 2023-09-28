import "./Sidebar.css";
import React from "react";
import {FiHeart} from "react-icons/fi";
import Category from "../category/Category";
import BerryFlavor from "../berry-flavor/BerryFlavor";
import BerrySize from "../berry-size/BerrySize";


function Sidebar({handleFlavorChange}) {

    return(
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><FiHeart/></h1>
                </div>

                <Category />
                <BerryFlavor />
                <BerrySize />

            </section>
            Sidebar
        </>
    )
}

export default Sidebar;

