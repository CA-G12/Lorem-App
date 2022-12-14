const addingYourName = document.getElementById('lorem-title-name');
const addLoremBtn = document.querySelector('.add-lorem-btn');
const addLoremInput = document.querySelector('.add-lorem-input');
const cards = document.querySelector('.cards');

const renderData = (arr) => {
  cards.textContent = '';
  arr.forEach((ele) => {
    cards.innerHTML += `
    <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit" onclick = "deleteLorem(${ele.id})"><i class="fas fa-times"></i></p>        <h2 class="card__title">${ele.content}</h2>
        <p class="card__apply">
          <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
        </p>
   </div>
  `;
  });
};

const fetchAll = () => {
  fetch('/getLorem')
    .then((data) => data.json())
    .then((result) => {
      addingYourName.textContent = `${result[1]}'s Lorem`;
      if (result[0].length !== 0) {
        renderData(result[0]);
      }
    })
    .catch((err) => console.log(err));
};
fetchAll();

addLoremBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const loremData = addLoremInput.value;
  if (loremData.trim() === '') {
    alert('Empty text is not allowed');
    return;
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loremData,
    }),
  };
  addLoremInput.value = '';
  fetch('/insertLorem', options)
    .then((data) => fetchAll())
    .catch((err) => console.log(err));
});

const deleteLorem = (id) => {
  fetch(`/deleteLorem/${id}`, { method: 'DELETE' })
    .then(() => fetchAll());
};
