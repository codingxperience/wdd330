const list = document.querySelector('.list')
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const item = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span')

  listItem.appendChild(listText);
  listText.textContent = item;

});
