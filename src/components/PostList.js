import React from 'react';


const PostList = (props) => {
    return (
        <div>
            {props.list()}
        </div>
    );
};

export default PostList;