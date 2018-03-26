import React, { Component } from 'react';
import PostListItem from "./PostListItem";

class PostList extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div>
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
            </div>
        );
    }
}

export default PostList;