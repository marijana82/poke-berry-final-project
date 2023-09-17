import "./Sidebar.css";
import React from "react";
import {FiHeart} from "react-icons/fi";
import Category from "../category/Category";
import BerryFirmness from "../berry-firmness/BerryFirmness";
import BerryFlavor from "../berry-flavor/BerryFlavor";
import BerrySearch from "../../../../pages/search-berry-page/BerrySearch";


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
                <BerrySearch/>

            </section>
            Sidebar
        </>
    )
}

export default Sidebar;

