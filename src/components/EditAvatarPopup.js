import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
      avatarRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-profile-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          ref={avatarRef}
          id="input-avatar"
          type="url"
          name="input-avatar"
          className="form__input form__input_avatar"
          autoComplete="off"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="input-avatar-error" className="form__avatar-error"></span>
        <button type="submit" className="form__submit-button">Сохранить</button>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
