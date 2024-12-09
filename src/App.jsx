import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };

    return (
        <div>
            <h1>My Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    );
}

export default App;
