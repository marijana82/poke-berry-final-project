import "./BerryListPage.css";
import React from "react";
import Card from "../../components/Card/Card";


function BerryListPage() {

    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>

                <div className="right-content">

                </div>


            </div>

        </>
    )
}

export default BerryListPage;