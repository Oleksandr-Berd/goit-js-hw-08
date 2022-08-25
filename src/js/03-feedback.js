import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const ref = {
  mail: document.querySelector('input[name="email"'),
  message: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button[type="submit"]'),
};

const data = {
  mail: '',
  message: '',
};

fillData();

ref.form.addEventListener('input', throttle(dataCheck, 500));

ref.form.addEventListener('submit', submitData);

function dataCheck(evt) {
  evt.target === ref.message
    ? (data.message = evt.target.value)
    : (data.mail = evt.target.value);

  const dataStr = JSON.stringify(data);

  localStorage.setItem(LOCALSTORAGE_KEY, dataStr);
}

function submitData(evt) {
  evt.preventDefault();

  const dataObject = localStorage.getItem(LOCALSTORAGE_KEY);

  const object = JSON.parse(dataObject);

  console.log(object);

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function fillData() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);

  const savedDataParse = JSON.parse(savedData);
  if (savedDataParse) {
    ref.mail.value = savedDataParse.mail;
    ref.message.value = savedDataParse.message;

    data.mail = savedDataParse.mail;
    data.message = savedDataParse.message;
  }
}
