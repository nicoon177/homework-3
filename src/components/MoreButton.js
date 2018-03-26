import React from 'react';

const MoreButton = (props) => {
    // const clicked = () => {
    //     this.props.handleChangeCount();
    // };
    return (
        <div className="more-btn">
            {console.log(props)}
            <button
                className="button-load-more"
                type="submit"
                // onClick={clicked()}
            >Load More</button>
        </div>
    );
};

export default MoreButton;