import React from "react";
import { GITHUB_OWNER_URI } from "../utils/constants";
import OwnerContext from "../utils/contexts/OwnerContext";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinCount: 0,
            owner: undefined
        }
    }
    componentDidMount() {
        // fetch(GITHUB_OWNER_URI) //! Wont be using this as getting fetched using OwnerContext
        //     .then(data => data.json())
        //     .then(data => {
        //         this.setState({
        //             ...this.state,
        //             owner: data
        //         })
        //     });
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <>
                <OwnerContext.Consumer>
                    {
                        (owner) => (
                            owner &&
                            (
                                <div className="owner-detail m-2 rounded-md flex flex-col gap-4 items-center">
                                    <div className="user-info">
                                        <div className="user-img h-56 w-56 mb-4 rounded-full overflow-hidden mx-auto hover:cursor-pointer hover:animate-spin-logo" onMouseEnter={() => this.setState({ ...this.state, spinCount: this.state.spinCount + 1 })}>
                                            <img className="object-cover" src={owner?.avatar_url ?? 'N/A'} />
                                        </div>
                                        <div className="user-other-details">
                                            <h4 className="text-orange-900 text-xl">
                                                <span className="font-bold text-orange-700">Learner</span> : {owner.name}
                                            </h4>
                                            <h4 className="text-orange-900 text-xl">
                                                <span className="font-bold text-orange-700">Learning</span> : {owner?.learning ?? 'N/A'}
                                            </h4>
                                            <h4 className="text-orange-900 text-xl">
                                                <span className="font-bold text-orange-700">Spin</span> : {this.state.spinCount}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </OwnerContext.Consumer>
            </>
        )
    }
}



export default About;