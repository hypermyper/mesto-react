import React from 'react';
import closeIcon from '../images/close-icon.svg';

function PopupWithForm(props)
  {
    const popupOpened = props.isOpen ? ' overlay_opened' : '';

    return(
      <section className={`overlay overlay_${props.name}${popupOpened}`}>
        <form className={`form form_${props.name}`} name={props.name} onSubmit={props.onSubmit}>
          <button type="button" className="form__close-icon" onClick={props.onClose}><img src={closeIcon} alt="Закрыть форму" /></button>
          <h5 className="form__title">{props.title}</h5>
            {props.children}
        </form>
      </section>
    )
}

export default PopupWithForm;
