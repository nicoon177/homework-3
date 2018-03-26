import React from 'react';

const MoreButton = (props) => {
    return (
        <div className="more-btn">
            <button
                onClick={() => this.props.onClick()}
                className="button-load-more"
                type="submit"
            >Load More</button>
        </div>
    );
};

export default MoreButton;