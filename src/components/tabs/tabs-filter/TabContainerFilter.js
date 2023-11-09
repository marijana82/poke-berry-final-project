import "./TabContainerFilter.css";
import React, {useState} from "react";
import CardFlavorsAll from "../../card-items-all/CardFlavorsAll";
import CardFirmnessAll from "../../card-items-all/CardFirmnessAll";
import FilterInfo from "../../filter-info/FilterInfo";


function TabContainerFilter() {
    const [activeTab, setActiveTab] = useState("tab 1");
    const [flavorDex, setFlavorDex] = useState();
    const [firmnessDex, setFirmnessDex] = useState();

    function handleTabOne() {
        setActiveTab("tab 1");
    }

    function handleTabTwo() {
        setActiveTab("tab 2");
    }

    return(
        <div className="tab-container-filter">

            <ul className="tab-navigation">
                <li
                    className={activeTab === "tab 1" ? "active" : ""}
                    onClick={handleTabOne}
                >Filter flavors
                </li>

                <li
                    className={activeTab === "tab 2" ? "active" : ""}
                    onClick={handleTabTwo}
                >Filter firmness
                </li>
            </ul>

            <div className="tab-content-container-filter">

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


                {flavorDex

                    &&
                    <FilterInfo dataFlavor={flavorDex}/>
                }


            </div>

        </div>
    )


}

export default TabContainerFilter;