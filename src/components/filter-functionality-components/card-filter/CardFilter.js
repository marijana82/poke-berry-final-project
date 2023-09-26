import "./CardFilter.css";
import React from "react";
import {CHERRY_BERRY} from "../../../assets/images/constants";
import {AiFillHeart, AiFillStar} from "react-icons/ai";


function CardFilter({name, size, smoothness, growth, soil, power}) {
    console.log(name);

    return(
        <section className="berry-card-container">
            <section className="berry-card">
                <img
                    src={CHERRY_BERRY}
                    alt="berry-picture"
                    className="berry-picture"
                />
                <div className="card-details">
                    <h3 className="card-title">{name}</h3>
                    <section className="card-reviews">
                        <AiFillStar
                            className="star"
                        />
                        <AiFillHeart
                            className="star"
                        />
                        <span className="reviews">

                            <p>Grows in {growth} weeks</p>
                            <p>Size: {size} mm</p>
                            <p>Smooth: {smoothness} %</p>
                            <p>Soil dryness: {soil} %</p>
                        </span>
                    </section>
                    <section className="card-price">
                        <div className="price">Power: {power} HP</div>
                    </section>
                </div>

            </section>



        </section>
    )
}

export default CardFilter;