const withPromotion = (ResComp) => {
    return (props) => {
        console.log("with Promotion");
        return (
            <div className="relative">
                
                <label className=" absolute p-2 border left-0 top-0 border-orange-400 font-bold bg-white rounded-lg">
                    Promoted
                </label>
                <ResComp {...props}/>
            </div>
        )
    };
}

export default withPromotion;