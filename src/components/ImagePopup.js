import React from 'react';
import closeIcon from '../images/close-icon.svg';

function ImagePopup({ isOpen, name, onClose, card })
  {
    const popupOpened = isOpen ? ' overlay_opened' : '';
    return(
      <section className={`overlay overlay_${name}${popupOpened}`}>
        <figure className="overlay-figure">
          <button type="button" className="form__close-icon" onClick={onClose}><img src={closeIcon} alt="Закрыть форму" /></button>
          <img src={`${card.link}`} alt={card.name} className="overlay-figure__image" />
          <figcaption className="overlay-figure__caption">{card.name}</figcaption>
        </figure>
      </section>
    )
}

export default ImagePopup;
