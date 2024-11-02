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
        <div className="my-5">
            <div className="search-container my-5 flex justify-center items-center h-20 w-full m-auto bg-slate-100">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon size-8 m-5 cursor-pointer" onClick={onSearchClick}/>
                <input className="input-search-bar h-2/3 w-1/2 p-5 text-xl rounded-full border border-black" 
                    onInput={onSearchInput} 
                    onKeyDown={(e) => (e.key === 'Enter') && onSearchClick()}
                />
                <FontAwesomeIcon icon={faFilter} 
                    className="icon size-7 m-5 cursor-pointer" 
                    onClick={toggleFilterOn}
                />
            </div>
            <div className="card-container flex flex-wrap justify-between items-center">
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