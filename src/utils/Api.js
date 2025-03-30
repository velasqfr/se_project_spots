// import { link } from "fs";

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
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log("Error fetching user info:", err));
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(`Error: ${res.status})`);
    });
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
        Promise.reject(`Error: ${res.status})`);
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
        Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log("Error adding cards:", err));
  }
}

// export the class
export default Api;
