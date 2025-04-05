//import { link } from "fs";

class Api {
  constructor({ baseURL, headers }) {
    //We are destructuring the arguement and then assigning those permaters as private fields
    this._baseURL = baseURL;
    this._headers = headers;
  }

  getAppInfo() {
    //call getUserInfo it in this array
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  //1. Loading user information from the server
  //Method to get user information -  other methods for working with the API, like getuserInfo (different baseURL)
  getUserInfo() {
    const url = `${this._baseURL}/users/me`;
    console.log("Fetching user info from:", url);

    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => res.json())
      .catch((err) => console.log("Error fetching user info:", err));
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers,
    }).then((res) => {
      console.log("Fetching cards, response status:", res.status);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  //8. Updating the profile picture
  editAvatarInfo(avatar) {
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      // Send the data in the body as a JSON string.
      body: JSON.stringify({
        avatar,
      }), // handle the response
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log("Error updating avatar:", err));
  }

  //3. Editing the profile text content
  editUserInfo({ name, about }) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      // Send the data in the body as a JSON string.
      body: JSON.stringify({
        name,
        about,
      }), // handle the response
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log("Error updating user info:", err));
  }

  addCard({ name, link }) {
    return fetch(`${this._baseURL}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log("Error adding cards:", err));
  }

  deleteCard(id) {
    return fetch(`${this._baseURL}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  ///Paramarization - took the addLike method and removeLike method (seen below) and made it into ONE code changeLike
  changeLike(id, isLiked) {
    return fetch(`${this._baseURL}/cards/${id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  //addLike Method
  /* addLike(id) {
  return fetch(`${this._baseURL}/cards/${id}/likes`, {
    method: "PUT",
    headers: this._headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
} */

  //removeLike Method
  /* removeLike(id) {
  return fetch(`${this._baseURL}/cards/${id}/likes`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
} */
}

// export the class
export default Api;
