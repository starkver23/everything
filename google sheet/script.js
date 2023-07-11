const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const lastNameInput = document.getElementById('last-name');
const addressInput = document.getElementById('address');

const usernameRegex = /^[a-zA-Z][a-zA-Z .]{2,29}$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const mobileRegex = /^\d{10}$/;

function validateUsername() {
  if (usernameInput.value.trim() === '') {
    usernameInput.setCustomValidity('Please enter your username.');
    return false;
  }
  if (!usernameRegex.test(usernameInput.value)) {
    usernameInput.setCustomValidity('Invalid username format.');
    return false;
  }
  usernameInput.setCustomValidity('');
  return true;
}

function validatePassword() {
  if (passwordInput.value.trim() === '') {
    passwordInput.setCustomValidity('Please enter your password.');
    return false;
  }
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.setCustomValidity('Invalid password format.');
    return false;
  }
  passwordInput.setCustomValidity('');
  return true;
}

function validateEmail() {
  if (emailInput.value.trim() === '') {
    emailInput.setCustomValidity('Please enter your email address.');
    return false;
  }
  if (!emailRegex.test(emailInput.value)) {
    emailInput.setCustomValidity('Invalid email format.');
    return false;
  }
  emailInput.setCustomValidity('');
  return true;
}

function validateMobile() {
  if (mobileInput.value.trim() === '') {
    mobileInput.setCustomValidity('Please enter your mobile number.');
    return false;
  }
  if (!mobileRegex.test(mobileInput.value)) {
    mobileInput.setCustomValidity('Invalid mobile number format.');
    return false;
  }
  mobileInput.setCustomValidity('');
  return true;
}

function validateLastName() {
  if (lastNameInput.value.trim() === '') {
    lastNameInput.setCustomValidity('Please enter your last name.');
    return false;
  }
  lastNameInput.setCustomValidity('');
  return true;
}

function validateAddress() {
  if (addressInput.value.trim() === '') {
    addressInput.setCustomValidity('Please enter your address.');
    return false;
  }
  addressInput.setCustomValidity('');
  return true;
}

// add event listeners to form inputs
usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);
emailInput.addEventListener('input', validateEmail);
mobileInput.addEventListener('input', validateMobile);
lastNameInput.addEventListener('input', validateLastName);
addressInput.addEventListener('input', validateAddress);
const scriptURL = 'https://script.google.com/macros/s/AKfycbwT8lf-lBPZGjpcHxCZAZ5h18ORaMhNPhOqRkyxtg-7qZ3FbDYyqojOcuLs9Uc5A5Ot2g/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })