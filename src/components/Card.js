const Card = ({resRating, resImg, resName, fakeCard}) => {
    return (
        <div className="card w-80 h-80 m-3 flex flex-col gap-5 items-center rounded-2xl overflow-hidden border border-solid border-slate-200 shadow-lg transition ease-in-out duration-200 hover:scale-105 hover:shadow-2xl">
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

export default Card;