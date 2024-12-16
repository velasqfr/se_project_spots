/* it's an array so we need to use brackets */
/* We need at least 6 propeobjectsrties and  these objects need properties of name and link */
const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

console.log(initialCards);

/* This is the class you want to use to have the edit profile button respond */
const profileEditButton = document.querySelector(".profile__edit-btn");

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

/*this will pop open the edit profile container when click the button */
function openModal() {
  /*Last step to put name in form box*/
  editModalNameInput.value =
    profileName.textContent; /*assigning the value to the text content*/

  /*Last step to put description in form box*/
  editModalDescriptionInput.value = profileDescription.textContent;
  editModal.classList.add("modal_opened");
}

/*this will close the profile contatiner when clicking the x*/
function closeModal() {
  editModal.classList.remove("modal_opened");
}

/* We need to write a function fot the eventListener on the handleEdditFormSubmit to allow the submit behavior to work*/
/* Anytime you pass a function to the evenListener, the even object is passed as the first arguement*/
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  /*earlier we set the value to the text content, now we're assigning text.content to the value*/
  profileName.textContent = editModalNameInput.value;
  /*now that we did it got profileName, let's do it for profileDescription*/
  profileDescription.textContent = editModalDescriptionInput.value;
  /*This code allows the editProfileContatiner to close once clicking submit*/
  closeModal();
}

/*function will describe what happens when the button is clicked */
profileEditButton.addEventListener("click", openModal);

editModalCloseBtn.addEventListener("click", closeModal);

editFormElement.addEventListener("submit", handleEditFormSubmit);
