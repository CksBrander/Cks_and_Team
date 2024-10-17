function validateForm() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("pass").value;
  const nameError = document.getElementById("name-error");
  const passwordError = document.getElementById("password-error");

  nameError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  if (name.length > 5 && (name === "" || /\d/.test(name))) {
      nameError.textContent =
          "Please enter your name properly.";
      isValid = false;
  }

  if (password === "" || password.length < 6) {
      passwordError.textContent =
          "Please enter a password with at least 6 characters.";
      isValid = false;
  }

  return isValid;
}