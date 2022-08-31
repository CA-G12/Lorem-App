const signInForm = document.querySelector('#stripe-login');
const submit = document.querySelector('#submit');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm.email.value;
  const password = signInForm.password.value;

  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  };
  fetch('/sign-in', options)
    .then((res) => {
      console.log(res.json());
      window.location = '../../lorem1';
    }).then((data) => console.log(data))
    .catch((err) => console.log(err));
});
