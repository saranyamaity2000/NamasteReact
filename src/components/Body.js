// import SearchAndFilter from "./SearchAndFilter";
// import CardContainer from "./CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { zomatoResponse } from '../utils/data';
import Card from './Card';
import { useEffect, useState } from "react";

let renderCount = 0;

const Body = () => {
    const [resturants, setResturants] = useState(zomatoResponse.sections.SECTION_SEARCH_RESULT);
    const [filterOn, setFilterOn] = useState(false);
    const [searchText, setSearchText] = useState("");

    const filterClickHandler = () => setFilterOn(!filterOn);
    const onSearchInput = (e) => setSearchText(e.target.value);

    const getFilteredResturant = () => { // will return the desired filtered list (it will update every time its dependency updates)
        return resturants
            .filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())) // search Filter 
            .filter(res => (!filterOn || +res.info.rating.aggregate_rating >= 4))
    };

    renderCount++;
    useEffect(() => console.log("Hello!"), []);
    return (
        <div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon mg"/>
                <input className="input-search-bar" onInput={onSearchInput}/>
                <FontAwesomeIcon icon={faFilter} 
                    className="icon filter" 
                    onClick={filterClickHandler} 
                />
            </div>
            <p>{renderCount}</p>
            <div className="card-container">
                {
                    getFilteredResturant()
                        .map((res, idx) => <Card key={res.info.resId}  resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image}></Card>)
                }
            </div>
        </div>
    )
}

export default Body;