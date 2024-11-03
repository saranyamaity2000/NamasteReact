import { useState, useEffect } from "react";
import { MenuService } from "../data";
import { CURRENT_SERVICE_PROVIDER } from "../constants";

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState(null);
    const menuService = new MenuService(CURRENT_SERVICE_PROVIDER);
    useEffect(() => {
        menuService.getAllResData()
            .then(data => setRestaurants(data))
    }, []); // no dependency provided in the array so will run after component mounted / rendered first time
    //* if we don't provide the empty array itself it will call the callback function on every re-render

    return restaurants;
};

export default useRestaurants;