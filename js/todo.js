const todoForm = document.getElementById('todo-form');

const todoInput = document.querySelector('#todo-form input');

const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const paintTodo = (newTodoObj) => {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  const button = document.createElement('button');

  li.appendChild(span);
  span.innerText = newTodoObj.text;
  li.appendChild(button);
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  todoList.appendChild(li);
};

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos.push(...parsedTodos);
  parsedTodos.forEach(paintTodo);
}
