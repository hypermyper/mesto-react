import React from 'react';
import closeIcon from '../images/close-icon.svg';

function PopupWithForm({ isOpen, name, onSubmit, title, onClose, children })
  {
    const popupOpened = isOpen ? ' overlay_opened' : '';

    return(
      <section className={`overlay overlay_${name}${popupOpened}`}>
        <form className={`form form_${name}`} name={name} onSubmit={onSubmit}>
          <button type="button" className="form__close-icon" onClick={onClose}><img src={closeIcon} alt="Закрыть форму" /></button>
          <h5 className="form__title">{title}</h5>
            {children}
        </form>
      </section>
    )
}

export default PopupWithForm;
