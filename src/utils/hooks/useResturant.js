import { useState, useEffect } from "react";
import { getResDetailsById, MenuService } from "../data";
import { CURRENT_SERVICE_PROVIDER } from "../constants";

const useRestaurantById = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const menuService = new MenuService(CURRENT_SERVICE_PROVIDER);
    useEffect(() => {
        menuService.getResDetailsById(resId).then(data => {
            setRestaurant(data);
        });
    }, []);
    return restaurant;
};

export default useRestaurantById;