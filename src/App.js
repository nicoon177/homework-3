import React, { Component } from 'react';
import data from './data';

import MoreButton from './components/MoreButton';
import PostList from "./components/PostList";

class App extends Component {
    constructor(props) {
        super (props);

        this.state = {
            countItems: 10,
        };
    }

    handleChangeCount = () => {
        this.setState({
            countItems: this.state.countItems + 10,
        })
    };


    render() {
        return (
            <div>
                <PostList count={this.state.countItems} />
                <MoreButton coun={this.handleChangeCount} />
                <button onClick={this.handleChangeCount}>Load</button>
            </div>
        );
    }
}

export default App;
