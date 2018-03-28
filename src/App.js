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

    getPost = () => {
        const listItem = data.reduce((acc, item, i) => (i < this.state.countItems) ? acc.concat(<PostListItem key={item.id} title={item.title} body={item.body}/>) : acc, []);
        return listItem;
    };

    render() {
        return (
            <div>
                <PostList list={this.getPost} />
                {(this.state.countItems < data.length) ? <MoreButton onClick={this.handleChangeCount} /> : ''}
            </div>
        );
    }
}

export default App;
