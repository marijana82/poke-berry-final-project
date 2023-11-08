import "./FlippableCard.css";
import React from "react";
import Card from "../card/Card";
import {CSSTransition} from "react-transition-group";
import { useState } from "react";

function FlippableCard() {

    const [showFrontOne, setShowFrontOne] = useState(true);

    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFrontOne}
                timeout={300}
                classNames="flip"
            >
                    <Card
                        clickToRegister="Wanna have some fun? Flip the card to play a game!"
                        playMessage="Play now!"
                        registerMessage="Or click here to register"
                        onClick={() => {
                            setShowFrontOne((currentValue) => !currentValue);
                        }}/>

            </CSSTransition>


        </div>
    );
}

export default FlippableCard;