import React from 'react';
import Card from './Card';

const Cards = props => {
    return (
        <div className="cards-container">
            {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
            {props.cards.map(card =>
                <Card
                    headline={card.headline}
                    tab={card.tab}
                    img={card.img}
                    author={card.author}
                    key={card.headline}
                />
            )}
        </div>
    )
}

// Make sure you include prop types for all of your incoming props

export default Cards;