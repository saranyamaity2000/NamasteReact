// import SearchAndFilter from "./SearchAndFilter";
// import CardContainer from "./CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import RestaurantCard from './RestaurantCard';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../utils/hooks/useToggle";
import useFilteredRestaurants from "../utils/hooks/useFilteredRestaurant";
import useRestaurants from "../utils/hooks/useRestaurants";
import withPromotion from "../utils/hoc/withPromotion";
import { useSelector } from "react-redux";

const PromotedRestaurantCard = withPromotion(RestaurantCard);

const Body = () => {
    const restaurants = useRestaurants();
    const [filterOn, toggleFilterOn, setFilterOn] = useToggle(false);
    const [filterBy, setFilterBy] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [searchWithText, setSearchWithText] = useState(searchText);
    const filterIconRef = useRef(null);

    const onSearchInput = (e) => setSearchText(e.target.value);
    const onSearchClick = () => setSearchWithText(searchText);

    const handleClickOutside = (event) => {
        console.log(filterIconRef.current.querySelectorAll('*'), event.composedPath(), filterIconRef.current, event.target);
        if (filterIconRef.current && !filterIconRef.current.contains(event.target)) {
            setFilterOn(prev => false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const favResNames = useSelector((state) => state.res.favRes);
    const favResNamesSet = new Set(favResNames);

    const filteredRes = useFilteredRestaurants(restaurants, filterBy, searchWithText, favResNamesSet);

    return (
        <div className="my-5">
            <div ref={filterIconRef} className="search-container my-5 flex justify-center items-center h-20 w-full m-auto bg-orange-100">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon size-8 m-5 cursor-pointer" onClick={onSearchClick}/>
                <input className="input-search-bar h-2/3 w-1/2 p-5 text-xl rounded-full border border-black" 
                    onInput={onSearchInput} 
                    onKeyDown={(e) => (e.key === 'Enter') && onSearchClick()}
                />
                <div className="relative m-5">
                    <FontAwesomeIcon icon={faFilter}
                        className="icon size-7 cursor-pointer"
                        onClick={toggleFilterOn}
                    />
                    {
                        filterOn && (
                            <div className="absolute left-full top-1/2 bg-white shadow-md rounded-lg p-4 w-40 z-50 border border-solid border-gray-400">
                                <div className="filter-option cursor-pointer py-2 px-4 hover:bg-gray-100">
                                    Option 1
                                </div>
                                <div className="filter-option cursor-pointer py-2 px-4 hover:bg-gray-100">
                                    Option 2
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="card-container flex flex-wrap justify-between items-center">
                {
                    filteredRes ?
                    filteredRes
                        .map(res => {
                            const isFav = favResNamesSet.has(res.info.name);
                            return (<Link key={res.info.resId} to={"/res/" + res.info.resId}>
                                {!res.isPromoted && <RestaurantCard resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image} isFav={isFav}></RestaurantCard>}
                                {res.isPromoted && <PromotedRestaurantCard resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image} isFav={isFav}></PromotedRestaurantCard>}
                            </Link>)
                        })
                    : Array.from({length: 10}).fill(<RestaurantCard fakeCard={true}></RestaurantCard>)
                }
            </div>
        </div>
    )
}

export default Body;