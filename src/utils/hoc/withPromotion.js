const withPromotion = (ResComp) => {
    return (props) => {
        return (
            <div className="relative">
                
                <label className="z-10 absolute p-2 border left-0 top-0 border-orange-400 font-bold bg-white rounded-lg">
                    Promoted
                </label>
                <ResComp {...props}/>
            </div>
        )
    };
}

export default withPromotion;