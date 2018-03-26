import React, { Component } from 'react';
import data from './data';

import MoreButton from './components/MoreButton';
import PostList from "./components/PostList";
import PostListItem from "./components/PostListItem";

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

                <PostList data={getData}/>
                <MoreButton onClick={this.handleChangeCount} />
            </div>
        );
    }
}

const getData = data.map((item) => {
    return (
        <PostListItem key={item.id} body={item.body} title={item.title}/>
    );
});

export default App;
