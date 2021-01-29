import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `element__trash${isOwn ? ' element__trash_visible' : ''}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikedButtonClassName = (
    `element__like-button${isLiked ? ' element__like-button_selected' : ''}`
  );

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (

        <article className="element">
          <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
          <img src={card.link} className="element__photo" alt={card.name} onClick={handleCardClick} />
          <div className="element__body">
            <h3 className="element__title">{card.name}</h3>
            <div className="element__like-group">
              <button type="button" className={cardLikedButtonClassName} onClick={handleLikeClick}></button>
              <p className="element__like-quantity">{card.likes.length}</p>
            </div>
          </div>
        </article>

  );
}

export default Card;
