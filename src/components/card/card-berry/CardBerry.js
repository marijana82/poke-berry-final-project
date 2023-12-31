import "./CardBerry.css";
import React, {useState} from "react";
import ButtonReset from "../../button-reset/ButtonReset";

function CardBerry({ berryData, infoBerryHandler }) {

    const [searchString, setSearchString] = useState("");

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
                            styling="reset-button-tab"
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