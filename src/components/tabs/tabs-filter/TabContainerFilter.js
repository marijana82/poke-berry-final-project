import "./TabContainerFilter.css";
import React, {useState} from "react";
import CardFlavorsAll from "../../card-items-all/CardFlavorsAll";
import CardFirmnessAll from "../../card-items-all/CardFirmnessAll";
import FilterInfo from "../../filter-info/FilterInfo";



function TabContainerFilter() {
    const [activeTab, setActiveTab] = useState("tab 1");
    const [flavorDex, setFlavorDex] = useState();

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
                >Filter flavors
                </li>

                <li
                    className={activeTab === "tab 2" ? "active" : ""}
                    onClick={handleTabTwo}
                >Firmness filter
                </li>
            </ul>

            <div className="tab-content-container">
                {/*Content will be shown here*/}
                { activeTab === "tab 1"
                    ?
                    <CardFlavorsAll
                        infoFlavorHandler={flavorDataContainer => setFlavorDex(flavorDataContainer)}
                    />
                    :
                    <CardFirmnessAll/>
                }

                {flavorDex ? <FilterInfo dataFlavor={flavorDex}/> : <p>no flavors chosen</p>}

            </div>

        </div>
    )


}

export default TabContainerFilter;