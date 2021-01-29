import React from 'react';
import editButton from '../images/edit_button.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main>
        <section className="profile">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar-image" />
          </div>
          <div className="profile-info">
            <div className="profile-info__title-wrap">
              <h1 className="profile-info__title">{currentUser.name}</h1>
              <button type="button" className="profile-info__edit-button" onClick={onEditProfile}>
                <img src={editButton} alt="Редактировать информацию" />
              </button>
            </div>
            <p className="profile-info__description">{currentUser.about}</p>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace} />
        </section>
        <section className="elements">
          {
            cards.map(card => (
              <Card
                card={card}
                onCardClick={onCardClick}
                key={card._id}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))
          }
        </section>
      </main>
   );
}

export default Main;
