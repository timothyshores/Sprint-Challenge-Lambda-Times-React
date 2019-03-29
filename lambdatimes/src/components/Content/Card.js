import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    const { author, headline, img } = props;
    return (
        <div className="card">
            <div className="headline">{headline}</div>
            <div className="author">
                <div className="img-container">
                    <img src={img} alt={author} />
                </div>
                <span>By {author}</span>
            </div>
        </div>
    );
};

// Make sure to include PropTypes.
Card.propTypes = {
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string,
};

export default Card;
