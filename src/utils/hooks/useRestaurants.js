import { useState, useEffect } from "react";
import { getZomatoData } from "../data";
import { useParams } from 'react-router-dom'

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getZomatoData()
            .then(data => setRestaurants(data.sections.SECTION_SEARCH_RESULT))
    }, []); // no dependency provided in the array so will run after component mounted / rendered first time
    //* if we don't provide the empty array itself it will call the callback function on every re-render

    return restaurants;
};

export default useRestaurants;