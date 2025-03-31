//We are importing our indec.css file into JS file
import "./index.css";

//Importing images
import logo from "../images/logo.svg";

//Project 9: Importing the enableValidation from validation.js
//We will then call it at the end in the bottom
import {
  enableValidation,
  settings,
  resetValidation,
} from "../../scripts/validation.js";

//Importing the API to get the cards
import Api from "../utils/Api.js";

/* it's an array so we need to use brackets */
/* We need at least 6 propeobjectsrties and  these objects need properties of name and link */
// const initialCards = [
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//   },
//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//   },
//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//   },
//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//   },
//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
// ];

///////////Instantiating API.JS code per Project -9 Brief//////////
const api = new Api({
  baseURL: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "afff5bf3-ed81-4f6d-9851-50932f76d0ba",
    "Content-Type": "application/json",
  },
});

//Desctructure the second item in the callback of the .then()
api
  .getAppInfo()
  .then(([cards, userInfo]) => {
    //Fetch the users info from the server
    cards.forEach((item) => {
      const cardElement = getCardElement(item); //Here you are getting the card element
      cardsList.append(cardElement); //Here you are appending it to the DOM
    });
    //Handle the user's information
    //set the src of the avatar image
    //set the text content of both the text elements
    const profileAvatar = document.querySelector(".profile__avatar");
    profileAvatar.src = userInfo.avatar;
    const profileName = document.querySelector(".profile__name");
    profileName.textContent = userInfo.name;
    const profileDescription = document.querySelector(".profile__description");
    profileDescription.textContent = userInfo.about;
  })
  .catch((err) => console.log("Error fetching user info:", err));

// console.log(initialCards);

/* This is the class you want to use to have the edit profile button respond */
const profileEditButton = document.querySelector(".profile__edit-btn");
const cardModalBtn = document.querySelector(".profile__add-btn");

const avatarModalBtn = document.querySelector(".profile__avatar-btn");

/*First step to put name in form box*/
const profileName = document.querySelector(".profile__name");
/*First step to put description in form box*/
const profileDescription = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-profile-modal");

const editFormElement = editModal.querySelector(".modal__form");

const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
/*2nd step to put name in form box*/
const editModalNameInput = editModal.querySelector("#profile-name-input");
/*2nd step to put description in form box*/
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

//CARD FORM ELEMENT
const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector(".modal__form"); //step in selecting the form (first part to Task 3/7. Adding a card)
const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

//AVATAR FORM ELEMENT
const avatarModal = document.querySelector("#avatar-modal");
const avatarForm = avatarModal.querySelector(".modal__form"); //step in selecting the form (first part to Task 3/7. Adding a card)
const avatarSubmitBtn = avatarModal.querySelector(".modal__submit-btn");
const avatarModalCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarNameInput = avatarModal.querySelector("#profile-avatar-input");

//SELECTING THE MODAL - this will allow you open the card
const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
//Closing out the card image by clicking x
const previewModalDeleteBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);

/*DEALING WITH CARDS*/
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

/*We need to clone the card template, grab the element from inside it, and then insert the necesary date (src, alt)*/
/*If it's going to need to insert that stuff, it's going to need to recieve that as an arguement(labeled "data" below)*/

//EXERCISE: Assign values to the image src and alt
function getCardElement(data) {
  console.log(data);

  /*Clone the card template */
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  /* Select the card title element */
  const cardNameEl = cardElement.querySelector(".card__title");

  /* Select the image element */
  const cardImageEl = cardElement.querySelector(".card__image");

  /* Assign values to the image src and alt attributes */
  cardImageEl.src = data.link; // Set the image source
  cardImageEl.alt = data.name; // Set the alt text for accessibility

  /*Assign text content to the card title */
  cardNameEl.textContent = data.name;

  // BASIC STEPS TO SET AN EVENTLISTENER ON SOMETHING:
  // Step 1: select the element
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");

  // Step 2: add the eventListener & Step 3: write code that hanfles the event
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked"); //no need for a ""."before ard__like-button_liked because classList assumes you are talking about a class
  });

  //TODO: Select the delete button
  //TODO - set the listener on delete button
  //TODO - The handler should remove the card from the DOM
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  //POP OPEN THE CARD IMAGE (element was already selected earlier) so we are setting the listener now:
  cardImageEl.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImageEl.src = data.link;
    previewModalImageEl.alt = data.name;

    previewModalCaptionEl.textContent = data.name;
  });

  return cardElement;
}

