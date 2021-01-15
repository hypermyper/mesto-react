import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props)

  {
    return (
      <PopupWithForm
        title="Новое место"
        name="new-place"
        isOpen={props.isOpen}
        onClose={props.onClose}>
        <>
          <input id="input-new-place" type="text" name="input-new-place" className="form__input form__input_new-place" value="" autocomplete="off" placeholder="Название" minLength="2" maxLength="30" required />
          <span id="input-new-place-error" className="form__input-error"></span>
          <input id="input-image-link" type="url" name="input-image-link" className="form__input form__input_image-link" value="" autocomplete="off" placeholder="Ссылка на картинку" required />
          <span id="input-image-link-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button form__submit-button_invalid" disabled>Сохранить</button>
        </>
      </PopupWithForm>
    )
  }

export default AddPlacePopup;
