const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");

// on click it should call checkValidity func
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkValidity();
});

// check for invalid errors
function checkValidity() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const phoneValue = phone.value.trim();

  if (usernameValue === "") {
    // show that there is an error
    setErrorClass(username, "Username cannot be blank");
  } else {
    // add success class
    setSuccessClass(username);
  }

  if (passwordValue === "") {
    // show that there is an error
    setErrorClass(password, "Password cannot be blank");
  } else {
    // add success class
    setSuccessClass(password);
  }
  if (password2Value === "") {
    // show that there is an error
    setErrorClass(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorClass(password2, "Passwords must match");
  } else {
    // add success class
    setSuccessClass(password2);
  }
  if (phoneValue === "") {
    // show that there is an error
    setErrorClass(phone, "Email cannot be blank");
  } else {
    // add success class
    setSuccessClass(phone);
  }
  if (emailValue === "") {
    // show that there is an error
    setErrorClass(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorClass(email, "Email is not valid");
  } else {
    // add success class
    setSuccessClass(email);
  }
}

function setErrorClass(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // setting the error message
  small.innerText = message;
  // add error setErrorClass
  formControl.className = "form-control error";
}

function setSuccessClass(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function isEmail() {
  return /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email);
  //   /^(([^<>()\[\]\\.,;:\s@"+(\.[^<>()\[])]]))
}
function popUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
