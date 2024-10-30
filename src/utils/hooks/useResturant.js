import { useState, useEffect } from "react";
import { getZomatoResDetailsById } from "../data";

const useRestaurantById = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getZomatoResDetailsById(resId).then(data => {
            setRestaurant(data);
        });
    }, []);

    return restaurant;
};

export default useRestaurantById;