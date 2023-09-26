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


function FilterAdvancedPage() {

    const [endpointBerry, setEndpointBerry] = useState("https://pokeapi.co/api/v2/berry");
    const [berryData, setBerryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");


    async function fetchBerryData() {
        //toggleLoading(true);
        //setError(false);
        try {
            const response = await axios.get(endpointBerry);
            console.log(response.data.results);
            getBerry(response.data.results);

        } catch(e) {
            console.error(e);
            //setError(true)
        }
    };

    async function getBerry(response) {
        try {
            const berryDataArray = [];

            for (const berry of response) {
                const resultBerry = await axios.get(berry.url);
                berryDataArray.push(resultBerry.data);
            }

            setBerryData(berryDataArray);

        } catch (e) {
            console.error(e);
        }
    }



    useEffect(() => {
        fetchBerryData();

    }, [endpointBerry]);


    //-----------InputFilter--------------
    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    //-----------Filtered Data----------
    const filteredData = () => {
        const filteredBerries = [...berryData];

    //Filtering input items based on the query
    if (query) {
        return filteredBerries
            .filter((berry) => berry.name.toLowerCase().includes(query.toLowerCase()))
            .map(({ id, name, size, smoothness, growth_time, soil_dryness, natural_gift_power }) => (
                <CardFilter
                    key={id}
                    name={name}
                    size={size}
                    smoothness={smoothness}
                    growth={growth_time}
                    soil={soil_dryness}
                    power={natural_gift_power}
                />
                ));
    }

    //Filtering based on selected category
        if (selectedCategory) {
            const categoryFilter = (berry) =>
                berry.name === selectedCategory ||
                berry.size === selectedCategory ||
                berry.smoothness === selectedCategory ||
                berry.growth_time === selectedCategory ||
                berry.soil_dryness === selectedCategory;

            return filteredBerries
                .filter(categoryFilter)
                .map(({id, name, size, smoothness, growth_time, soil_dryness, natural_gift_power}) => (
                    <CardFilter
                        key={id}
                        name={name}
                        size={size}
                        smoothness={smoothness}
                        growth={growth_time}
                        soil={soil_dryness}
                        power={natural_gift_power}
                    />
                ));
            }

        //if neither query nor category is selected, return all berries
        return filteredBerries.map(({id, name, size, smoothness, growth_time, soil_dryness, natural_gift_power}) => (
            <CardFilter
                key={id}
                name={name}
                size={size}
                smoothness={smoothness}
                growth={growth_time}
                soil={soil_dryness}
                power={natural_gift_power}
            />

        ));
    };


    //-----------Radio Filter--------------
    const handleChange = event => {
        setSelectedCategory(event.target.value);
    }

    //-----------Buttons Filter--------------
    const handleClick = event => {
        setSelectedCategory(event.target.value);
    }

    //const result = filteredData(berryData, selectedCategory, query);


    return(
        <>
            <Header/>
            <Sidebar
                handleChange={handleChange}
            />
            <NavigationFilter
                query={query}
            />
            <RecommendedFilter
                handleClick={handleClick}
            />

            <BerriesToFilter
                //berryData={berryData}
                //query={query}
                //selectedCategory={selectedCategory}
                handleInputChange={handleInputChange}
                selectedCategory={setSelectedCategory}
                query={query}
                filteredData={filteredData()}

            />

            <Footer/>

        </>
    );
}

export default FilterAdvancedPage;