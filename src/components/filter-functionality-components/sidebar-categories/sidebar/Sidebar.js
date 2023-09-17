import "./Sidebar.css";
import React from "react";
import {FiHeart} from "react-icons/fi";
import Category from "../category/Category";


function Sidebar() {
    return(
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><FiHeart/></h1>
                </div>

                <Category/>


            </section>
            Sidebar
        </>
    )
}

export default Sidebar;

