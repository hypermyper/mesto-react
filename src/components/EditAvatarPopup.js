import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props)

  {
    return (
      <PopupWithForm
        title="Обновить аватар"
        name="edit-profile-avatar"
        isOpen={props.isOpen}
        onClose={props.onClose}>
        <>
          <input id="input-avatar" type="url" name="input-avatar" className="form__input form__input_avatar" autoComplete="off" required />
          <span id="input-avatar-error" className="form__avatar-error"></span>
          <button type="submit" className="form__submit-button">Сохранить</button>
        </>
      </PopupWithForm>
    )
  }

export default EditAvatarPopup;
