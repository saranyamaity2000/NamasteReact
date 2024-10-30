const useFilteredRestaurants = (allResturants, filterOn, searchWithText) => {
    return allResturants?.filter(res => {
        const matchesRating = !filterOn || res.info.rating.aggregate_rating > 4;
        const matchesSearch = !searchWithText || res.info.name.toLowerCase().includes(searchWithText.toLowerCase());
        return matchesRating && matchesSearch;
    });
};

export default useFilteredRestaurants;