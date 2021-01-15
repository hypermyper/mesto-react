import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props)

  {
    return (
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        isOpen={props.isOpen}
        onClose={props.onClose}>
        <>
          <input id="input-name" type="text" name="input-name" className="form__input form__input_name" value="" autocomplete="off" placeholder="Имя" minLength="2" maxLength="40" required />
          <span id="input-name-error" className="form__input-error"></span>
          <input id="input-description" type="text" name="input-description" className="form__input form__input_description" value="" autocomplete="off" placeholder="Профессия" minlength="2" maxlength="200" required />
          <span id="input-description-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button">Сохранить</button>
        </>
      </PopupWithForm>
    )
  }

export default EditProfilePopup;
