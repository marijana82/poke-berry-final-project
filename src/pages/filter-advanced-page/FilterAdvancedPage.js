import "./FilterAdvancedPage.css";
import React from "react";
import NavigationFilter from "../../components/filter-functionality-components/navigation-filter/NavigationFilter";
import BerriesToFilter from "../../components/filter-functionality-components/berries-to-filter/BerriesToFilter";
import RecommendedFilter from "../../components/filter-functionality-components/recommended-filter/RecommendedFilter";
import Header from "../../components/header/Header";
import Sidebar from "../../components/filter-functionality-components/sidebar-categories/sidebar/Sidebar";


function FilterAdvancedPage() {

    return(
        <>
            <Header/>
            <Sidebar/>
            <NavigationFilter/>
            <RecommendedFilter/>
            <BerriesToFilter/>

        </>
    )
}

export default FilterAdvancedPage;