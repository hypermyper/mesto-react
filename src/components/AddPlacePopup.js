import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [place, setPlace] = React.useState('');

  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  const [link, setLink] = React.useState('');

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: place,
      link
    })
  }

  React.useEffect(() => {
    setPlace('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="new-place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          id="input-new-place"
          type="text"
          name="input-new-place"
          className="form__input form__input_new-place"
          autoComplete="off"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          onChange={handleChangePlace}
          value={place ? place : ''}
        />
        <span id="input-new-place-error" className="form__input-error"></span>
        <input
          id="input-image-link"
          type="url"
          name="input-image-link"
          className="form__input form__input_image-link"
          autoComplete="off"
          placeholder="Ссылка на картинку"
          required
          onChange={handleChangeLink}
          value={link ? link : ''}
        />
        <span id="input-image-link-error" className="form__input-error"></span>
        <button type="submit" className="form__submit-button">Сохранить</button>
      </>
    </PopupWithForm>
  )
  }

export default AddPlacePopup;
