import React from 'react';

const PostListItem = (props) => {
    return (
        <div className="list-item">
            <h3 className="list-h3">{props.title}</h3>
            <p className="list-body">{props.body}</p>
        </div>
    );
};

export default PostListItem;
