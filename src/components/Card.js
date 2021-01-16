import React from 'react';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
    {
        <article className="element" onClick={handleCardClick}>
          <button type="button" className="element__trash"></button>
          <img src={props.card.link} className="element__photo" alt={props.card.name} />
          <div className="element__body">
            <h3 className="element__title">{props.card.name}</h3>
            <div className="element__like-group">
              <button type="button" className="element__like-button"></button>
              <p className="element__like-quantity">{props.card.likes.length}</p>
            </div>
          </div>
        </article>
    }
    </>
  );
}

export default Card;
