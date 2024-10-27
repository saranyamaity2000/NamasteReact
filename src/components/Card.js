const Card = ({resRating, resImg, resName, fakeCard}) => {
    return (
        <div className="card">
            <div className="card-image">
                {
                    !fakeCard && (<img src={resImg.url} alt="img" />)
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

export default Card;