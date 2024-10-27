// import SearchAndFilter from "./SearchAndFilter";
// import CardContainer from "./CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Card from './Card';
import { useEffect, useState } from "react";
import { getZomatoData } from "../utils/data";
import { Link } from "react-router-dom";


const Body = () => {
    // const restaurants = zomatoResponse.sections.SECTION_SEARCH_RESULT;
    const [restaurants, setRestaurants] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getZomatoData()
        .then(data => setRestaurants(data.sections.SECTION_SEARCH_RESULT) || setDataLoaded(true))
    }, []); // no dependency provided in the array so will run after component mounted / rendered first time
    //* if we don't provide the empty array itself it will call the callback function on every re-render

    const [filterOn, setFilterOn] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchWithText, setSearchWithText] = useState(searchText);

    const filterClickHandler = () => setFilterOn(!filterOn);
    const onSearchInput = (e) => setSearchText(e.target.value);
    const onSearchClick = () => setSearchWithText(searchText);

    const filteredRes = restaurants.filter(res => {
        const matchesRating = !filterOn || res.info.rating.aggregate_rating > 4;
        const matchesSearch = !searchWithText || res.info.name.toLowerCase().includes(searchWithText.toLowerCase());
        return matchesRating && matchesSearch;
    });

    return (
        <div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon mg" onClick={onSearchClick}/>
                <input className="input-search-bar" onInput={onSearchInput}/>
                <FontAwesomeIcon icon={faFilter} 
                    className="icon filter" 
                    onClick={filterClickHandler} 
                />
            </div>
            <div className="card-container">
                {
                    dataLoaded ?
                    filteredRes
                        .map(res => (
                            <Link key={res.info.resId} to={"/res/" + res.info.resId}>
                                <Card resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image}></Card>
                            </Link>
                        )
                    )
                    : Array.from({length: 10}).fill(<Card fakeCard={true}></Card>)
                }
            </div>
        </div>
    )
}

export default Body;