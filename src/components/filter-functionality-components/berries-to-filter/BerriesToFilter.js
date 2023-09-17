import "./BerriesToFilter.css";
import React from "react";
import {CHERRY_BERRY} from "../../../assets/images/constants";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import Header from "../../header/Header";


function BerriesToFilter() {
    return(
        <>
            <Header/>

            BERRIES TO FILTER
            <section className="berry-card-container">
                <section className="berry-card">
                    <img src={CHERRY_BERRY} alt="berry-picture"/>
                    <div className="card-details">
                        <h3 className="card-title">CARD TITLE</h3>
                        <section className="card-reviews">
                            <AiFillStar/>
                            <AiFillHeart/>
                            <span className="reviews">total reviews</span>
                        </section>
                        <section className="card-price">
                            <div className="price"></div>
                        </section>
                    </div>

                </section>

            </section>
        </>
    )
}

export default BerriesToFilter;