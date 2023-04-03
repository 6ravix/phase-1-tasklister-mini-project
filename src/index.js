document.addEventListener("DOMContentLoaded", () => {
  // get the form element
  const form = document.querySelector('form');
  // get the list element
  const list = document.querySelector('ul');

  // function to create a new list item
  const createNewListItem = (task, priority, user, duration, dueDate) => {
    // create a new list item element with the input value as its text content
    const newItem = document.createElement('li');
    newItem.classList.add(priority);
    newItem.innerHTML = `
      <span>${task}</span>
      <span>${priority}</span>
      <span>${user}</span>
      <span>${duration}</span>
      <span>${dueDate}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    // add event listeners to the edit and delete buttons
    const editBtn = newItem.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
      const taskInput = document.querySelector('#task-input');
      const prioritySelect = document.querySelector('#priority-select');
      const userInput = document.querySelector('#user-input');
      const durationInput = document.querySelector('#duration-input');
      const dateInput = document.querySelector('#date-input');

      taskInput.value = task;
      prioritySelect.value = priority;
      userInput.value = user;
      durationInput.value = duration;
      dateInput.value = dueDate;

      list.removeChild(newItem);
    });

    const deleteBtn = newItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      list.removeChild(newItem);
    });

    // append the new list item to the list
    list.appendChild(newItem);
  };

  // add a submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission

    // get the input values
    const taskInput = document.querySelector('#task-input');
    const prioritySelect = document.querySelector('#priority-select');
    const userInput = document.querySelector('#user-input');
    const durationInput = document.querySelector('#duration-input');
    const dateInput = document.querySelector('#date-input');

    const task = taskInput.value;
    const priority = prioritySelect.value;
    const user = userInput.value;
    const duration = durationInput.value;
    const dueDate = dateInput.value;

    // create a new list item with the input values
    createNewListItem(task, priority, user, duration, dueDate);

    // clear the input fields
    taskInput.value = '';
    prioritySelect.value = 'low';
    userInput.value = '';
    durationInput.value = '';
    dateInput.value = '';
  });

  // add a click event listener to the sort button
  const sortBtn = document.querySelector('#sort-btn');
  sortBtn.addEventListener('click', () => {
    const listItems = Array.from(list.children);
    listItems.sort((a, b) => {
      const aPriority = a.classList[0];
      const bPriority = b.classList[0];

      if (aPriority === 'high' && bPriority !== 'high') {
        return -1;
      } else if (aPriority !== 'high' && bPriority === 'high') {
        return 1;
      } else if (aPriority === 'medium' && bPriority === 'low') {
        return -1;
      } else if (aPriority === 'low' && bPriority === 'medium') {
        return 1;
      } else {
        return 0;
      }
    });

    listItems.forEach((item) => {
      list.removeChild(item);
      list.appendChild

