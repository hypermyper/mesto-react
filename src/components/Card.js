import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `element__trash${isOwn ? ' element__trash_visible' : ''}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardLikedButtonClassName = (
    `element__like-button${isLiked ? ' element__like-button_selected' : ''}`
  );

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  return (

        <article className="element">
          <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
          <img src={props.card.link} className="element__photo" alt={props.card.name} onClick={handleCardClick} />
          <div className="element__body">
            <h3 className="element__title">{props.card.name}</h3>
            <div className="element__like-group">
              <button type="button" className={cardLikedButtonClassName} onClick={handleLikeClick}></button>
              <p className="element__like-quantity">{props.card.likes.length}</p>
            </div>
          </div>
        </article>

  );
}

export default Card;
