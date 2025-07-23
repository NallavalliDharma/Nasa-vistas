// SIGNUP FORM
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const firstnameError = document.getElementById("firstname-error");
  const lastnameError = document.getElementById("lastname-error");
  const mobileError = document.getElementById("mobile-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById("confirmPassword-error");

  // Clear previous error messages
  firstnameError.textContent = "";
  lastnameError.textContent = "";
  mobileError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  if (firstname === "" || !/^[A-Za-z]+$/.test(firstname)) {
    firstnameError.textContent = "Please enter a valid first name (letters only).";
    isValid = false;
  }

  if (lastname === "" || !/^[A-Za-z]+$/.test(lastname)) {
    lastnameError.textContent = "Please enter a valid last name (letters only).";
    isValid = false;
  }

  if (mobile === "" || !/^\d{10}$/.test(mobile)) {
    mobileError.textContent = "Please enter a valid 10-digit mobile number.";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password === "" || password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    passwordError.textContent = "Password must be at least 8 characters long, contain an uppercase letter, and a number.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
    return;
  }

  // Save user data in localStorage
  const user = {
    firstname,
    lastname,
    mobile,
    email,
    password
  };
  localStorage.setItem("nasaUser", JSON.stringify(user));
  alert("Signup successful! Please log in.");
  window.location.href = "login.html";
});


// LOGIN FORM
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const loginEmail = document.getElementById("email").value;
  const loginPassword = document.getElementById("password").value;

  const savedUser = JSON.parse(localStorage.getItem("nasaUser"));

  if (!savedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (loginEmail === savedUser.email && loginPassword === savedUser.password) {
    alert("Login successful!");
    window.location.href = "/Home/home.html";
  } else {
    alert("Incorrect email or password.");
  }
});

// RESET SIGNUP FORM
document.getElementById('resetForm')?.addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('signupForm').reset();
});
