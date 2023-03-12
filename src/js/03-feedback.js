import throttle from './libraries';
import { STORAGE_KEY } from './constants';
import { refs } from './refs';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
populateTextarea();
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage?.email) {
    refs.input.value = savedMessage.email;
    formData.email = savedMessage.email;
  }
  if (savedMessage?.message) {
    refs.textarea.value = savedMessage.message;
    formData.message = savedMessage.message;
  }
}
