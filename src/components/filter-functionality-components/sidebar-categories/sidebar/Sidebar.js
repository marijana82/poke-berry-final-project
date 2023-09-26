import "./Sidebar.css";
import React from "react";
import {FiHeart} from "react-icons/fi";
import Category from "../category/Category";
import BerryFirmness from "../berry-firmness/BerryFirmness";
import BerryFlavor from "../berry-flavor/BerryFlavor";
import BerrySize from "../berry-size/BerrySize";


function Sidebar({handleChange}) {

    return(
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><FiHeart/></h1>
                </div>

                <Category handleChange={handleChange}/>
                <BerryFlavor handleChange={handleChange}/>
                <BerrySize handleChange={handleChange}/>

            </section>
            Sidebar
        </>
    )
}

export default Sidebar;

