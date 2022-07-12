import React, {Component} from 'react';
import "./style.css"
class Greet extends Component {
    render() {
        return (
            <div className="greet">
                <h1 className="lato display-3">
                    Algorithm Visualizer
                </h1>
                <hr className="dropdown-divider"/>
                <h6 className="display-5">
                    Visualize algorithms for a better understanding
                </h6>
            </div>
        );
    }
}

export default Greet;