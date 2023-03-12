const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const taskList = document.querySelector('.task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    addTask(input.value);
    input.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    <span>${task}</span>
    <button class="delete">Delete</button>
  `;
  taskList.appendChild(li);
  const deleteButton = li.querySelector('.delete');
  deleteButton.addEventListener('click', function () {
    li.remove();
  });
}
