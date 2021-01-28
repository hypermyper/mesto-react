import React from 'react';
import editButton from '../images/edit_button.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main>
        <section className="profile">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar-image" />
          </div>
          <div className="profile-info">
            <div className="profile-info__title-wrap">
              <h1 className="profile-info__title">{currentUser.name}</h1>
              <button type="button" className="profile-info__edit-button" onClick={props.onEditProfile}>
                <img src={editButton} alt="Редактировать информацию" />
              </button>
            </div>
            <p className="profile-info__description">{currentUser.about}</p>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
        </section>
        <section className="elements">
          {
            props.cards.map(card => (
              <Card
                card={card}
                onCardClick={props.onCardClick}
                key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            ))
          }
        </section>
      </main>
   );
}

export default Main;
