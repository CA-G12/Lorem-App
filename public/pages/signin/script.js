const signInForm = document.querySelector('#stripe-login');

signInForm.addEventListener('click', (e) => {
  e.preventDefault();
    const email = signInForm.email.value;
    const password = signInForm.password.value;

  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  };
  fetch('/sign-in', options)
    .then((res) => res.json())
    .then((users) => console.log(users))
    .catch((err) => console.log(err));
});
