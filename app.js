const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('todo-list');

function getTodos() {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    const todos = getTodos();
    list.innerHTML = '';
    todos.forEach((todo, idx) => {
        const li = document.createElement('li');
        li.textContent = todo.task;
        if (todo.completed) li.classList.add('completed');
        li.onclick = () => toggleTodo(idx);

        // Delete button
        const del = document.createElement('button');
        del.textContent = '🗑️';
        del.onclick = (e) => { e.stopPropagation(); deleteTodo(idx); };

        li.appendChild(del);
        list.appendChild(li);
    });
}

function addTodo(task) {
    const todos = getTodos();
    todos.push({ task, completed: false });
    saveTodos(todos);
    renderTodos();
}

function toggleTodo(idx) {
    const todos = getTodos();
    todos[idx].completed = !todos[idx].completed;
    saveTodos(todos);
    renderTodos();
}

function deleteTodo(idx) {
    const todos = getTodos();
    todos.splice(idx, 1);
    saveTodos(todos);
    renderTodos();
    alert('you want to delete your task ?');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const task = input.value.trim();
    if (task) {
        addTodo(task);
        input.value = '';
    }
});

renderTodos();