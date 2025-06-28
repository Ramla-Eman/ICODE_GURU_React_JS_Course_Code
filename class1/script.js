const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const addBtn = document.getElementById('addBtn');
const personList = document.getElementById('personList');

addBtn.addEventListener('dblclick', () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name !== '' && age !== '') {
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Age: ${age}`;
    personList.appendChild(li);

    nameInput.value = '';
    ageInput.value = '';
  }
});