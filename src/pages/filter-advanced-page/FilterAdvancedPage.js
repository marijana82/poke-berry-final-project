import "./FilterAdvancedPage.css";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TabContainerFilter from "../../components/tabs/tabs-filter/TabContainerFilter";
import Main from "../../components/main/Main";


function FilterAdvancedPage() {

    return(
        <>
            <Header/>
            <Main>
                <TabContainerFilter/>
            </Main>
            <Footer
                buttonMessage="Back to top"
            />

        </>
    );
}


export default FilterAdvancedPage;