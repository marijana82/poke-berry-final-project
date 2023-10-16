import "./FilterAdvancedPage.css";
import React, {useEffect, useState} from "react";
import NavigationFilter from "../../components/filter-functionality-components/navigation-filter/NavigationFilter";
import BerriesToFilter from "../../components/filter-functionality-components/berries-to-filter/BerriesToFilter";
import RecommendedFilter from "../../components/filter-functionality-components/recommended-filter/RecommendedFilter";
import Header from "../../components/header/Header";
import Sidebar from "../../components/filter-functionality-components/sidebar-categories/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import CardFilter from "../../components/filter-functionality-components/card-filter/CardFilter";
import TabContainer from "../../components/tabs/TabContainer";
import TabContainerFilter from "../../components/tabs/tabs-filter/TabContainerFilter";


function FilterAdvancedPage() {

    return(
        <>

            <TabContainerFilter/>


        </>
    );
}


export default FilterAdvancedPage;