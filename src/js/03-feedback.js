var throttle = require('lodash.throttle');

const form = document.querySelector('form');

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitPush);
const STORAGE_DATA = 'feedback-form-state';

const formObj = {};

localStorageFull();
function onInputForm(e) {
  const value = e.target.value;
  const nameInp = e.target.name;

  formObj[nameInp] = value;

  localStorage.setItem(STORAGE_DATA, JSON.stringify(formObj));
}

function onSubmitPush(e) {
  e.preventDefault();

  console.log(formObj);

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_DATA);
}

function localStorageFull() {
  const storageVal = JSON.parse(localStorage.getItem(STORAGE_DATA));

  if (storageVal === null) {
    return;
  }

  form.message.value = storageVal.message;
  form.email.value = storageVal.email;
}
