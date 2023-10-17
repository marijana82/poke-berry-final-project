import "./TabContainerFilter.css";
import React, {useState} from "react";
import CardFlavorsAll from "../../card-items-all/CardFlavorsAll";
import CardFirmnessAll from "../../card-items-all/CardFirmnessAll";
import FilterInfo from "../../filter-info/FilterInfo";
import {Link} from "react-router-dom";


function TabContainerFilter() {
    const [activeTab, setActiveTab] = useState("tab 1");
    const [flavorDex, setFlavorDex] = useState();
    const [firmnessDex, setFirmnessDex] = useState();

    //functions to handle tab switching
    function handleTabOne() {
        //update the state to tab 1
        setActiveTab("tab 1");
    }

    function handleTabTwo() {
        setActiveTab("tab 2");
    }

    return(
        <div className="tab-container-filter">
            {/*Tab navigation*/}

            <ul className="tab-navigation">
                <li
                    className={activeTab === "tab 1" ? "active" : ""}
                    onClick={handleTabOne}
                >Filter flavors
                </li>

                <li
                    className={activeTab === "tab 2" ? "active" : ""}
                    onClick={handleTabTwo}
                >Firmness filter
                </li>
            </ul>

            <div className="tab-content-container-filter">
                {/*Content will be shown here*/}
                { activeTab === "tab 1"
                    ?
                    <CardFlavorsAll
                        infoFlavorHandler={flavorDataContainer => setFlavorDex(flavorDataContainer)}
                    />
                    :
                    <CardFirmnessAll
                        infoFirmnessHandler={firmnessDataContainer => setFirmnessDex(firmnessDataContainer)}
                    />
                }

                //TODO: create another component where info of tab two will be rendered
                {flavorDex || firmnessDex ?

                        <FilterInfo
                            dataFlavor={flavorDex}
                            dataFirmness={firmnessDex}
                        />
                    :
                    <p>no flavors or firmness chosen</p>
                }

            </div>

        </div>
    )


}

export default TabContainerFilter;