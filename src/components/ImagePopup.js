import React from 'react';
import closeIcon from '../images/close-icon.svg';

function ImagePopup(props)
  {
    const popupOpened = props.isOpen ? ' overlay_opened' : '';
    return(
      <section className={`overlay overlay_${props.name}${popupOpened}`}>
        <figure className="overlay-figure">
          <button type="button" className="form__close-icon" onClick={props.onClose}><img src={closeIcon} alt="Закрыть форму" /></button>
          <img src={`${props.card.link}`} alt={props.card.name} className="overlay-figure__image" />
          <figcaption className="overlay-figure__caption">{props.card.name}</figcaption>
        </figure>
      </section>
    )
}

export default ImagePopup;
