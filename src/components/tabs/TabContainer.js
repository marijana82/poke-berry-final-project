import "./TabContainer.css";
import React, {useState} from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";


function TabContainer() {
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
                >Pokemon information one
                </li>

                <li
                    className={activeTab === "tab 2" ? "active" : ""}
                    onClick={handleTabTwo}
                >Pokemon information two
                </li>
            </ul>

            <div className="outlet">
                {/*Content will be shown here*/}
                { activeTab === "tab 1" ? <TabOne/> : <TabTwo/> }

            </div>

        </div>
    )


}

export default TabContainer;