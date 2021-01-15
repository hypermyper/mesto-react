import React, { useEffect } from 'react';
import editButton from '../images/edit_button.svg';
import api from '../utils/Api';

function Main(props)
  {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getUserInfo().then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      }
    )
  }, [userName, userAvatar, userDescription]);


    React.useEffect(() => {
      api.getCards().then(res => {
          setCards(res);
        }
      )
    }, []);


  return (
      <main>
        <section className="profile">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="" title className="profile__avatar-image" />
          </div>
          <div className="profile-info">
            <div className="profile-info__title-wrap">
              <h1 className="profile-info__title">{userName}</h1>
              <button type="button" className="profile-info__edit-button" onClick={props.onEditProfile}>
                <img src={editButton} alt="Редактировать информацию" />
              </button>
            </div>
            <p className="profile-info__description">{userDescription}</p>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
        </section>
        <section className="elements">
          {
            cards.map(card => (
              <article class="element" key={card._id}>
                <button type="button" className="element__trash"></button>
                <img src={card.link} className="element__photo" alt={card.name} />
                <div className="element__body">
                  <h3 className="element__title">{card.name}</h3>
                  <div className="element__like-group">
                    <button type="button" className="element__like-button"></button>
                    <p className="element__like-quantity">{card.likes.length}</p>
                  </div>
                </div>

              </article>
            ))
          }
        </section>
      </main>
   );
}

export default Main;
