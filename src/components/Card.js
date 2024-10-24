const Card = ({resRating, resImg, resName}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={resImg.url} alt="img" />
            </div>
            <p className="res-name">{resName}</p>
            <p>⭐️{resRating}</p>
        </div>
    )
}

export default Card;