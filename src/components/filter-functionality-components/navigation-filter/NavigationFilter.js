import "./NavigationFilter.css";
import React from "react";
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";


function NavigationFilter() {
    return(
        <nav className="main-filter-navigation-container">
        <div className="filter-navigation-container">
            <input
                type="text"
                placeholder="Enter your search berries"
                className="filter-search-input"
            />
        </div>

        <div className="profile-container">
            <a href="#">
                <FiHeart
                    className="navigation-icons"
                />
            </a>

            <a href="">
                <AiOutlineShoppingCart
                    className="navigation-icons"
                />
            </a>

            <a href="">
                <AiOutlineUserAdd
                    className="navigation-icons"
                />
            </a>

        </div>

        </nav>
    )
}

export default NavigationFilter;