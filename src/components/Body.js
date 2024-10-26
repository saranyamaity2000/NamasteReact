// import SearchAndFilter from "./SearchAndFilter";
// import CardContainer from "./CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { zomatoResponse } from '../utils/data';
import Card from './Card';
import { useEffect, useState } from "react";


const Body = () => {
    const restaurants = zomatoResponse.sections.SECTION_SEARCH_RESULT;

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
                    filteredRes
                        .map((res, idx) => <Card key={res.info.resId}  resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image}></Card>)
                }
            </div>
        </div>
    )
}

export default Body;