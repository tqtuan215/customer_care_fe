// Action.js

import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingSubTodo, setEditingSubTodo] = useState(null);
  const navigate = useNavigate();

  const addTodo = () => {
    if (newTodo.trim() === '') {
      return; // Don't add empty todos
    }

    if (editingTodo !== null) {
      // If editing, update the existing todo
      const updatedTodos = todos.map((todo, index) =>
        index === editingTodo ? { ...todo, text: newTodo, subTodos: todo.subTodos } : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
    } else {
      // If not editing, add a new todo
      setTodos([...todos, { text: newTodo, subTodos: [] }]);
    }

    setNewTodo('');
  };

  const editTodo = (index) => {
    setNewTodo(todos[index].text);
    setEditingTodo(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  const addSubTodo = (index, subTodo) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, subTodos: [...todo.subTodos, subTodo] } : todo
    );
    setTodos(updatedTodos);
  };

  const editSubTodo = (todoIndex, subTodoIndex) => {
    setNewTodo(todos[todoIndex].subTodos[subTodoIndex]);
    setEditingTodo(todoIndex);
    setEditingSubTodo(subTodoIndex);
  };

  const deleteSubTodo = (todoIndex, subTodoIndex) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === todoIndex) {
        const updatedSubTodos = todo.subTodos.filter((_, j) => j !== subTodoIndex);
        return { ...todo, subTodos: updatedSubTodos };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditingSubTodo(null);
  };

  return (
    <div>
      <h1>Action List</h1>
      <ul>
        {todos.map((todo, todoIndex) => (
          <li key={todoIndex}>
            {todo.text}{' '}
            <button onClick={() => editTodo(todoIndex)}>Edit</button>
            <button onClick={() => deleteTodo(todoIndex)}>Delete</button>
            <ul>
              {todo.subTodos.map((subTodo, subTodoIndex) => (
                <li key={subTodoIndex}>
                  {subTodo}{' '}
                  <button onClick={() => editSubTodo(todoIndex, subTodoIndex)}>Edit</button>
                  <button onClick={() => deleteSubTodo(todoIndex, subTodoIndex)}>Delete</button>
                </li>
              ))}
              <li>
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={() => addSubTodo(todoIndex, newTodo)}>Add Sub Todo</button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>{editingTodo !== null ? 'Update' : 'Add'}</button>
      <br/>
      <button onClick={() => navigate('create-action')}>Them hanh dong moi</button>
      
      <Outlet/>
    </div>
  );
};

export default TodoList;
