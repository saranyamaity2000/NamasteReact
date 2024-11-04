import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import resSlice from "../utils/redux-store/res";

const RestaurantCard = ({resRating, resImg, resName, fakeCard, isFav}) => {
    const dispatch = useDispatch();
    const toggleFav = (resName) => { // dispatches an action , then that would call a reducer function which will do the actual job
        if (!isFav) {
            dispatch(resSlice.actions.markFavourite(resName));
        } else {
            dispatch(resSlice.actions.removeFromFavourite(resName));
        }
    }
    return (
        <div className="relative card w-80 h-80 m-3 flex flex-col gap-5 items-center rounded-2xl overflow-hidden border border-solid border-slate-200 shadow-lg transition ease-in-out duration-200 hover:scale-105 hover:shadow-2xl">
            <FontAwesomeIcon icon={faHeart} className={" absolute text-3xl right-2 top-2" + (!isFav ? " text-pink-500" : " text-red-500 text-4xl")} 
                onClick={(event) =>  event.preventDefault() || event.stopPropagation() || toggleFav(resName)}
            />
            <div className="card-image overflow-hidden w-full basis-4/6 border border-solid border-gray-300">
                {
                    !fakeCard && (<img className="h-full w-full object-cover object-center" src={resImg.url} alt="img" />)
                }
            </div>
            {!fakeCard && (
                <>
                    <p className="res-name">{resName}</p>
                    <p>⭐️{resRating}</p>
                </>
            )}
        </div>
    )
}

export default RestaurantCard;