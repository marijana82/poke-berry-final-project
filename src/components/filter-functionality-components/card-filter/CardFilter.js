import "./CardFilter.css";
import React from "react";
import {CHERRY_BERRY} from "../../../assets/images/constants";
import {AiFillHeart, AiFillStar} from "react-icons/ai";


function CardFilter() {
    return(
        <>
            <section className="berry-card">
                <img
                    src={CHERRY_BERRY}
                    alt="berry-picture"
                    className="berry-picture"
                />
                <div className="card-details">
                    <h3 className="card-title">CARD TITLE</h3>
                    <section className="card-reviews">
                        <AiFillStar
                            className="star"
                        />
                        <AiFillHeart
                            className="star"
                        />
                        <span className="reviews">total reviews</span>
                    </section>
                    <section className="card-price">
                        <div className="price"></div>
                    </section>
                </div>

            </section>



        </>
    )
}

export default CardFilter;