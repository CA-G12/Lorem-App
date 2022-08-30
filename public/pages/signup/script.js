const signUpBtn = document.getElementById('sign-up-btn');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  console.log(username, email, password, confirmPassword);
});

const validateForm = (username, email, password, confirmPassword) => {
    if(username.trim()  === '') {
        usernameInput.style.color = 'red';
    }
};
