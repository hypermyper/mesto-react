
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [currentUser, setСurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getCards()
    ]).then(([userInfo, cards]) => {
      setСurrentUser(userInfo);
      setCards(cards);
    }).catch(err => console.log(err))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    }).catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    }).catch(err => console.log(err));
  }

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
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleUpdateUser(userData) {
    api.updateUserInfo(userData).then((res) => {
      setСurrentUser(res);
      closeAllPopups();
    }).catch(err => console.log(err));
  }

  function handleUpdateAvatar(userData) {
    console.log(userData);
    api.updateAvatar(userData.avatar).then((res) => {
      setСurrentUser(res);
      closeAllPopups();
    }).catch(err => console.log(err));
  }

  function handleAddPlaceSubmit(card) {
    api.addNewCard(card).then((newCard) => {
      console.log(newCard);
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch(err => console.log(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ImagePopup
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
