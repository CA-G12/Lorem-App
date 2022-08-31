const addingYourName = document.getElementById('lorem-title-name');
const addLoremBtn = document.querySelector('.add-lorem-btn');
const addLoremInput = document.querySelector('.add-lorem-input');

addingYourName.textContent = `${localStorage.getItem('username')}'s Lorem`;

addLoremBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const loremData = addLoremInput.value;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loremData,
    }),
  };
  fetch('/insertLorem', options)
  .then(data => console.log(data))
  .catch(err => console.log(err));
});
