import { zomatoResponse } from '../../utils/data';
import Card from '../Card';

const CardContainer = () => {
    const resturants = zomatoResponse.sections.SECTION_SEARCH_RESULT;
    return (
        <div className="card-container">
            {
                resturants
                    .map(res => <Card resName={res.info.name} resRating={res.info.rating.aggregate_rating} resCuisine={res.info.cuisine} resImg={res.info.image}></Card>)   
            }
        </div>
    )
}

export default CardContainer;