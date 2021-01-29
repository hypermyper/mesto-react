class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers
    })
    .then(res => this._getResponseData(res))
  }

  addNewCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => this._getResponseData(res))
  }

  deleteCard(card) {
    return fetch(`${this._url}cards/${card}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._getResponseData(res))
  }

  addLikeCard(card) {
    return fetch(`${this._url}cards/likes/${card}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => this._getResponseData(res))
  }

  deleteLikeCard(card) {
    return fetch(`${this._url}cards/likes/${card}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._getResponseData(res))
  }

  changeLikeCardStatus(card, isLiked) {
    if (isLiked) {
      return this.deleteLikeCard(card);
    } else {
      return this.addLikeCard(card);
    }
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
    .then(res => this._getResponseData(res))
  }

  updateUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(res => this._getResponseData(res))
  }

  updateAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then(res => this._getResponseData(res))
  }

}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-18/",
  headers: {
    "Content-Type": "application/json",
    authorization: "f0bb41fc-432b-4031-ac23-33a1884786fb",
  },
});

export default api;
