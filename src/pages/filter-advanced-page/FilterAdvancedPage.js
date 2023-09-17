import "./FilterAdvancedPage.css";
import React from "react";
import NavigationFilter from "../../components/filter-functionality-components/navigation-filter/NavigationFilter";
import BerriesToFilter from "../../components/filter-functionality-components/berries-to-filter/BerriesToFilter";
import RecommendedFilter from "../../components/filter-functionality-components/recommended-filter/RecommendedFilter";


function FilterAdvancedPage() {

    return(
        <>
            <NavigationFilter/>
            <BerriesToFilter/>
            <RecommendedFilter/>
        </>
    )
}

export default FilterAdvancedPage;