import "./BerriesToFilter.css";
import React from "react";
import {CHERRY_BERRY} from "../../../assets/images/constants";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import Header from "../../header/Header";
import CardFilter from "../card-filter/CardFilter";


function BerriesToFilter() {
    return(
        <>
            <Header/>

            BERRIES TO FILTER
            <section className="berry-card-container">
                <CardFilter/>
            </section>
        </>
    )
}

export default BerriesToFilter;