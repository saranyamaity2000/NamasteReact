import React from "react";
import ReactDOM from 'react-dom/client'
import logo from './public/static/pngegg.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { zomatoResponse } from "./data";

/** Rough Tree
 * 
 * App 
 *  - Header - done
 *      - Logo - done
 *      - NavItems - done
 *  - Body
 *      - Search
 *      - ResturantContainer
 *          - ResturantCard
 *  - Footer
 *      - CopyRight
 *      - Address
 *      - Contact
 */

const Card = ({resRating, resCuisine, resImg, resName}) => {
    console.log(resName);
    console.log(resImg);
    return (
        <div className="card">
            <div className="card-image">
                <img src={resImg.url} alt="img" />
            </div>
            <p className="res-name">{resName}</p>
            <p>⭐️{resRating}</p>
        </div>
    )
}

const CardContainer = () => {
    return (
        <div className="card-container">
            {
                zomatoResponse.sections.SECTION_SEARCH_RESULT
                .map(res => <Card resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image}></Card>)
            }
        </div>
    )
}

const SearchSection = () => {
    return (
        <div className="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
            <input className="input-search-bar"></input>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <SearchSection></SearchSection>
            <CardContainer></CardContainer>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-item-container">
                <ul>
                    <li className="option">Home</li>
                    <li className="gaurd"></li>
                    <li className="option">About Us</li>
                    <li className="gaurd"></li>
                    <li className="option">Contact</li>
                    <li className="gaurd"></li>
                    <li className="option">Cart</li>
                </ul>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);