
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopupOpen from './AddPlacePopup';
//import api from '../utils/Api';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

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
  }

  return (
    <>
        <div className="page">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
          <Footer />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <AddPlacePopupOpen isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        </div>

        <section className="overlay overlay_delete-card">
          <form className="form form_delete-card" name="delete-card">
            <button type="button" className="form__close-icon"><img src="<%=require('./images/close-icon.svg')%>" alt="Закрыть форму" /></button>
            <h5 className="form__title">Вы уверены?</h5>
            <button type="submit" className="form__submit-button">Да</button>
          </form>
        </section>
        <section className="overlay overlay_image-popup">
          <figure className="overlay-figure">
            <button type="button" className="form__close-icon"><img src="<%=require('./images/close-icon.svg')%>" alt="Закрыть форму" /></button>
            <img src="https://images.unsplash.com/photo-1561398036-dc6755f9f65d?auto=format&fit=crop&w=600&q=50" alt="" className="overlay-figure__image" />
            <figcaption className="overlay-figure__caption" />
          </figure>
        </section>
        <template className="template" />
    </>
  );
}

export default App;
