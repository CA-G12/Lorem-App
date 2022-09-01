const signInForm = document.querySelector('#stripe-login');
// const emailErrorDiv = document.querySelector('.email-error');
// const passErrorDiv = document.querySelector('.pass-error');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm.email.value;
  const password = signInForm.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('you must enter valid value');
    return;
  }

  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  };
  fetch('/sign-in', options)
    .then((res) => window.location = '../lorem/index.html')
    .catch((err) => console.log(err));
});
