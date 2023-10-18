import "./CardBerry.css";
import React, {useState} from "react";
import { CHERRY_BERRY } from "../../../assets/images/constants";
import ButtonReset from "../../button-reset/ButtonReset";
import {addItem} from "../../compare-items/actions/actions";




function CardBerry({ berryData, infoBerryHandler }) {

    const [searchString, setSearchString] = useState("");
    //compare-items functionality
    const [compare, setCompare] = useState({
        added: false
    });

    //add to compare
    const addItem = item => {
        addItem(item);
        setCompare({
            added: true
        });
    };

    //remove from compare
    const removeItem = item => {
        removeItem(item);
        setCompare({
            added: false
        });
    };


    const startsWith = str => word => str ? word.name.slice(0,str.length).toLowerCase() === str.toLowerCase() : true;

    const resetSearch = () => {
        console.log("button is clicked")
        setSearchString("");
    }

    return(
        <>
            <div className="hover-card-container">

                <div className="card-hover-filter">
                    <label
                        htmlFor="filter-field"
                    >
                        <ButtonReset
                            children="x"
                            resetHandler={resetSearch}
                        />

                        <input
                            type="text"
                            onChange={e => setSearchString(e.target.value)}
                            value={searchString}
                            className="filter-by-letter"
                            placeholder="berry name"
                            id="filter-field"
                        />
                    </label>
                </div>

            </div>

            {berryData &&
                berryData.filter(startsWith(searchString)).map((item) => {
                    return(
                        <>
                            <div
                                className="berry-hover-card-container"
                                key={item.id}
                                onClick={() => infoBerryHandler(item)}
                            >

                                <div className="berry-card-hover">
                                    <div className="image-container">
                                        <h2>{item.name}</h2>
                                        <h3>id: {item.id}</h3>



                                        {/*maximum call stack size exceeded*/}
                                               {/* <button
                                                    onClick={() => addItem(item)}
                                                    className="compare-button"
                                                >
                                                </button>*/}


                                    </div>

                                    <div className="content"> {item.natural_gift_type.name} pokemon</div>
                                </div>
                            </div>
                        </>
                        )
                })
            }



        </>
    )
}

export default CardBerry;