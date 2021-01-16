
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopupOpen from './AddPlacePopup';
import ImagePopup from './ImagePopup';
//import api from '../utils/Api';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  return (
    <>
        <div className="page">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
          <Footer />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <AddPlacePopupOpen isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
        </div>

        <section className="overlay overlay_delete-card">
          <form className="form form_delete-card" name="delete-card">
            <button type="button" className="form__close-icon"><img src="<%=require('./images/close-icon.svg')%>" alt="Закрыть форму" /></button>
            <h5 className="form__title">Вы уверены?</h5>
            <button type="submit" className="form__submit-button">Да</button>
          </form>
        </section>
    </>
  );
}

export default App;
