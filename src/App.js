import React from "react";
import ReactDOM from 'react-dom/client'
import { Header } from "./components/Header";
import Body from "./components/Body";

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