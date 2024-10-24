// import SearchAndFilter from "./SearchAndFilter";
// import CardContainer from "./CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { zomatoResponse } from '../utils/data';
import Card from './Card';

const Body = () => {
    return (
        <div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon mg" />
                <input className="input-search-bar"></input>
                <FontAwesomeIcon icon={faFilter} 
                    className="icon filter" 
                    onClick={() => console.log("Button Clicked")} 
                />
            </div>
            <div className="card-container">
                {
                    zomatoResponse.sections.SECTION_SEARCH_RESULT
                        .map(res => <Card resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image}></Card>)
                }
            </div>
        </div>
    )
}

export default Body;