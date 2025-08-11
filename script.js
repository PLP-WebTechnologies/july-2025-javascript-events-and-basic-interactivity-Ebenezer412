// === Part 1 & 2: Event Handling & Interactive Features ===

// Light/Dark mode toggle
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter functionality
let count = 0;
const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});
decreaseBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = count;
}

// === Part 3: Custom Form Validation ===

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission to handle validation first

  clearErrors();
  formSuccess.textContent = '';

  let valid = true;

  // Validate Name (must not be empty)
  if(nameInput.value.trim() === '') {
    nameError.textContent = 'Name cannot be empty.';
    valid = false;
  }

  // Validate Email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Validate Password (min 6 chars)
  if(passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if(valid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset();
  }
});

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
}
