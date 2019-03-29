import React from 'react';

const Card = props => {
    console.log('Card props', props);
    const { author, headline, img } = props;
    return (
        <div className="card">
            <div className="headline">{headline}</div>
            <div className="author">
                <div className="img-container">
                    <img src={img} />
                </div>
                <span>By {author}</span>
            </div>
        </div>
    );
};

// Make sure to include PropTypes.

export default Card;
