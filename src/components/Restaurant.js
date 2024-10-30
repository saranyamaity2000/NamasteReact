import React from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantById from '../utils/hooks/useResturant';

function Restaurant() {
    const {resId} = useParams();

    const resData = useRestaurantById(resId);

    const {name, rating, cuisine} = resData?.info ?? {};

    return (
        <div>
            <h1>Restaurant : {name ?? 'N/A'}</h1>
            <h4>rating : {rating?.aggregate_rating ?? 'N/A'} </h4>
        </div>
    )
}

export default Restaurant