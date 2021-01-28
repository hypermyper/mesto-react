import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const [description, setDescription] = React.useState('');

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onUpdateUser={props.onUpdateUser}
    >
      <>
        <input
          id="input-name"
          type="text"
          name="input-name"
          className="form__input form__input_name"
          autoComplete="off"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name ? name : ''}
          onChange={handleChangeName}
        />
        <span id="input-name-error" className="form__input-error"></span>
        <input
          id="input-description"
          type="text"
          name="input-description"
          className="form__input form__input_description"
          autoComplete="off"
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
          value={description ? description : ''}
          onChange={handleChangeDescription}
        />
        <span id="input-description-error" className="form__input-error"></span>
        <button type="submit" className="form__submit-button">Сохранить</button>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
