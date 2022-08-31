const addingYourName = document.getElementById('lorem-title-name');

addingYourName.textContent = `${localStorage.getItem('username')}'s Lorem`;
