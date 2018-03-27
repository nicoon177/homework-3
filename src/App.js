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
                <PostList data={listItem} />
                <MoreButton onClick={this.handleChangeCount} />
            </div>
        );
    }
}

/*const getData = data.map((item) => {
    return (
        <PostListItem key={item.id} body={item.body} title={item.title}/>
    );
});*/

const listItem = data.reduce((acc, item, i) => (i <= this.countItems) ? acc.concat(<PostListItem key={item.id} title={item.title} body={item.body} />) : acc, []);




export default App;
