import "./TabContainer.css";
import React, {useState} from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";


function TabContainer({singlePokemon}) {
    const [activeTab, setActiveTab] = useState("tab 1");

    //functions to handle tab switching
    function handleTabOne() {
        //update the state to tab 1
        setActiveTab("tab 1");
    }

    function handleTabTwo() {
        setActiveTab("tab 2");
    }

    return(
        <div className="tab-container">
            {/*Tab navigation*/}

            <ul className="tab-navigation">
                <li
                    className={activeTab === "tab 1" ? "active" : ""}
                    onClick={handleTabOne}
                >Get to know me
                </li>

                <li
                    className={activeTab === "tab 2" ? "active" : ""}
                    onClick={handleTabTwo}
                >My abilities & moves
                </li>
            </ul>

            <div className="tab-content-container">
                {/*Content will be shown here*/}
                { activeTab === "tab 1" ? <TabOne singlePokemon={singlePokemon}/> : <TabTwo singlePokemon={singlePokemon}/> }

            </div>

        </div>
    )


}

export default TabContainer;