/*this will pop open the edit profile container when click the button */
function openModal(modal) {
  modal.classList.add("modal_opened");
  // added in project 6
  document.addEventListener("keydown", handleEscapeClose);
  modal.addEventListener("mousedown", handleOverLayClose);
}

/*this will close the profile contatiner when clicking the x*/
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  // added in project 6
  document.removeEventListener("keydown", handleEscapeClose);
  modal.removeEventListener("mousedown", handleOverLayClose);
}

/* We need to write a function fot the eventListener on the handleEdditFormSubmit to allow the submit behavior to work*/
/* Anytime you pass a function to the evenListener, the even object is passed as the first arguement*/
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      //TODO: Use data argument instead of the input values
      /*earlier we set the value to the text content, now we're assigning text.content to the value*/
      profileName.textContent = data.name;
      /*now that we did it got profileName, let's do it for profileDescription*/
      profileDescription.textContent = data.about;
      /*This code allows the editProfileContatiner to close once clicking submit*/
      closeModal(editModal);
    })
    .catch((err) => {
      console.error("Error updating user info", err);
    });
}

// added in project 6: To close with Esc key
function handleEscapeClose(evt) {
  if (evt.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closeModal(modal);
  }
}
// added in project 6: to close outside of form with click
function handleOverLayClose(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

//Step 3 in creating the function for th ehandler in Task 3/7. Adding a card
//evt is added to help prevent the default browsing behavior like the functon above
function handleAddCardSubmit(evt) {
  evt.preventDefault();

  api
    .addCard({
      name: cardNameInput.value,
      link: cardLinkInput.value,
    })
    .then((data) => {
      const cardElement = getCardElement(data);
      cardsList.prepend(cardElement);
      closeModal(cardModal);

      cardForm.reset();
      disableButton(cardSubmitBtn, settings);
    })
    .catch((err) => {
      console.error("Error adding new card:", err);
    });
}

/*function will describe what happens when the button is clicked */
profileEditButton.addEventListener("click", () => {
  /*Last step to put name in form box*/
  editModalNameInput.value =
    profileName.textContent; /*assigning the value to the text content*/

  /*Last step to put description in form box*/
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editFormElement,
    [editModalNameInput, editModalDescriptionInput],
    settings
  );
  openModal(editModal);
});

editModalCloseBtn.addEventListener("click", (evt) => {
  closeModal(editModal);
});

//Task 2/7. Form for adding a card

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalCloseBtn.addEventListener("click", (evt) => {
  closeModal(cardModal);
});

avatarModalBtn.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarModalCloseBtn.addEventListener("click", () => {
  closeModal(avatarModal);
});

//Closing the image card when opened by click on x
previewModalDeleteBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

//Task 3/7. Adding a card

editFormElement.addEventListener("submit", handleEditFormSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit); //(2nd step - setting the listener to the cardForm)

/*What this says: as long as "i < initialCards.length" you keep iterating*/
/* "i++" after each iteration, increment i by 1 (add by 1) */

/* SPRINT 5: */

/*First we will call the method & start with the name of the array we want to loop (initalCards)
The the for loop accepts an arguement that needs to be a function or arrow function like used
The first item arguement this arrow function accepts will be item of one of the cards stored in the array (initalCards)*/
// initialCards.forEach((item) => {
//   const cardElement = getCardElement(item); //Here you are getting the card element
//   cardsList.append(cardElement); //Here you are appending it to the DOM
// });

//Caling enableValidation
enableValidation(settings);
