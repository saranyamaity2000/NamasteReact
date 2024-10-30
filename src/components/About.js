import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0,
            ownedBy: {
                name: 'Sarnya Maity',
                age: 24
            }
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="owner-card">
                <h1>Class About Page!</h1>
                <h4>owned by : {this.state.ownedBy.name} (age: {this.state.ownedBy.age})</h4>
                <button onClick = { () => this.setState({ likeCount: this.state.likeCount + 1 }) }>like</button>
                {this.state.likeCount}
            </div>
        )
    }
}



export default About;