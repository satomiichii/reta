const form = document.getElementById('contact-form');
function addSubmitListener() {
  form.addEventListener('submit', handleSubmit);
}

function emailValidation() {
  const mail1 = document.getElementById('email').value;
  const mail2 = document.getElementById('emailConfirm').value;
  const errorMessage = document.getElementById('error');
  if (mail1 !== mail2) {
    errorMessage.classList.remove('invisible');
    errorMessage.setAttribute('autofocus', '');
  } else {
    errorMessage.classList.add('invisible');
  }
}

function handleSubmit(e) {
  e.preventDefault();
  emailValidation();
}

function init() {
  addSubmitListener();
}

init();
