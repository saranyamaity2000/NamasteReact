const useFilteredRestaurants = (allResturants, filterBy, searchWithText, favResNamesSet) => {
    return allResturants?.filter(res => {
        const matchesRating = !filterBy 
            || (filterBy === 'rating' && res.info.rating.aggregate_rating > 4) 
            || (filterBy === 'fav' && favResNamesSet.has(res.info.name ?? "N/A"));
        const matchesSearch = !searchWithText || res.info.name.toLowerCase().includes(searchWithText.toLowerCase());
        return matchesRating && matchesSearch;
    });
};

export default useFilteredRestaurants;