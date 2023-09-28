import "./BerriesToFilter.css";
import React from "react";
import {CHERRY_BERRY} from "../../../assets/images/constants";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import Header from "../../header/Header";
import CardFilter from "../card-filter/CardFilter";
import Footer from "../../footer/Footer";
import {LoginContext} from "../../../context/LoginContext";


function BerriesToFilter({query, selectedCategory, berryData, handleInputChange}) {




    return(
        <>
            <Header/>

            <section className="berry-card-container">



                    <CardFilter
                        key={berry.id}
                        name={berry.props.name}
                        size={berry.props.size}
                        smoothness={berry.props.smoothness}
                        growth={berry.props.growth}
                        soil={berry.props.soil}
                        power={berry.props.power}
                        query={query}
                        handleInputChange={handleInputChange}
                        selectedCategory={selectedCategory}

                    />





            </section>

            <Footer/>
        </>
    )
}

export default BerriesToFilter;