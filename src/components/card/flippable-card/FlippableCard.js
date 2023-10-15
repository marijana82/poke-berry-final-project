import "./FlippableCard.css";
import React from "react";
import Card from "../card/Card";
import {CSSTransition} from "react-transition-group";
import { useState } from "react";


function FlippableCard() {

    const [showFrontOne, setShowFrontOne] = useState(true);
    //const [showFrontTwo, setShowFrontTwo] = useState(true);

    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFrontOne}
                timeout={300}
                classNames="flip"
            >
                    <Card
                        clickToRegister="Click here to register"
                        flipToPlay="Or flip to play"
                        onClick={() => {
                            setShowFrontOne((currentValue) => !currentValue);
                        }}/>


            </CSSTransition>


        </div>
    );
}

export default FlippableCard;