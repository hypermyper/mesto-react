import React from 'react';
import closeIcon from '../images/close-icon.svg';

function PopupWithForm({
    title,
    name,
    children,
    isOpen,
    onClose
  })
  {
    const popupOpened = isOpen ? ' overlay_opened' : '';
    return(
      <section className={`overlay overlay_${name}${popupOpened}`}>
        <form className={`form form_${name}`} name={name}>
          <button type="button" className="form__close-icon" onClick={onClose}><img src={closeIcon} alt="Закрыть форму" /></button>
          <h5 className="form__title">{title}</h5>
            {children}
        </form>
      </section>
    )
}

export default PopupWithForm;
