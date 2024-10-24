import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchAndFilter = () => {
    return (
        <div className="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon mg"/>
            <input className="input-search-bar"></input>
            <FontAwesomeIcon icon={faFilter} className="icon filter" onClick={() => console.log("Button Clicked")}/>
        </div>
    )
}

export default SearchAndFilter