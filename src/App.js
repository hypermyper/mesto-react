import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="page">
      <header className="header">
        <img className="header__logo" src="" alt="Логотип Mesto" />
      </header>
      <main>
        <section className="profile">
          <div className="profile__avatar">
            <img src="" alt="" title className="profile__avatar-image" />
          </div>
          <div className="profile-info">
            <div className="profile-info__title-wrap">
              <h1 className="profile-info__title" />
              <button type="button" className="profile-info__edit-button">
                <img src="" alt="Редактировать информацию" />
              </button>
            </div>
            <p className="profile-info__description" />
          </div>
          <button type="button" className="profile__add-button" />
        </section>
        <section className="elements">
        </section>
      </main>
      <footer><p className="footer">© 2020 Mesto Russia</p></footer>
    </div>
    <section className="overlay overlay_edit-profile">
      <form className="form form_edit-profile" name="edit-profile">
        <button type="button" className="form__close-icon"><img src="" alt="Закрыть форму" /></button>
        <h5 className="form__title">Редактировать профиль</h5>
        <input id="input-name" type="text" name="input-name" className="form__input form__input_name" defaultValue autoComplete="off" placeholder="Имя" minLength={2} maxLength={40} required />
        <span id="input-name-error" className="form__input-error" />
        <input id="input-description" type="text" name="input-description" className="form__input form__input_description" defaultValue autoComplete="off" placeholder="Профессия" minLength={2} maxLength={200} required />
        <span id="input-description-error" className="form__input-error" />
        <button type="submit" className="form__submit-button">Сохранить</button>
      </form>
    </section>
    <section className="overlay overlay_edit-profile-avatar">
      <form className="form form_edit-profile-avatar" name="edit-profile-avatar">
        <button type="button" className="form__close-icon"><img src="" alt="Закрыть форму" /></button>
        <h5 className="form__title">Обновить аватар</h5>
        <input id="input-avatar" type="url" name="input-avatar" className="form__input form__input_avatar" defaultValue autoComplete="off" required />
        <span id="input-avatar-error" className="form__avatar-error" />
        <button type="submit" className="form__submit-button">Сохранить</button>
      </form>
    </section>
    <section className="overlay overlay_new-place">
      <form className="form form_new-place" name="new-place">
        <button type="button" className="form__close-icon"><img src="" alt="Закрыть форму" /></button>
        <h5 className="form__title">Новое место</h5>
        <input id="input-new-place" type="text" name="input-new-place" className="form__input form__input_new-place" defaultValue autoComplete="off" placeholder="Название" minLength={2} maxLength={30} required />
        <span id="input-new-place-error" className="form__input-error" />
        <input id="input-image-link" type="url" name="input-image-link" className="form__input form__input_image-link" defaultValue autoComplete="off" placeholder="Ссылка на картинку" required />
        <span id="input-image-link-error" className="form__input-error" />
        <button type="submit" className="form__submit-button form__submit-button_invalid" disabled>Сохранить</button>
      </form>
    </section>
    <section className="overlay overlay_delete-card">
      <form className="form form_delete-card" name="delete-card">
        <button type="button" className="form__close-icon"><img src="" alt="Закрыть форму" /></button>
        <h5 className="form__title">Вы уверены?</h5>
        <button type="submit" className="form__submit-button">Да</button>
      </form>
    </section>
    <section className="overlay overlay_image-popup">
      <figure className="overlay-figure">
        <button type="button" className="form__close-icon"><img src="" alt="Закрыть форму" /></button>
        <img src="" alt="" className="overlay-figure__image" />
        <figcaption className="overlay-figure__caption" />
      </figure>
    </section>
    <template className="template" />
  </div>
  );
}

export default App;
