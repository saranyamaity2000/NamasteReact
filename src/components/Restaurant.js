import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getZomatoResDetailsById } from '../utils/data';

function Restaurant() {
    const [resData, setResData] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        getZomatoResDetailsById(resId).then(data => {
            setResData(data);
            console.log(data);
        });
    }, []); // empty to make sure it runs only on didMount

    const {name, rating, cuisine} = resData?.info ?? {};

    return (
        <div>
            <h1>Restaurant : {name ?? 'N/A'}</h1>
            <h4>rating : {rating?.aggregate_rating ?? 'N/A'} </h4>
        </div>
        
    )
}

export default Restaurant