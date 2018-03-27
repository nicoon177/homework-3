import React from 'react';


const PostList = (props) => {
    return (
        <div>
            {() => props.getData()}
        </div>
    );
};

export default PostList;