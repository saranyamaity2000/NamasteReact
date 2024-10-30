// import SearchAndFilter from "./SearchAndFilter";
// import CardContainer from "./CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Card from './Card';
import { useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../utils/hooks/useToggle";
import useFilteredRestaurants from "../utils/hooks/useFilteredRestaurant";
import useRestaurants from "../utils/hooks/useRestaurants";


const Body = () => {
    const restaurants = useRestaurants();
    const [filterOn, toggleFilterOn] = useToggle(false);
    const [searchText, setSearchText] = useState("");
    const [searchWithText, setSearchWithText] = useState(searchText);
    const filteredRes = useFilteredRestaurants(restaurants, filterOn, searchWithText);

    const onSearchInput = (e) => setSearchText(e.target.value);
    const onSearchClick = () => setSearchWithText(searchText);

    return (
        <div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon mg" onClick={onSearchClick}/>
                <input className="input-search-bar" onInput={onSearchInput} onKeyDown={(e) => (e.key === 'Enter') && onSearchClick()}/>
                <FontAwesomeIcon icon={faFilter} 
                    className="icon filter" 
                    onClick={toggleFilterOn}
                />
            </div>
            <div className="card-container">
                {
                    filteredRes ?
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