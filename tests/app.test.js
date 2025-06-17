// Simple test for addTodo and getTodos
function testAddTodo() {
    localStorage.clear();
    addTodo('Test Task');
    const todos = getTodos();
    if (todos.length === 1 && todos[0].task === 'Test Task') {
        console.log('✅ testAddTodo passed');
    } else {
        console.error('❌ testAddTodo failed');
    }
}

testAddTodo();