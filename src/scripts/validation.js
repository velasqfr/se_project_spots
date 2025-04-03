// Declaring a configuration object that contains the
// necessary classes and selectors.
export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formEl, inputElement, errorMessage, config) => {
  const errorMessageID = inputElement.id + "-error";
  //this will allow the red error message to appear when the input text is NOT valid
  const errorMessageEl = formEl.querySelector("#" + errorMessageID);
  errorMessageEl.textContent = errorMessage;
  console.log(errorMessageID);
  //We want to call the class when we're showing an input error
  // (modal__input is the class we want to modify)
  inputElement.classList.add(config.inputErrorClass);
};

//this will now hide the error message when the input text IS valid
const hideInputError = (formEl, inputElement, config) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageEl = formEl.querySelector("#" + errorMessageID);
  errorMessageEl.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (formEl, inputElement, config) => {
  //If inputElement.validity.valid is true we call the hideInputError but,
  //If inputElement.validity.valid is false we need to apply styles to make our error message dissapear
  if (!inputElement.validity.valid) {
    showInputError(
      formEl,
      inputElement,
      inputElement.validationMessage,
      config
    );
    //If the above is not true (if input text is valid), then the show error message dissapears
  } else {
    hideInputError(formEl, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  //this first arguement will represent an input from the inputlist and iterate through it
  //where each of them will be checked
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  //we need to call hasInvalidInput and have it pass the inputList
  // to tell us if one or more of these is invalid
  //IF there is an invalid error messagge, 1st we need to disabled the button
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
    //add a modifier class to the buttonElement to make it grey
    //Don't forget the CSS
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

//remove the disabled class
export const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};

//Exporting resetValidation into index.js per project 9
export const resetValidation = (formEl, inputList, config) => {
  inputList.forEach((input) => {
    hideInputError(formEl, input, config);
  });
};

const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonElement = formEl.querySelector(config.submitButtonSelector);

  // TODO - Handle initial states
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

/* this funcion is going to select all the forms,iterate through the forms, & set the necessary eventListerns in each one */

//Project 9: we need to export enablevalidation function because we removed the validation line
//Then we need to call it in index.js
export const enableValidation = (config) => {
  console.log(config.formSelector);
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formEl) => {
    //this is going to log the first form, then the second form.
    setEventListeners(formEl, config);
  });
};
